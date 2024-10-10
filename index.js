const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();
const productRoute = require('./routes/product.route.js');

//middleware
app.use(express.json());

//routes
app.use('/api/products', productRoute);


app.get('/', (req, res) => {
  res.send("Hello from Node API");
});


mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTER}/${process.env.DB_COLLECTION_NAME}?retryWrites=true&w=majority&appName=backendDB`)
  .then(() => {
    console.log('Connected to database!') 
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });    
    })
  .catch(err => console.error('Connection error:', err));





