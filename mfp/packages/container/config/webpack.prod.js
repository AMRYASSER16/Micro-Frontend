const { merge } = require('webpack-merge');;
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@${process.env.PRODUCTION_DOMAIN}/marketing/remoteEntry.js`,
                // auth: 'auth@http://localhost:8082/remoteEntry.js',
                // dashboard: 'dashboard@http://localhost:8083/remoteEntry.js',
            },
            shared: packageJson.dependencies
        })
    ]

};

module.exports = merge(commonConfig, prodConfig);