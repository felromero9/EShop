const express = require('express');
const products = require('./data/products');

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










app.listen(5000, console.log('Server running on PORT 5000'));