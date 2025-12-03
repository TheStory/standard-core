# The Story – Standard Core

[![Release](https://github.com/TheStory/standard-core/actions/workflows/release.yml/badge.svg)](https://github.com/TheStory/standard-core/actions/workflows/release.yml)

## Overview

This is the monorepo root. The UI and utilities library lives under the "standard-core/" directory and is published to npm as the package `@the-story/standard-core`.

## Installation (package)

```
npm install @the-story/standard-core
# or
yarn add @the-story/standard-core
```

## Package documentation

The full README for the package is located at:
- standard-core/README.md

## Releases

Releases are tag‑driven via GitHub Actions with npm provenance enabled.
- Create a tag `vX.Y.Z` on the main branch → the workflow will build and publish the package.
- Add a repository secret `NPM_TOKEN` (an npm granular automation token with Publish permission for the scope `@the-story/*`).

## License

Apache 2.0 — see the LICENSE and NOTICE files.
