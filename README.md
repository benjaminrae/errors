# Errors

![Commitlint](https://github.com/benjaminrae/errors/actions/workflows/commitlint.yml/badge.svg
) ![Tests](https://github.com/benjaminrae/errors/actions/workflows/test.yml/badge.svg) ![Build](https://github.com/benjaminrae/errors/actions/workflows/build.yml/badge.svg) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

> The first step to great error handling is having great errors
>
## Table of Contents

- [Errors](#errors)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Contributing](#contributing)
  - [License](#license)
    - [`pnpm start`](#pnpm-start)
    - [`pnpm start:dev`](#pnpm-startdev)
    - [`pnpm test`](#pnpm-test)
    - [`pnpm test:coverage`](#pnpm-testcoverage)
    - [`pnpm test:dev`](#pnpm-testdev)
    - [`pnpm build`](#pnpm-build)
    - [`pnpm build:dev`](#pnpm-builddev)
    - [`pnpm clean`](#pnpm-clean)
    - [`pnpm rebuild`](#pnpm-rebuild)
    - [`pnpm prettier`](#pnpm-prettier)
    - [`pnpm prettier:check`](#pnpm-prettiercheck)
    - [`pnpm prettier:fix`](#pnpm-prettierfix)

## Getting Started

To use this project, follow the steps below:

Clone the repository to your local machine:

```bash
git clone https://github.com/benjaminrae/errors.git
```

Navigate to the project directory:

```bash
cd errors
```

Install the dependencies using pnpm:

```bash
pnpm install
```

Run tests using the following command:

```bash
pnpm test
```

## Contributing

Explain how others can contribute to your project/template. You can include guidelines for submitting bug reports, feature requests, or pull requests. It's also helpful to mention the coding standards or guidelines you expect contributors to follow. Check out [Contributor Covenant](https://www.contributor-covenant.org/) for help creating a code of conduct for your project.

## License

Mention the license under which your project/template is released. If you're unsure about which license to choose, you can visit [choosealicense.com](https://choosealicense.com/) for guidance. Make sure to include any additional terms or conditions specific to your project.

In the project directory, you can run the following scripts:

### `pnpm start`

Runs the application in production mode. It starts the Node.js server.

### `pnpm start:dev`

Runs the application in development mode using Nodemon. Nodemon automatically restarts the server whenever changes are detected, making the development process more efficient.

### `pnpm test`

Launches the test runner (Jest) to execute the tests. By default, it only shows test results for files that have changed since the last commit.

### `pnpm test:coverage`

Generates test coverage reports using Jest. It provides detailed information about the code coverage of your tests.

### `pnpm test:dev`

Runs the test runner in watch mode. It re-runs the tests whenever changes are detected, making it convenient for continuous testing during development.

### `pnpm build`

Builds the TypeScript code into JavaScript, generating the compiled files in the `dist` directory.

### `pnpm build:dev`

Builds the TypeScript code into JavaScript in watch mode. It automatically recompiles the code whenever changes are made.

### `pnpm clean`

Deletes the `dist` directory, removing the previously built files.

### `pnpm rebuild`

Combines the `clean` and `build` commands. It removes the `dist` directory and then builds the TypeScript code into JavaScript.

### `pnpm prettier`

Formats the JavaScript, TypeScript, JSON, Markdown, and other supported files using Prettier.

### `pnpm prettier:check`

Checks if the files need to be formatted according to Prettier's rules. It lists the files that differ from the expected formatting.

### `pnpm prettier:fix`

Formats the files according to Prettier's rules and automatically fixes any formatting issues.
