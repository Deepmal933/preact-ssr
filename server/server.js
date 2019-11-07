import express from 'express'
import path from 'path'
import fs from 'fs'

require("@babel/register")({
    "presets": ["@babel/preset-env"],
    "plugins": [
        ["@babel/plugin-transform-react-jsx", {
          "pragma": "h"
        }]
      ]
})

const app = express();
const ssr = require('../preact/ssr')



const BUNDLE_FILE_URL = '/bundle.js'
const BUNDLE_FILE_PATH = path.join(__dirname,`../dist${BUNDLE_FILE_URL}`)

app.get(BUNDLE_FILE_URL,(req,res)=>{
    fs.readFile(BUNDLE_FILE_PATH,'utf-8',(err,data)=>{
        if(err) return res.sendStatus(500);
        res.send(data);
    })
})

app.get('/',(req,res)=>{

    let data = ssr();

    res.send(`
    <html>
    <head>
    <title>Preact App</title>
    </head>
    <body>
    ${data.html}
    <script>window.__backend_data__ = ${JSON.stringify(data)};</script>
    <script src="${BUNDLE_FILE_URL}"></script>
    </body>
    </html>
    `);
})

app.get('/data',(req,res)=>{
    res.send({name:"deep",email:"deepmal933@gmail.com"});
})
const PORT = process.env.PORT || 3004
app.listen(PORT,()=>{
console.log("Server is listning on port "+PORT);
});