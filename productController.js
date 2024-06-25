// backend/controllers/productController.js
const Product = require('../models/Product');

// Get all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add new product
const addProduct = async (req, res) => {
    const { name, category, price, description, imageUrl } = req.body;
    try {
        const product = new Product({
            name,
            category,
            price,
            description,
            imageUrl
        });

        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getProducts,
    addProduct
};
