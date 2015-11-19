var path = require('path');
var config = {
entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'user_less/main.js')],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'less.js'
  },
  module: {
    loaders: [{
      test: /\.js[x]?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
      loader: 'jsx-loader' // 加载模块 "babel" 是 "babel-loader" 的缩写
    },
    {
      test: /\.less$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
      loader: 'style!css!less' // 加载模块 "babel" 是 "babel-loader" 的缩写
    }
    ]
  },
  resolve: {
    // Allow require('./blah') to require blah.jsx
    extensions: ['', '.js', '.jsx']
  },
};

module.exports = config;