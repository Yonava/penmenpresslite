const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());

const articles = require('./routes/api/articles');
app.use('/api/articles', articles);

mongoose.connect(process.env.API_KEY, () => console.log('Successfully Connected'))

// Handle production
if (process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static(__dirname + '/public/'));
  
    // Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening @ localhost:${port}`));
