const IconfontPlugin = require('iconfont-plugin-webpack');
require('dotenv').config();

const isProd = process.env.NODE_ENV === 'production';

module.exports = ({
    assetPrefix: isProd ? '/' : '/',
    webpack(config, options) {
        config.module.rules.push(
              
        );
        config.plugins.push(
            new IconfontPlugin({
                src: './src/assets/svg',
                family: 'onee',
                dest: {
                    font: './src/assets/fonts/[family].[type]',
                    css: './src/assets/styles/_icons.scss'
                },
                watch: {
                    pattern: './src/assets/iconfont/**/*.svg',
                    cwd: undefined
                }
              })
        );
        return config;
    }, 
    env: {
        BASE_URL: process.env.BASE_URL,
        REDIRECT_URL: process.env.REDIRECT_URL,
        CLIENT_ID: process.env.CLIENT_ID,
        DOMAIN: process.env.DOMAIN
    }
})