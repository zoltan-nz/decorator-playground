# Playing with decorators and dependency injections

## Add Babel and TypeScript support

1. Install packages:

```bash
$ yarn add -D @babel/cli @babel/core @babel/node @babel/preset-env @babel/preset-typescript babel-watch babel-plugin-transform-typescript-metadata
```

2. Add `babel.config.json` to your project root:

```json
{
  "presets": [["@babel/preset-env", { "targets": { "node": "current" } }], ["@babel/preset-typescript"]],
  "plugins": ["babel-plugin-transform-typescript-metadata"],
  "sourceMaps": "inline"
}
```
