# Standard Core by The Story

A set of core UI components, configuration, and utilities to be reused across other projects. The library is developed in isolation in Storybook and then verified inside external applications.

## How to use the library in a project

During development, we use yalc for local linking (a lightweight alternative to a private npm registry).
- yalc repository: https://github.com/wclr/yalc

### Quick start (local link via yalc) — using PyCharm Run configurations
1. In the library (this repository):
   - In PyCharm, use the already added Run configurations: "build", "yalc:publish" (optionally also "yalc:push").
   - Run "yalc:publish".
2. In the consuming application:
   - Use the existing project configuration that adds the package via yalc (e.g., "yalc:add" or a "Shell Script" configuration with: yalc add @the-story/standard-core).
   - Run the prepared configuration that installs dependencies (e.g., NPM "install"/"yarn install").
   - Start the application using its dedicated Run configuration and verify it works.
3. Updating when the library changes:
   - In the library: run "yalc:publish" to push the update to all consumers.
   - In the app: run the "yalc:update" configuration to update the package; optionally restart the dev server.
4. Removing the yalc package in the app: run the existing configuration that removes the package (e.g., a "Shell Script" with: yalc remove @the-story/standard-core).

Note: Eventually the package may be published to an npm registry (public or private). yalc is intended only for local development.

## Component development (Storybook)

We use Storybook to build and preview components. Every component MUST have at least one story that demonstrates its basic usage and state variants.

- Launching Storybook: in PyCharm run the existing NPM configuration "storybook" from the Run toolbar.
- Building a static version: in PyCharm run the existing NPM configuration "build-storybook".

Guidelines:
- In this project, stories live in the `src/stories` directory, grouped into categories (e.g., `Atoms`, `Molecules`) and mirroring component structure, e.g., `src/stories/Atoms/Button/Button.stories.tsx`.
- Use the `*.stories.ts(x)` naming and include multiple usage variants of the component.
- Add different prop variants and states (loading/disabled/error), including edge cases.
- If a component has external dependencies or requires context (Theme/Intl/Router), prepare appropriate Storybook decorators.

## Verification in an external application

After confirming the component works in Storybook:
1. In the library, run the NPM "build" configuration in PyCharm.
2. Next run the "yalc:publish" configuration.
3. In the consuming app, use its prepared PyCharm configurations (e.g., "yalc add", "install", "dev") and test the integration (styles, interactions, SSR/CSR, etc.).

## Environment variables

These variables should be configured in the application that uses the library (in its `.env` file), not in this package.
