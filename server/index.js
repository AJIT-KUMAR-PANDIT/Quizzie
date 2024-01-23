const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const mongoose  = require("mongoose");

const dotenv = require("dotenv").config();


const port = process.env.PORT; 
const MONGODB_URL = process.env.MONGODB_URL;



const bodyParser = require('body-parser');
const routes = require('./src/routes/routes');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get('/', (req, res) => {
  res.json({ 
  
    status: 200,
    message: 'Api is Healthy Up To Date'
  
  });
});







app.use('/', routes); 








//____________________________________________________________________ [server starting point]
app.listen(port,()=>{

  mongoose.connect(MONGODB_URL)
  .then(console.log(`Server is running on port ${port}`))
  .catch(err => console.error(err))


});