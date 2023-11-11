const { default: mongoose } = require("mongoose");

const schema = mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    created_at: {
        type: Date,
        default: Date.now
      },
      user: {
        type: String,
        required:true,
      }
})

const postschema =  mongoose.model("post",schema);

module.exports ={
    postschema
}