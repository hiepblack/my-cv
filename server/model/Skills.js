import mongoose from "mongoose";


const SkillSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    level:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        default:"https://picsum.photos/200/300"
    },
    role:{
        type:String,
        required:true,
    }
},
{ timestamps: true }
)

export default mongoose.model('Skills', SkillSchema);