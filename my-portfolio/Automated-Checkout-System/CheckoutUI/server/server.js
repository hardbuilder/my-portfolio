const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Automated Checkout System API');
});

// Example API endpoint for product billing
app.post('/api/bill', (req, res) => {
    const { productId, quantity } = req.body;
    // Logic for billing would go here
    res.json({ message: `Billing for product ${productId} with quantity ${quantity}` });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});