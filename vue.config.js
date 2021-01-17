const os = require('os');
let outputDir = os.platform().includes('win') ? 'dist' : '../../../var/www/html'


module.exports = {
    publicPath: '',
    outputDir,
    assetsDir: 'static',
    productionSourceMap: false,
    lintOnSave: false,
    // 前端反向代理
    devServer: {
        proxy: 'http://localhost:3000'
    }
}