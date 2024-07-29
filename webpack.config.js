const path = require('path');
const htmlwebpackplugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    mode:'development',
    devtool: 'inline-source-map',
    devServer: {
      static: './dist',
      watchFiles: ['src/index.html'],
    },
   
    plugins: [
      new htmlwebpackplugin({
        template:'./src/index.html',
        
      })
    ],

    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
    
    
  };
  
  
  