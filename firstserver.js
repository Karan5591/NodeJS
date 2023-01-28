const http= require('http');
const server=http.createServer((req, res)=>{
    res.write('Karan Singh');
    res.end();
});
server.listen(4000);

