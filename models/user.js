import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const userAdminSchema = new mongoose.Schema({
  username: {
    type: String,
    maxlength: 255,
    minlength: 2,
    required: true,
    trim: true
  },
  password: {
    type: String,
    minlength: 3,  
    maxlength: 255,
    required: true,
    trim: true
  },
});

userAdminSchema.pre('save', async function(next) {
  if(!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  return next();
});

userAdminSchema.methods.setToken = function() {
  const token = jwt.sign({ _id: this._id }, process.env.NEXT_PUBLIC_JWT_TOKEN);
  return token;
};

userAdminSchema.methods.passCheck = async function(pass) {
  const check = await bcrypt.compare(pass, this.password);
  return check;
};

module.exports = mongoose.models.UserAdmin || mongoose.model('UserAdmin', userAdminSchema);