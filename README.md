# slink.ts.adligo.org
This is the simplest possible, tutorial on how to write a node.js cli (Command Line Interface) program.

## Summary of Creating a CLI tool 
1) Edit package.json to have a bin section like the following in this package.json file;
```
  "bin": {
    "cli-howto": "./src/cli-howto.ts"
  }
```
2) Install with;
```
npm install -g .
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

## Citations
- Official Doc)
https://docs.npmjs.com/configuring-your-npm-client-with-your-organization-settings
- Helpful Article)
https://medium.com/@manavshrivastava/lets-build-a-cli-command-line-interface-with-node-js-d3b5faacc5ea
