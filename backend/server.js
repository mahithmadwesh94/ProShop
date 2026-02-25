import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';
import ConnectDB from './config/db.js';

dotenv.config();

const port = process.env.PORT || 5001;

const app = express();

ConnectDB();

app.get('/',(req,res) =>{
    res.send('API is running...');
});


app.get('/api/products',(req,res) =>{
    res.json(products)
})


app.get('/api/product/:id',(req,res) =>{
    const product = products.find((p) => p._id === req.params.id);
    res.json(product)
})

app.listen(port,() =>{
    `Server is running on ${port}`
})
