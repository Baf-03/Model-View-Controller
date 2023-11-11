const { postschema } = require("../models/PostSchema");
const { UserModel } = require("../models/UserSchema");

const CreatePost = async (req, res) => {
  try {
    const { firstName, user } = req.body;
    if (!firstName || !user) {
      res.json({
        status: false,
        message: "invalid credentials",
        data: null,
      });
      return;
    }
    const user_check = await UserModel.findById(user);
    if(user_check){
        const objtosend = {
            first_name: firstName,
            user,
          };
          const Createblog = postschema.create(objtosend);
          res.json({
            status: true,
            message: "Blog created XD",
            data: objtosend,
          });
          return;
    }
    res.json({
        status: false,
        message: "invalid id",
        data: null,
      });
    
  } catch (error) {
    res.json({
      status: false,
      message: error.message,
      data: null,
    });
  }
};

const GetUserPost = async(req,res)=>{
  const body = req.body
  console.log(body)
  const {user} = req.body
  console.log(user)
  let users= await postschema.find({"user":user})
  console.log(users)
  res.json({
    message:users
  })
}

const delPost = async(req,res)=>{
  const {id}= req.body
  console.log(id)
  let delblog = await postschema.findByIdAndDelete(id);
  console.log(delblog)
  res.json({
    status:true,
    message:"delete blog",
    data:delblog
  })
}
module.exports = {
  CreatePost,
  GetUserPost,
  delPost
};
