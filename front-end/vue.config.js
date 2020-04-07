module.exports = {
  "devServer": {
    "proxy": {
      "/api": {
        "target": "http://47.98.135.225:7001",
        "changeOrigin": true,
        "pathRewrite": {
          "^/api": ""
        }
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}