const miniCss = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bandle.js',
        assetModuleFilename: 'assets/images/[name]-[hash][ext]',
    },
    devServer: {
        port: 3000,
        static: './public',
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(s*)ass$/,
                use: [miniCss.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new miniCss({
            filename: 'styles.css',
        }),
    ],
};
