const IconfontPlugin = require('iconfont-plugin-webpack');
require('dotenv').config();

const isProd = process.env.NODE_ENV === 'production';

module.exports = ({
    distDir: 'dist',
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
        API_BASE_URL: process.env.API_BASE_URL,
        AUTH0_DOMAIN: process.env.DOMAIN,
        AUTH0_CLIENT_ID: process.env.CLIENT_ID,
        REDIRECT_URI: process.env.REDIRECT_URL,
        POST_LOGOUT_REDIRECT_URI: process.env.REDIRECT_URL,
        MAP_KEY: process.env.MAP_KEY
    }
})
