const mongoose = require('mongoose');
require('dotenv/config.js');


const dbConnection = () => {
  mongoose.connect(
    process.env.DB_CONNECTION_STRING,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('DB connected :)')
  );
}


module.exports = { dbConnection }