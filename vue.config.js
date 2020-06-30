module.exports={
    devServer:{
        // host:"http://localhost",
        // port:8080,
        // https:false,
        // open:true,
        // proxy:{
        //     "/api":{
        //         target:"http://localhost:8989",
        //         changeOrigin: true,
        //         pathRewrite:{
        //             '^/api':''
        //         }
        //     }
        // }
        proxy: {
            "/vm": {
                target: "http://175.24.95.117:8989",   // 要请求的后台地址
                ws: true,    // 启用websockets
                changeOrigin: true,    // 是否跨域
                pathRewrite: {
                    "^/vm": "/"          // 这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替
                }
            }
        }
    }
}