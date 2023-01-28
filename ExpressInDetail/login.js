const express= require('express');
const route=express.Router();
const parser=require('body-parser');
route.use(parser.json());
route.use(parser.urlencoded({extended:false}));

route.get('/login',(req,res)=>{
    res.send('<html><form action="/main" method="Get"><input type="text" name="uName"></input><br><br><button type="submit">Log in</button></form></html>');
    
});

route.post("/login",(req, res)=>{
    var d= req.body.uName;
    `<script> localStorage.setItem("name", ${d}) </script>`;

   res.redirect("/main");
});




module.exports=route;