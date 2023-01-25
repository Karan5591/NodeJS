
const fs=require('fs');
const { builtinModules } = require('module');
const requestHandler=(req, res)=>{

const url=req.url;
const method=req.method;
if(url==='/')
    {
        
        res.write('<html>');
    res.write('<head><title>Write message</title></body>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="Message"><button type="submit">Send</button></input></form></body>')
    res.write('</html>');
    
    return res.end();
    }
    if(url==='/message' && method ==='POST')
    {
        const body=[];
        req.on('data', (chunk)=>{

            body.push(chunk);
        })
        req.on('end', ()=>{
            const parseBody= Buffer.concat(body).toString();
            const message=parseBody.split('=')[1];
            
        });
        
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end();
    }
     res.setHeader('content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></body>');
    res.write('<body><h1>Welcome to my Node Js project</h1></body>')
    res.write('</html>');
    res.end();
}
//module.exports=requestHandler;
// module.exports={
//     handler: requestHandler,
//     someText:'Some had code text'
// };

exports.handler=requestHandler;
exports.someText='Some hard coded Text';