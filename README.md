# Publish a npm package

## Initialization and manual publish

### Initialize and first publish

- initialize a new npm project
```shell
npm init -y
```

- change the name in package.json to `@organization/project`
- initialize git repository and commit
- publish your package

```shell
npm login
npm publish --access public
```

- check your profile on https://www.npmjs.com/

### Write a typecript package

- create `tsconfig.json`

```shell
tsc --init
```

- install dependencies
```shell
npm install typescript del-cli --save-dev
```

- create `src/index.ts` with some ts code
- update `tsconfig.json`
```json
{
    ...
    "declaration": true,                   /* Generates corresponding '.d.ts' file. */
    "outDir": "./lib",                        /* Redirect output structure to the directory. */
    ...
}
```

- update `package.json` scripts to be sure to clean the `lib` directory
```json
{
    ...
    "scripts": {
        "clean": "del .lib/*",
        "build": "npm run clean && tsc"
    },
    ...
}
```

- make sure to gitignore `lib/`

- fill `main`, `types` and `files` in `package.json`
```json
{
  ...  
  "main": "./lib/index.js",
  "types": "./lib/index.d.ts",
  "files": [
    "./lib/**/*"
  ],
  ...
}
``` 

### Update and publish new package version (manually)

- commit your changes
- update your version number manually or run command:
```shell
npm version patch
```
- build and publish
```shell
npm run build
npm publish
```

## Publish automatically with a Github action

### Connect to a remote github repo (if not done yet)

```shell
git remote add origin git@github.com:**github-account**/**project-name**.git
git branch -M main
git push -u origin main
```

### npm publish token

- create and copy a `npm` publish access token
- create a repository secret NPM_TOKEN on your Github repository

### Create a publish action

- copy `.github/workflows/publish.yml` in you repository
- before pushing to `main` think of updating the package version
