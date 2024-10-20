import mongoose from "mongoose";

const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/CRUD_OperationsMongoDB";
mongoose.connect(DB_URL)

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const userModel = mongoose.model("user", userSchema);

export default userModel;