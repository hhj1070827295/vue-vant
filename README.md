# my-project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 分享内容大纲

    1、vue config的配置项
        本地环境、测试环境、线上环境
            node_env的重要性，加上该属性可以实现打包后的东西带上哈希值，可以有效解决线上代码缓存的问题
            一些变量的写法也可以写在这里，诸如：api接口域名、七牛云的域名等，都可以先写在这里。

            上线前的一些优化，可以移除预加载的一些资源，在vue-config里配置一个值
            chainWebpack: config => {
                config.plugins.delete('prefetch') //移除预加载的资源
            },

            本地开发配置跨域问题，可以在module.export中添加以下配置：
            将target的port改为需要代理的地址，然后在
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

### 有赞的使用
    #### 局部引入
        import { Stepper, Icon, Button} from "vant";
            components: {
                [Button.name]: Button,
                [Stepper.name]: Stepper,
                [Icon.name]: Icon,
            },
    #### 全局引入参考main.js文件即可



### rem和px单位的选择
    1、该项目master分支使用postcss-pxtorem  基准值在postcss.config.js中进行配置，如果需要改变可以去看一下文档
    2、如果要使用rem单位进行编写，切换到rem分支
