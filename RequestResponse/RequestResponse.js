const http=require('http');
const url=require('url');
const fs=require('fs');
const server=http.createServer((req, res)=>{
    const urlObject=url.parse(req.url,true);
    const fname="."+urlObject.pathname;
    fs.readFile(fname, function(err,data){
        if(err)
        {
            res.writeHead(404,{'Content-Type':'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
    });




    // res.setHeader('content-Type', 'text/html');
    // res.write('<html>');
    // res.write('<head><title>My First Page</title></body>');
    // res.write('<body><h1>Welcome to my Node Js project</h1></body>')
    // res.write('</html>');
    // res.end();
});
server.listen(4000);