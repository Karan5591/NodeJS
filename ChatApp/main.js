const express=require('express');
const router=express.Router();
const store=require('store2');
const fs=require('fs');

router.get('/main',(req, res, next)=>{

    // if(message!=0)
    // {
        
    // }

    res.send('<html><form action="/main" method="POST"><input type="text" name="Uname"><br><br><button type="submit">send</button></form></html>')
});

router.post("/main", (req, res, next)=>{
    fs.appendFile('message.text', req.body, (err)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            fs.readFileSync("message.txt", "utf8")
        }

    });
    res.redirect('/main');
});

module.exports=router;

