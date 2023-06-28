import mongoose from "mongoose";
const { Schema } = mongoose;

const MatrixSubmission = new Schema({
   user: String, // Placeholder
   role: {
    type: Schema.Types.ObjectId, 
    ref: "Role"
   },
   comments: [[String]],
   scores: [[Number]]
});

export default mongoose.model("MatrixSubmission", MatrixSubmission);