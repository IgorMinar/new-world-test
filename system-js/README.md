### systemjs demo

- `cd` into this directory
- `npm install` to install dependencies
- `typings install` to install types
- `npm run build` to compile typescript
- `npm run serve` to serve application

This demo also includes a bundle step:
- `npm run bundle` to build a single file build
or
- `npm run bundle:prod` to build a minified single file build
- see index.html and replace System.import with bundle file (see comments)
- `npm run serve`
