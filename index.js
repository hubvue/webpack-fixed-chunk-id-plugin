const crypto = require('crypto');
const pluginName = "WebpackFixedChunkIdPlugin";

class WebpackFixedChunkIdPlugin {
      constructor({hashLength = 8} = {}) {
            //todo 
            this.hashStart = 0;
            this.hashLength = hashLength;
      }
      apply(compiler) {
            compiler.hooks.compilation.tap(pluginName, (compilation) => {
                  compilation.hooks.beforeChunkIds.tap(pluginName, (chunks) => {
                        chunks.forEach((chunk,idx) => {
                              let modulesPath,
                                    modulesVal,
                                    chunkContent,
                                    chunkId;
                              if(![...chunk._modules].length) {
                                    modulesPath = chunk.name;
                              } else {
                                    const modules = chunk._modules;
                                    for(let module of modules) {
                                          modulesPath += module._source._name;
                                          modulesVal += module._source._value;
                                    }
                              }
                              chunkContent = modulesPath + modulesVal;
                              const chunkIdHash = crypto.createHash('md5').update(chunkContent).digest('hex');
                              chunkId = chunkIdHash.substr(this.hashStart, this.hashLength);
                              chunk.id = chunkId;
                        })
                  })
            })
      }
      
}

module.exports = WebpackFixedChunkIdPlugin;