const path = require('path')

module.exports = {
    entry: {
        bundle: './src/core/App.ts'
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name].js'
    },
    //　インポート時ファイル拡張子を省略します
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: {
        static: path.join(__dirname, 'public'),
        open: true
    },
    module: {
        rules: [
            {
                loader: 'ts-loader',
                test: /\.ts$/
            }
        ]
    },
}