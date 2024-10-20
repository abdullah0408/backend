import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Abdullah:9818848066@cluster0.mdpwq.mongodb.net/CRUD_OperationsMongoDB")

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const userModel = mongoose.model("user", userSchema);

export default userModel;