// const os = require('os');
// let outputDir = os.platform().includes('win') ? 'dist' : '../../../var/www/html'
const path = require('path')
function resolve (dir){
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: '',
    outputDir: 'dist',
    assetsDir: 'static',
    productionSourceMap: false,
    lintOnSave: false,
    // 前端反向代理
    devServer: {
        proxy: 'http://localhost:3000'
    },
    chainWebpack: config => {
        config.resolve.alias.set('@', resolve("src"))
    }
}