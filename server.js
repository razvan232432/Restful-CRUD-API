const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModule')
const app = express();

// middleware

app.use(express.json);
app.use(express.urlencoded({extended: false}));


// routes

app.get('/',(req, res) => {
    res.send('Hello');
;})

app.get('/blog',(req, res) => {
    res.send('Hello  blog');
;})

app.get('/products', async(req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
})

app.get('/products/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const product= await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
})

app.post('/product', async(req, res) => {
   try{
    const product = await Product.create(req.body);
    res.status(200).json(product);
    } catch(error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
   }
});

// update a product 

app.put('/products/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const product= await Product.findByIdAndUpdate(id, req.body);
    //we cannot  find  a product
    if(!product){
      return res.status(404).json({message: `cannot find any product with ID ${id}`})
    }
    res.status(200).json(product);
    const updateProduct = await Product.findById(id);
    res.status(200).json(updateProduct); 
  } catch (error) {
    res.status(500).json({message: error.message});
  }
})

// delete a product
app.delete('/products/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const product= await Product.findByIdAndDelete(id);
    if(!product){
      return res.status(404).json({message: `cannot find any product with ID ${id}`})
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
})
// connect  to database
 mongoose.connect('mongodb+srv://marius3837:123Qwe12r+@cluster0.afi4oij.mongodb.net/?retryWrites=true&w=majority')
    .then(() =>{
      console.log('connected to MMongoDB');
      app.listen(3000, () => {
      console.log('node is running on port 3000');
      });
    }).catch((error) => {
      console.log(error);
    });

 
