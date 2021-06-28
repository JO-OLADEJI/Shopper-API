const express = require('express');
const { dbConnection } = require('./db/dbConnection.js');
const app = express();


dbConnection();
app.use(express.json());


app.get('/', (req, res) => res.send('Shopper Homepage'));


const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port} ...`));