const express=require('express');
const app=express();
const login=require('./login.js');
const main=require('./main.js')

app.use(login);
app.use(main);
app.listen(3000);