import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Product from '../models/productModel.js';


//@description    Fetch all products
//@route          GET /api/products
//@access    Public
router.get('/', asyncHandler(async (Request, Response) => { 
  const products = await Product.find({})

  Response.json(products);
}))


//@description    Fetch single product
//@route          GET /api/products/:id
//@access    Public
router.get('/:id', asyncHandler(async (Request, Response) => { ///api/products/:id
  //const product = products.find(p => p._id === Request.params.id)
  const product = await Product.findById(Request.params.id)

  if(product) {
    Response.json(product)
  } else {
    //Response.status(404).json({ message: 'Product not found !'})
    Response.status(404)
    throw new Error('Product not found')
  }

}))






export default router;