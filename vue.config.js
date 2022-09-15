module.exports = {
  publicPath: './',
  outputDir: 'blog',
  devServer: {
    https: true,
    proxy: {
      '/api': {
        target: 'https://hekvn.top/service/blog',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
