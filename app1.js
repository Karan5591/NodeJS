const http=require('http');
const bodyParser=require('body-parser')
const express=require ('express');
const app= express();
const path=require('path');

const adminRoute=require('./routes/admin');
const shopRoutes=require('./routes/shop')
const contactRoutes=require('./routes/contactus')
const RaRoutes=require('./routes/requestAdded')
app.use(bodyParser.urlencoded({extended: false})); 
app.use(express.static(path.join(__dirname, 'public')));


app.use('/admin', adminRoute);
app.use(shopRoutes);
app.use(contactRoutes);
app.use(RaRoutes);
app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'Views', '404.html'));
});

app.listen(3000);



// const bodyParser=require('body-parser')
// const express= require('express');
// const chatapp= express();

// const user1=require('./ChatApp/user');
// const main=require('./ChatApp/main')

// chatapp.use(bodyParser.urlencoded({extended: false}));
// chatapp.use(user1);
// chatapp.use(main);
// chatapp.use((req, res, next)=>{
//     res.status(404).send('<h1>Page not found</h>')
// });

// chatapp.listen(3000);