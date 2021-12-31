//entry -> output
const path = require('path');

console.log(path.join(__dirname,'public'));

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: { //by running devServer, it doesn't create physical bundle.js file, it keeps it in memory which speeds up the process. If we want bundle.js, we can run "webpack" or "yarn run build"
        static: {
            directory: path.join(__dirname, 'public'),
          }
    },
    mode: 'development'
};


