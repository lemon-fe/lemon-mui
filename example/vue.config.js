const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
  baseUrl: '/lemon-mui/example/',
  // webpack配置
  configureWebpack: config => {
    config.resolve.alias['@'] = resolve('src')
    config.resolve.alias['@com'] = path.join(__dirname, '../src')
    config.resolve.alias['vue$'] = 'vue/dist/vue.esm.js'
    config.resolve.extensions = ['*', '.js', '.vue', '.json']
    /*
    config.externals = {
      vue: {
        root: 'Vue',
        commonjs: 'vue',
        commonjs2: 'vue',
        amd: 'vue'
      }
    }
    */
  },
  chainWebpack: (config) => {
    // config.module
    //   .rule('js')
    //   .use('babel')
    //     .loader('babel-loader')
    //     .tap(options => {
    //       // 修改它的选项...
    //       return options
    //     })
  },
  // css相关配置
  css: {
    // 启用 CSS modules
    modules: false,
    // 是否使用css分离插件
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      postcss: {
        plugins: [require('postcss-px2rem')({ rootValue: 75 })]
      }
    },
  }
}