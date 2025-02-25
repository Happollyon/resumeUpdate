const express = require('express');
const dotenv = require('dotenv');
const apiRoutes = require('./routes/apiRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api', apiRoutes);// Default route for root URL 

// Default route for root URL
app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});