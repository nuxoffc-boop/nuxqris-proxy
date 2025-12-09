const express = require('express');
const request = require('request');
require('dotenv').config(); // Optional, hanya untuk lokal testing
const app = express();

app.use(express.json());

const API_KEY = process.env.API_KEY; // Akan diambil dari Vercel Environment Variable

app.post('/qris', (req, res) => {
    const { project, order_id, amount } = req.body;

    const options = {
        url: 'https://app.pakasir.com/api/transactioncreate/qris',
        method: 'POST',
        json: {
            project,
            order_id,
            amount,
            api_key: API_KEY
        }
    };

    request(options, (error, response, body) => {
        if (error) return res.status(500).json({ error: error.message });
        res.json(body);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));

ng on port ${PORT}`));