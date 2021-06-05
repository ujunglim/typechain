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