
module.exports = {
    publicPath: '',
    outputDir: '../../../var/www/html',
    assetsDir: 'static',
    productionSourceMap: false,
    lintOnSave: false,
    // 前端反向代理
    devServer: {
        proxy: 'http://localhost:3000'
    }
}