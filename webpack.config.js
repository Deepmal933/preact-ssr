
module.exports={
    entry:'./preact/client.js',
    output:{
        path: __dirname+'/dist',
        publicPath:'/',
        filename:'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
      },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:{
                    loader:"babel-loader"
                }
            }
        ]
    }
}