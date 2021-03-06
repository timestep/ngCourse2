# Working With `tsc`

So far `tsc` has been used to compile a single file.  Typically developers have
a _lot_ more than one file to compile.  `tsc` can handle multiple files as
arguments.

Imagine two ultra simple files/modules:

a.ts
```js
export const A = (a) => console.log(a);
```

b.ts
```js
export const B = (b) => console.log(b);
```

```bash
tsc ./a.ts ./b.ts 
a.ts(1,1): error TS1148: Cannot compile modules unless the '--module' flag is provided.
```

Hmmm.  What's the deal with this module flag? TypeScript has a help menu, lets
take a look:

```bash
tsc --help | grep module
 -m KIND, --module KIND             Specify module code generation: 'commonjs', 'amd', 'system', 'umd' or 'es6'
 --moduleResolution                 Specifies module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6).
 
```

TypeScript has more help than just what's shown, TypeScript's output has been
filtered by `grep` for brevity.  There are two help entries that reference
"module", and `--module` is the one TypeScript was complaining about.

The description explains that TypeScript supports a number of different module
schemes.  For the moment `commonjs` is desirable.  This will produce modules
that are compatible with node.js's module system.

```bash
tsc -m commonjs ./a.ts ./b.ts
```

`tsc` should produce no output.  In many command line traditions, no output is
actually a mark of success.  Listing the directory contents will confirm that
our TypeScript files did in fact compile.

```bash
ls
a.js	a.ts	b.js	b.ts
```

Excellent there are now two JavaScript modules ready for consumption

Telling the `tsc` command what to compile becomes tedious, and labour intensive
even on small projects.  Fortunately TypeScript has a means of simplifying this.
`tsconfig.json` files let developers write down all the compiler settings they
want.  When `tsc` is run, it looks for `tsconfig.json` files, and uses their
rules to compile JavaScript.

For Angular 2 projects there are a number of specific settings that need to be
configured in a project's `tsconfig.json`

```javascript
 {
   "compilerOptions": {
     "module": "commonjs",
     "target": "es5",
     "emitDecoratorMetadata": true,
     "experimentalDecorators": true,
     "noImplicitAny": false,
     "removeComments": false,
     "sourceMap": true
   },
   "exclude": [
     "node_modules",
     "dist/"
   ]
 }
```

#### Target

The compilation target. Typescript supports targeting different platforms depending on your needs. In our case, we're targeting modern browsers which support `es5`.

#### Module

The target module resolution interface. We're integrating TypeScript through webpack which supports different interfaces. We've decided to use node's module resolution interface, `commonjs`.

#### Decorators

Decorator support in TypeScript [hasn't been finalized yet](http://rbuckton.github.io/ReflectDecorators/typescript.html) but since Angular 2 uses decorators extensively, these need to be set to true.  Decorators have not been introduced yet, and will be covered later in this section.

#### TypeScript with Webpack

We won't be running `tsc` manually, however. Instead, Webpack's 'ts' loader will do the transpilation during the build:

```javascript
  // webpack.config.js
  ...
  loaders: [
    { test: /\.ts$/, loader: 'ts', exclude: /node_modules/ },
    ...
```

This loader calls TypeScript for us, and it will use our `tsconfig.json`