
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const products = require('./products');

app.use(express.static('public'));
app.use(express.json());

// Endpoint to get products
app.get('/api/products', (req, res) => {
    res.json(products);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});