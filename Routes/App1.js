const http=require('http');
const bodyParser=require('body-parser')
const express=require ('express');
const app= express();

const adminRoute=require('./Routes/admin');
const shopRoutes=require('./Routes/shop')

app.use(bodyParser.urlencoded({extended: false}));
app.use('/admin', adminRoute);
app.use('/shop',shopRoutes);

app.use((req, res, next)=>{
    res.status(404).send('<h1>Page not found</h>')
});

app.listen(3000);