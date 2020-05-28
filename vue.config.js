const port = process.env.port || process.env.npm_config_port || 9528 // dev port
// const CompressionPlugin = require('compression-webpack-plugin');//引入gzip压缩插件
module.exports = {
    publicPath: process.env.PUBLIC_PATH,//项目的资源地址

    productionSourceMap: false, //把这个改为false。不然在最终打包的文件中会出现一些map文件，map文件的作用在于：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。

    outputDir: process.env.ENV === 'test' ? 'dist' : 'online', //用于区分打包后的文件夹是测试环境还是正式环境
    devServer: {
        proxy: {
            '/api': {
                target: port,//代理地址
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '' //通过pathRewrite重写地址，将前缀/api转为/
                }
            }
        }

    },
    // performance: {
    //     hints: false
    // },
    // runtimeCompiler: true, //关键点在这  
    // // css的处理
    css: {
        // 当为true时，css文件名可省略 module 默认为 false
        modules: false,
        // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中,当作为一个库构建时，你也可以将其设置为 false 免得用户自己导入 CSS
        // 默认生产环境下是 true，开发环境下是 false
        extract: false,
        // 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能
        sourceMap: false,
        //向 CSS 相关的 loader 传递选项(支持 css-loader postcss-loader sass-loader less-loader stylus-loader)
        loaderOptions: {
            css: {},
            less: {},
            sass: {},
        },
       
    },
   

    chainWebpack: config => {
        config.plugins.delete('preload') // TODO: need test
        config.optimization.minimize(true);
        config.plugins.delete('prefetch') //移除预加载的资源
       
    },
    configureWebpack: (config) => {
        //npm install terser-webpack-plugin -D， 去掉console
        config.optimization.minimizer[0].options.terserOptions.compress.drop_console = false
        return {
            // plugins: [
            //     new CompressionPlugin({
            //         test: /\.js$|\.html$|\.css/,
            //         threshold: 10240,
            //         deleteOriginalAssets: false
            //     })
            // ],
            performance: {
                hints:false
            }
    
        }
    },

}
