# cli-howto.ts.adligo.org
This is the simplest possible, tutorial on how to write a node.js cli (Command Line Interface) typescript program.  It targets the Linux or MacOs CLI, or Gitbash on Windows.

## Summary of Creating a CLI tool 
1) Edit package.json to have a bin section like the following in this package.json file;
```
  "bin": {
    "cli-howto": "./src/cli-howto.ts"
  }
```
2) Add the link to node js at the top of the cli-howto.ts file
```
#! /usr/bin/env node
```
4)  Install typescript, etc;
```
npm i typescript --save-dev
npm i @types/node --save-dev
npm i ts-node --save-dev
```

5) Configure Typescript using the tsconfg.json file
```
{
  "compilerOptions": {
    "emitDecoratorMetadata": true,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "lib": ["es6"],
    "target": "es6",
    "module": "commonjs",
    "moduleResolution": "node",
    "outDir": "dist",
    "resolveJsonModule": true,
    "sourceMap": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules", "**/*.spec.ts"],
  "ts-node": {
    "esm": true,
    "experimentalSpecifierResolution": "node",
    }
 }
```
6) Run it locally from the current directory;
```
npm run-script run
```

7) Install on the local machine with;
```
npm install -g .
```

8) View the current installed packages on the local machine;
```
npm list -g | grep adligo
```

9) Uninstall the package;
```
npm uninstall -g @ts.adligo.org/cli-howto
```

## Summary of Publishing your CLI tool
1) Create an account at https://www.npmjs.com/
2) Create a organzation (i.e. ts.adligo.org)
3) Login on your local gitbash with a command like;
```
npm login --scope=@ts.adligo.org
```
4) Run the publish command
```
npm publish --access public
```
5) Install on other machines
```
npm install -g @ts.adligo.org/cli-howto
```
6) Test to see if it runs
```
cli-howto
```

## Citations
- Official Doc)
https://docs.npmjs.com/configuring-your-npm-client-with-your-organization-settings
- Helpful Article)
https://medium.com/@manavshrivastava/lets-build-a-cli-command-line-interface-with-node-js-d3b5faacc5ea
- Helpful Article)
https://itnext.io/how-to-create-your-own-typescript-cli-with-node-js-1faf7095ef89
