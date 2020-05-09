typescript-amd-template
====

## Description
Template for compile each typescript file 
to separate javascript file and load each file separately 
using `systemjs` with `amd` includes incremental builds
no webpack only minimal required dependencies each html page loads at least 3 scripts
- `system.min.js`
- `amd.min.js`
- `index.js`  

After that it tries to load any scripts defined by `InitModule('/script/path')`

Each import inside typescript is expected to be separate file loaded by `amd` by `systemjs`

### Scripts  
`npm run copy-system` - copy systemjs to dist directory   
`npm run copy` - copy all js and html files to dist directory   
while preserving directory structure   
`npm run clean` - removes dist directory warning! `rm -rf dist`   
`npm run dist` - compiles typescript files and runs `copy-system` and `copy` scripts   
`npm run dist-clean` - runs `clean` and `dist` script   
`npm run tsc-incremental` - compile typescript files with `--incremental` parameter  
`npm run watch` - runs `npm-watch` for `copy` [html,js] and `tsc-incremental` [ts] files


### Run
`npm run dist` got to `dist` directory run http server from there 
ex. `python -m http.server 8080` when you click on `Cat`  

Development `npm run watch` and when you modify any file it will be recompiled or copied based on extension


### Dependencies  
- copyfiles
- npm-watch
- systemjs
- typescript
   
