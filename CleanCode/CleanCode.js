const http=require('http')
const routes=require('./CleanCodeRoute');
//const server=http.createServer(routes);

const server=http.createServer(routes.handler);
server.listen(4000);