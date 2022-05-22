//webpack config file
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
module.exports = () => {
    return [
        {
            entry: './src/main.js',

            mode: 'production',
            resolve: {
                modules: [path.resolve(__dirname, 'src'), 'node_modules'],
            },
            output: {
                path: __dirname + '/dist',
                filename: 'crypto-widget.js',
                clean: true,
            },
            module: {
                rules: [
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        use: ['babel-loader'],
                    },
                    {
                        test: /\.css$/,
                        use: ['style-loader', 'css-loader'],
                    },
                    {
                        test: /\.(png|svg|jpg|gif)$/,
                        use: ['file-loader'],
                    },
                ],
            },
            devServer: {
                static: './dist',
                port: 3000,
            },

            plugins: [
                new CopyWebpackPlugin({
                    patterns: [{ from: 'demo/' }],
                }),
            ],
        },
    ];
};
