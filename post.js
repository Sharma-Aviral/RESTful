const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    userPosts: [{
        postContent: String,
        likes: Number
    }],
    date: String 
  });
  
  const titten = mongoose.model('users', userSchema);
  

  module.exports = titten
  
