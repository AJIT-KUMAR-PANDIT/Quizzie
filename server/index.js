const express = require('express');
const app = express();

const mongoose  = require("mongoose");

const dotenv = require("dotenv").config();


const port = process.env.PORT; 
const MONGODB_URL = process.env.MONGODB_URL;



const bodyParser = require('body-parser');
const { login, signUp } = require('./src/routes/routes');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get('/', (req, res) => {
  res.json({ 
  
    status: 200,
    message: 'Api is Healthy Up To Date'
  
  });
});







app.use('/signUp',signUp);
app.use('/login',login);








//____________________________________________________________________ [server starting point]
app.listen(port,()=>{

  mongoose.connect(MONGODB_URL)
  .then(console.log(`Server is running on port ${port}`))
  .catch(err => console.error(err))


});