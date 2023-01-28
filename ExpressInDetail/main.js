const express= require('express');
const main=express.Router();
const fs=require('fs');
const parser=require('body-parser');
const { Script } = require('vm');
main.use(parser.json());
main.use(parser.urlencoded({extended:false}));
var userName=0;

main.get('/main', (req,res)=>
{

    const dataFile=fs.readFileSync('./messge.text', {encoding:'utf8', flag:'r'});
    userName=req.query.uName;
    
    if(userName===undefined)
    {
        res.send(dataFile+`<html><body>    
        <form action="/main" method ="Post"><input type="text" name="data"></input><br><br><button type="submit">Send Message</button></form></body></html>`);

    }
    else{
        
res.send(dataFile+`<html><body><script> localStorage.setItem("name", '${userName}') </script><form action="/main" method ="Post"><input type="text" name="data"></input><br><br><button type="submit">Send Message</button></form></body></html>`);
    
}
});

main.post("/main", (req,res)=>
{

var data1=`<html><body><script>localStorage.getItem('name')</script></body></html>:${req.body.data}....  `;
   fs.appendFileSync("messge.text",data1 );
   const dataFile=fs.readFileSync('./messge.text', {encoding:'utf8', flag:'r'});
    res.redirect('/main');
});


module.exports=main;