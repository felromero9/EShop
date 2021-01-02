import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import products from './data/products.js';

dotenv.config()

connectDB();

const app = express();

app.get('/', (Request, Response) => {
  Response.send('Api is running ...')
});

app.get('/api/products', (Request, Response) => {
  Response.json(products);
})

app.get('/api/products/:id', (Request, Response) => {
  const product = products.find(p => p.id === Request.params.id)
  Response.json(product);
})






const PORT = process.env.PORT || 5000;



app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`.yellow.bold));