const IconfontPlugin = require('iconfont-plugin-webpack');

const isProd = process.env.NODE_ENV === 'production';

module.exports = ({
    assetPrefix: isProd ? '//onee.com/demo/' : '/',
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
    }
})