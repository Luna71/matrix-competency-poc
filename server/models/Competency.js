import mongoose from "mongoose";
const { Schema } = mongoose;

const Competency = new Schema({
   title: String,
   category: {
    type: Schema.Types.ObjectId,
    ref: "CompetencyCategory"
   }
});
export default mongoose.model("Competency", Competency);