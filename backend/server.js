const express = require('express');
const dotenv = require('dotenv');
const products = require('./data/products');

dotenv.config()

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



app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT} `));