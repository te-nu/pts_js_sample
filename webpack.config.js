var path = require('path');

module.exports = {
    mode: 'development',
    entry: './index.ts',
    output: {
        filename: 'index.js',
        path: path.join(__dirname, '.')
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                exclude: /node_modules/,
                use: [
                    {
                        // 利用するローダー
                        loader: 'ts-loader',
                    }
                ]
            },
        ]
    }
};
