
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/demo/'
    : '/',
    outputDir: 'dist',
    assetsDir: 'static',
    productionSourceMap: false,
    lintOnSave: false,
    // 前端反向代理
    devServer: {
        proxy: 'http://localhost:3000'
    }
}