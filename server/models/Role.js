import mongoose from "mongoose";
const { Schema } = mongoose;

const Role = new Schema({
   title: String
});

export default mongoose.model("Role", Role);