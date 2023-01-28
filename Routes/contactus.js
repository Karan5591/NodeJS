const express= require('express');
const path=require('path');
const { builtinModules } = require('module');
const routeDir=require('../Helper/path');
const router=express.Router();
router.get('/ContactUs',(req, res, next)=>{
    res.sendFile(path.join(routeDir, 'Views', 'ContactUs.html') );
});
module.exports=router;