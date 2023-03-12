import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type:String,
      required: true,
    },
    image: {
      type: String,
    },
    category: {
      type: String,
      default: "web",
    },
    link: {
      type: String,
    },
    createdAtProject:{
      type:Date,
    },
    closedAtProject:{
      type:Date,
    }
  },
  { timestamps: true }
);
export default mongoose.model("Project", projectSchema);
