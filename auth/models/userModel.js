import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017');

const userSchema = new mongoose.Schema({
    userNmae: String,
    email: String,
    password: String
})

const userModel = mongoose.model('user', userSchema);

export default userModel;