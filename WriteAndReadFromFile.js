const http=require('http')
const fs=require('fs');
const { buffer } = require('stream/consumers');
let message=0;
const server=http.createServer((req, res)=>{
    
    const url=req.url;
    const method=req.method;
    if(url==='/')
    {
        if(message!='0')
        {
            res.write(`<html><body><form action="/message" method="POST">${message}</input></form></body></html>`)
    
        }
        res.write('<html>');
    res.write('<head><title>Write message</title></body>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="Message"><button type="submit">Send</button></input></form></body>')
    res.write('</html>');
    message=0;
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
            message=parseBody.split('=')[1];
            
        });
        
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end();
    }
})
server.listen(4000);