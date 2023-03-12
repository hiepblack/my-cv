import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
    testName: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    
},{ timestamps: true })

export default mongoose.model('Testimonial', testSchema)