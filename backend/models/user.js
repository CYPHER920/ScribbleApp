const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, trim: true, required: true, unique: true },
    username: { type: String, trim: true, required: true },
    password: { type: String, trim: true, minLength: 6, required: true }
})

const User = mongoose.model("user", userSchema);
module.exports = User;