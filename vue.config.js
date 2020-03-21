module.exports = {
    devServer:{
        host:'localhost',
        port:9090,
        proxy:{
            '/api':{
                target:'https://www.easy-mock.com',
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                }
            }
        }
    }
}