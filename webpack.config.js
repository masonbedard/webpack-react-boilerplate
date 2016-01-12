module.exports = {
    context: __dirname + '/src',
    entry: [
        './index.jsx',
  	    './index.html'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    module: {
  	    loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader'] },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.html$/, loader:'file?name=[name].[ext]' }
        ]
    }
}