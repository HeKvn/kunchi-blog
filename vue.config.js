module.exports = {
  publicPath: './',
  outputDir: 'blog',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://hekvn.top/service/blog',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
