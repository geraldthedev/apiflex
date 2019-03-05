const path = require('path');

module.exports = {
  entry: [
      './src/index.js',
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  node: {
    dns: 'empty',
   fs: "empty",
   module:"empty",
   net:"empty",
   tls: "empty"
},
    devServer: {
    contentBase: './dist',
    inline:true,
    port: 3000
   },

};