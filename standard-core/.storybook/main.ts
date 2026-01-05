import type { StorybookConfig } from "@storybook/nextjs-vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import type { Plugin } from "vite";

// Suppress various build warnings
const suppressWarning = (chunk: any): boolean => {
  if (typeof chunk === "string") {
    // Suppress Vite CJS deprecation warning
    if (chunk.includes("The CJS build of Vite's Node API is deprecated")) {
      return true;
    }
    // Suppress MUI icons package.json warning
    if (chunk.includes("unable to find package.json for @mui/icons-material")) {
      return true;
    }
  }
  return false;
};

const originalStderrWrite = process.stderr.write.bind(process.stderr);
process.stderr.write = ((chunk: any, encoding?: any, callback?: any): boolean => {
  if (suppressWarning(chunk)) {
    return true;
  }
  return originalStderrWrite(chunk, encoding, callback);
}) as typeof process.stderr.write;

const originalStdoutWrite = process.stdout.write.bind(process.stdout);
process.stdout.write = ((chunk: any, encoding?: any, callback?: any): boolean => {
  if (suppressWarning(chunk)) {
    return true;
  }
  return originalStdoutWrite(chunk, encoding, callback);
}) as typeof process.stdout.write;

const config: StorybookConfig = {
  stories: [
    "../src/stories/**/*.mdx",
    "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  framework: "@storybook/nextjs-vite",
  async viteFinal(config) {
    config.plugins = config.plugins || [];

    // Custom plugin to fix MDX React shim resolution
    const mdxReactShimPlugin: Plugin = {
      name: "mdx-react-shim-resolver",
      enforce: "pre",
      async resolveId(source, importer) {
        if (source.includes("mdx-react-shim.js")) {
          // Resolve through normal node resolution
          return await this.resolve(
            "@storybook/addon-docs/mdx-react-shim",
            importer,
            { skipSelf: true },
          );
        }
        return null;
      },
    };

    config.plugins.push(mdxReactShimPlugin);

    config.plugins.push(
      nodePolyfills({
        include: ["buffer", "process", "util"],
        globals: {
          Buffer: true,
          process: true,
        },
      }),
    );

    // Suppress warnings and increase chunk size limit
    config.build = config.build || {};
    config.build.chunkSizeWarningLimit = 2000; // Increase to 2000kb for Storybook builds
    config.build.sourcemap = false; // Disable sourcemaps to avoid resolution errors
    config.build.rollupOptions = config.build.rollupOptions || {};
    config.build.rollupOptions.output = config.build.rollupOptions.output || {};
    if (!Array.isArray(config.build.rollupOptions.output)) {
      config.build.rollupOptions.output.sourcemap = false;
    }
    config.build.rollupOptions.onLog = (level, log, handler) => {
      // Suppress sourcemap resolution errors
      if (
        log.message?.includes("Error when using sourcemap for reporting an error")
      ) {
        return;
      }
      handler(level, log);
    };

    config.build.rollupOptions.onwarn = (warning, warn) => {
      // Ignore "use client" directive warnings
      if (
        warning.code === "MODULE_LEVEL_DIRECTIVE" &&
        warning.message.includes('"use client"')
      ) {
        return;
      }

      // Ignore crypto module externalization warnings (we have polyfills)
      if (
        warning.message?.includes('Module "crypto" has been externalized') ||
        warning.message?.includes("module-externalized-for-browser-compatibility")
      ) {
        return;
      }

      warn(warning);
    };

    // Custom logger to suppress crypto externalization warnings
    const defaultLogger = config.customLogger || {
      info: console.info,
      warn: console.warn,
      error: console.error,
      warnOnce: console.warn,
      hasWarned: false,
      clearScreen: () => {},
      hasErrorLogged: () => false,
    };

    config.customLogger = {
      ...defaultLogger,
      warn: (msg, options) => {
        // Suppress crypto module externalization warnings
        if (
          typeof msg === "string" &&
          (msg.includes('Module "crypto" has been externalized') ||
            msg.includes("module-externalized-for-browser-compatibility") ||
            msg.includes("unable to find package.json for @mui/icons-material"))
        ) {
          return;
        }
        defaultLogger.warn(msg, options);
      },
      error: (msg, options) => {
        // Suppress sourcemap resolution errors
        if (
          typeof msg === "string" &&
          msg.includes("Error when using sourcemap for reporting an error")
        ) {
          return;
        }
        defaultLogger.error(msg, options);
      },
    };

    return config;
  },
};
export default config;
