import express from 'express';

import dotenv from 'dotenv';
import ConnectDB from './config/db.js';
import ProcutRoute from './routes/ProductRoute.js';
import { notFound,errorHandler } from './middleware/errorHandler.js';

dotenv.config();

const port = process.env.PORT || 5001;

const app = express();

ConnectDB();

app.get('/',(req,res) =>{
    res.send('API is running...');
});


app.use('/api/products',ProcutRoute);

app.use(notFound);
app.use(errorHandler);




app.listen(port,() =>{
    `Server is running on ${port}`
})
