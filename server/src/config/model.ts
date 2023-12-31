const { Schema } = require("mongoose");

const UserSchema = new Schema({
  fullname: String,
  username: String,
  password: String,
});

const userModel = mongoose.Model("user", UserSchema);
