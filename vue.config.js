const path = require('path')

module.exports = {
  outputDir: path.resolve(__dirname, "../backend-demo/src/main/resources/static"),
  devServer: {
    proxy: {
      '/sample': {
        target: 'http://localhost:8080'
      },
      '/oauth/token': {
        target: 'http://localhost:8080'
      },
    }
  }
}