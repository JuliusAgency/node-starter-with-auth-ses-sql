# Node Typescript Starter with the set of Authentication packages with Sql Db

<p>
  <a href="https://github.com/JuliusAgency/node-starter-with-auth-ses-sql/actions/workflows/ci-build.yaml" target="_blank">
    <img alt="CI build" src="https://github.com/JuliusAgency/node-starter-with-auth-ses-sql/actions/workflows/ci-build.yaml/badge.svg?branch=main" />
  </a>
  <a href="https://github.com/JuliusAgency/node-starter-with-auth-ses-sql#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/JuliusAgency/node-starter-with-auth-ses-sql/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/JuliusAgency/node-starter-with-auth-ses-sql/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

Tester for nodejs typescript npm packages.

### The project file system tree:

.  
├── .cspell.json  
├── .editorconfig  
├── .eslintrc.json  
├── .github  
│   ├── ISSUE*TEMPLATE.md  
│   └── PULL_REQUEST_TEMPLATE.md  
├── .gitignore  
├── .husky  
│   ├── *  
│   ├── pre-commit  
│   └── pre-push  
├── .prettierignore  
├── .vscode  
├── LICENSE  
├── README.md  
├── jest.config.js  
├── package-lock.json  
├── package.json  
├── src  
│   ├── index.ts  
│   └── types  
│   └── example.d.ts  
└── tsconfig.json

### The project infrastructure

[Typescript](http://www.typescriptlang.org/),  
[cspell](https://www.npmjs.com/package/cspell) - A CLI tool and library for spell checking code,  
[npm-run-all](https://www.npmjs.com/package/npm-run-all) - A CLI tool to run multiple npm-scripts in parallel or sequential,  
[rimraf](https://www.npmjs.com/package/rimraf) - a deep deletion module for node.  
[ESLint](https://www.npmjs.com/package/eslint) - a static code analysis tool,  
[eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier) - Turns off all rules that are unnecessary or might conflict with Prettier,  
[eslint-plugin-eslint-comments](https://www.npmjs.com/package/eslint-plugin-eslint-comments) - Additional ESLint rules for ESLint directive comments (e.g. //eslint-disable-line),  
[eslint-plugin-functional](https://www.npmjs.com/package/eslint-plugin-functional) - An ESLint plugin to disable mutation and promote functional programming in JavaScript and TypeScript,  
[eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) - A plugin to support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names,  
[prettier](https://www.npmjs.com/package/prettier) - A code formatter,  
[jest](https://www.npmjs.com/package/jest) - A testing framework,  
[ts-jest](https://www.npmjs.com/package/ts-jest) - A Jest transformer with source map support that lets to use Jest to test projects written in TypeScript,  
[husky](https://www.npmjs.com/package/husky) - a tool that allows to use Git hooks.

### Prepare a project

Create a folder:

```bash
mkdir <new-package-name>
cd <new-package-name>
```

Clone the repository, remove git folder, init the new local git repo and rename the branch from master to main:

```bash
git clone https://github.com/JuliusAgency/node-starter-with-auth-ses-sql.git .
rm -r .git
git init
git branch -m master main
```

Install:

```bash
npm install
```

Activate Git hooks:

```bash
npm run prepare
```

    Note: After the command is executed once, the Git hooks will run automatically before each commit and push.

### Test a npm package

Create new branch.
Locally install a new package:

- Copy path from the package that will be tested.
- execute the command:

```bash
npm i <abs path to the tested package.tgz>

```

Put your test code into the index.ts file.  
Put you tests under the test folder.
Test the package.
Uninstall the package.
Delete the branch.

### Usage the commands from the command line during the development:

Linting:

```bash
npm run lint
```

Fix the linting issues:

```bash
npm run fix
```

Testing:

```bash
npm test
```

Clean build output:

```bash
npm run clean
```

Build:

```bash
npm run build
```

Prepare:

```bash
npm run prepare
```

Git client hooks:

```bash
.husky/pre-commit
.husky/pre-push
```
