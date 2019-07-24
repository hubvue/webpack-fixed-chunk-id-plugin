# webpack-fixed-chunk-id-plugin
A fixed chunkId optimized online caching webpack plugin

## webpack version
4.0

## Install

```shell
$ npm i webpack-fixed-chunk-id-plugin --save-dev
```

## Usage

```js
const WebpackFixedChunkIdPlugin = require("webpack-fixed-chunk-id-plugin");

module.exports = {
  plugins: [
    new WebpackFixedChunkIdPlugin({
      //This is optional. Used to specify the length of hash generation, which is 8 by default
      hashLength: 5
    })
  ]
}
```

## Author
[Kim](https://github.com/hubvue)
