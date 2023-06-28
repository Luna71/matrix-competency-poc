import mongoose, { mongo } from "mongoose";
const { Schema } = mongoose;

const CompetencyCategory = new Schema({
   title: String,
   role: {
    type: Schema.Types.ObjectId,
    ref: "Role"
   }
});

export default mongoose.model("CompetencyCategory", CompetencyCategory);