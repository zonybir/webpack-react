/*var path = require('path');


module.exports = {
    entry: path.resolve(__dirname, 'app/main.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
};*/
/*var path = require('path');


module.exports = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js')],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
};*/


var path = require('path');
console.log(__dirname);
var config = {
  entry: path.resolve(__dirname, 'app/main.jsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
      loader: 'jsx-loader' // 加载模块 "babel" 是 "babel-loader" 的缩写
    }]
  },
  resolve: {
    // Allow require('./blah') to require blah.jsx
    extensions: ['', '.js', '.jsx']
  },
};

module.exports = config;