const mongoose = require('mongoose');
require('dotenv').config()
const uri = process.env.uri
mongoose.connect(uri, {
  useNewUrlParser: true, useUnifiedTopology: true
}).catch(err=>{
  console.log(err);
})

