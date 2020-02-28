const webpack = require('webpack');
const path    = require('path');

module.exports = (_, argv) => {
    const rev = argv.rev || 'unknown';
    return {
        mode: 'production',
        entry : path.resolve(__dirname, 'jsi', 'interpreter.js'),
        output: {
            filename: 'jsi.bundle.js',
            globalObject: 'this',
            library: 'Interpreter',
            libraryTarget: 'umd',
            path: path.resolve(__dirname, 'dist'),
        },
        plugins: [
            // Add link to acorn
            new webpack.ProvidePlugin({
                acorn: path.resolve(__dirname, 'jsi', 'acorn.js')
            }),
            // Add acorn license text
            new webpack.BannerPlugin('// Acorn: Copyright 2012 Marijn Haverbeke, MIT License'),
            // Add JS-Interpreter license text
            new webpack.BannerPlugin(`// JS-Interpreter rev ${rev}: Copyright 2013 Google LLC / Neil Fraser, Apache-2.0 License`),
        ]
    };
};
