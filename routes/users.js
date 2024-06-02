const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  profileImage: {
    type: String
  },
  contact: {
    type: Number,
    required: true
  },
  boards: {
    type: Array,
    default: []
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }]
});

// Plugin passport-local-mongoose to enable username and password authentication
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
