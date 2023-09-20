# Enjoy my cocktail

## Environment

The system is built on node v20.5.0 and npm v9.8.1. It's necessary to have these versions installed to run the project locally.

To set correct node version, run:

```cli
nvm install 20.5.0
```

> Note, the project could not be runned with node 20.6.0 or higher.

To set correct npm version, run:

```cli
npm install -g npm@9.8.1
```

## Available NPM Scripts

This section provides an overview of the available npm scripts for this project. These scripts help you manage development, testing, building, and other maintenance tasks for the project.

```
npm i
```

To be executed in order to run the project.

```
npm run dev
```

This script starts Vite development mode. The project will run locally on a local port number. Any code changes will trigger automatic browser updates.

```
npm start
```

This script also starts Vite development mode and behaves identically to `npm run dev`.

```cli
npm test
```

This script runs tests using Vitest. It will execute all tests in the project.

```cli
npm run coverage
```

This script runs tests with code coverage using Vitest. After completion, it will generate code coverage reports that you can find in your project. You can find the reports [here](./coverage/index.html)

```
npm run build
```

This script builds the project for production using Vite. Before building, it will perform the following steps:

- Run linting for TypeScript files.
- Run linting for SCSS files.
- Run TypeScript compilation.
- Run Vite bundling.

```cli
npm run lint
```

This script runs ESLint to check TypeScript and TypeScript-related files in the project for style errors and code issues. It will also report any unused ESLint-disable directives.

```cli
npm run lint:fix
```

This script runs ESLint with the --fix flag to automatically fix formatting issues and style errors in project files. This can help improve code quality.

```cli
npm run lint:css
```

This script runs Stylelint to check CSS files in the project for style errors and code issues.

```cli
npm run lint:css:fix
```

This script runs Stylelint with the --fix flag to automatically fix formatting issues and style errors in project files. This can help improve code quality.

```cli
npm run preview
```

This script starts Vite in preview mode, allowing you to preview the production build locally before deployment.

```cli
npm run format
```

This script runs Prettier to format the code in TypeScript, JavaScript, SCSS, JSON, and CSS files in the project according to the configuration defined in the .prettierrc.cjs file.

## Filestructure

This project follows a specific file structure. This section provides an overview of the file structure and describes what should be in the various folders and files.

- [Project filestructure](./docs/filestructure-project.md)
- [Component filestructure](./docs/filestructure-component.md)

## Copy project to VM

1. Build the project with `npm run build`.
2. Run `npm run` preview to preview the application before deployment.
3. Copy files from the dist folder to the VM with `scp -r dist <username>@it2810-16.idi.ntnu.no:/tmp/`. Replace <username> with your username.
4. SSH into the VM with `ssh <username>@it2810-16.idi.ntnu.no`. Replace <username> with your username.
5. Move files from `/tmp/dist` to `/var/www/html` with `sudo mv /tmp/dist/\* /var/www/html/project1`.
