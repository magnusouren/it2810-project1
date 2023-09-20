# Project file structure

To maintain an organized structure in the project, files are organized as follows:

```
├── coverage                                # test coverage reports (ignored by git)
├── dist                                    # build files (ignored by git)
├── docs                                    # documentation files
├── node_modules                            # node modules (ignored by git)
├── src
│   ├── assets                              # static files
│   ├── components                          # components
│   ├── pages                               # project pages
│   ├── utils                               # shared utility files
│   ├── main.tsx                            # main file for the project
│   ├── routes.tsx                          # project routing
├── configuration files                     # project configuration files

```

- `coverage`: Contains test coverage reports and is typically ignored by version control (git).
- `dist`: Contains build files and is ignored by version control (git).
- `docs`: Stores documentation files.
- `node_modules`: Contains Node.js modules and is ignored by version control (git).
- `src`: The source code directory.
  - `assets`: Contains static files.
  - `components`: Houses project components.
  - `pages`: Contains project pages.
  - `utils`: Contains shared utility files.
  - `main.tsx`: The main file for the project.
  - `routes.tsx`: Defines project routing.
  - `configuration` files: Contains project configuration files.

This structure helps keep the project organized and makes it easier to locate and manage different types of files and resources.
