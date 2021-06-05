# Typechain

```
npm install -g typescript
```

compile index.ts then make index.js, index.js.map

```
tsc
```

```json
"scripts": {
    "start": "node index.js",
    "prestart": "tsc"
  }
```

npm start executes prestart first = compile ts to js, then execute js

```
npm start
```

when something has changed in src, dist also has changed.

```
npm add tsc-watch --dev
npm i -D @types/node typescript ts-node
```

Interface is a way of declaring and using a certain object pattern as a data type
