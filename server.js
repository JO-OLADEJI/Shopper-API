const express = require('express');
const { dbConnection } = require('./db/dbConnection.js');
const productsRoute = require('./routes/product.js');
const app = express();


dbConnection();
app.use(express.json());


app.get('/', (req, res) => res.send('Shopper Homepage'));
app.use('/api/products', productsRoute);


const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port} ...`));