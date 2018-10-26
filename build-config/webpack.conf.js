
var path = require('path');
var webpack = require('webpack');
// 参考但远优于 https://github.com/vuejs-templates/webpack/blob/master/template/build/utils.js
var extract = require('extract-text-webpack-plugin').extract;
// postcss-loader 配置见 .postcssrc
var basicLoaders = ['css-loader', 'postcss-loader', 'px2rem-loader-le?remUnit=75&remPrecision=8', 'less-loader'];
var LOADERS = {
  css: basicLoaders,
  less: basicLoaders.concat('less-loader'),
  sass: basicLoaders.concat('sass-loader?indentedSyntax=true'),
  scss: basicLoaders.concat('sass-loader')
};
var ROOT = path.resolve(__dirname, './');

var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

function ruleGen(ext, isForVueLoader) {
  var styleLoader = (isForVueLoader ? 'vue-' : '') + 'style-loader',
    useLoaders = LOADERS[ext];

  // 开发环境下直接内嵌 CSS 以支持热替换
  //if (ENV.__DEV__) return [styleLoader].concat(useLoaders);
  // 生产环境下分离出 CSS 文件
  return extract({ use: useLoaders, fallback: styleLoader });
}

function styleRulesGen(isForVueLoader) {
  var rules = isForVueLoader ? {} : [];
  Object.keys(LOADERS).forEach(function (ext) {
    isForVueLoader ?
      rules[ext] = ruleGen(ext, true) :
      rules.push({ test: new RegExp('\\.' + ext + '$'), use: ruleGen(ext) });
  });
  return rules;
}

module.exports = {
  entry: {
    app: path.join(__dirname, "./index.js")
  },
  output: {
    path: path.join(__dirname, "../dist/"),
    // publicPath: 'http://file.lexislive.com.cn/webapp/lexis-activity/'+project+'/',
    publicPath: '/',
    filename: 'js/[name].[chunkhash:6].js',
    chunkFilename: 'js/[id].[chunkhash:6].js'
  },
  // devtool - source map 配置详见 https://webpack.js.org/configuration/devtool
  resolve: {
    alias: {
      '@': './',
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.js', '.vue', '.json', '.css']
  },
  devtool: false,
  module: {
    rules: [
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: styleRulesGen(true)
      }
    },{
      test: /\.js$/,
      loader: 'babel-loader?cacheDirectory',
      query: {
        presets: ['es2015-loose', 'stage-0'],
        // {helpers: false, polyfill: false, regenerator: true, } 解决引用node_modules中自定义组件编译问题
        plugins: [['transform-runtime',{ helpers: false, polyfill: false, regenerator: true }], 'transform-decorators-legacy']
      },
      exclude: /node_modules/
    }, {
      test: /\.(png|jpe?g|gif|svg)$/,
      loader: 'url-loader',
      options: {
        limit: 1024,
        name: 'img/[name]-[hash:6].[ext]'
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)$/,
      loader: 'url-loader',
      options: {
        limit: 1024,
        name: 'fonts/[name]-[hash:6].[ext]'
      }
    }].concat(styleRulesGen())
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false,
      compress: {
        warnings: false,
        collapse_vars: true,
        reduce_vars: true
      }
    }),
   new ExtractTextPlugin({
     filename: '[name].[contenthash:6].css',
     allChunks : true // 若要按需加载 CSS 则请注释掉该行
   }),
    // new OptimizeCssAssetsPlugin(), // 优化 CSS（去重/压缩）
  ]
};
