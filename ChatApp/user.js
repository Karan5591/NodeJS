const express=require('express');
const router=express.Router();
const store=require('store2');


router.get('/login',(req, res, next)=>{
    res.send('<html><form action="/login" method="POST"><input type="text" name="uName"><br><br><button type="submit">Log in</button></form></html>')
});

router.post("/login", (req, res, next)=>{
    let username=req.body.uName;
   console.log(store.setAll({name: username}));
   console.log(store.keys())
    res.redirect('/main');
});

module.exports=router;