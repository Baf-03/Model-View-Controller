const { default: mongoose } = require("mongoose");
const { UserModel } = require("../models/UserSchema");

const SignupController = async(req,res)=>{
    try{
        const {firstName,lastName,email,password}=req.body;
        if(!firstName || !lastName || !email || !password){
            console.log(firstName)
            console.log("bro enter valid credentials!")
            res.json({
                status:false,
                message:"Invalid Credentials",
                data:null
            })
            return;
        }
        const emailExist = await UserModel.findOne({email});
        if(emailExist){
            res.json({
                status:false,
                message:"email already Exist! ",
                data:null
            })
            return
        }
        const objtosend = {
            first_name:firstName,
            last_name:lastName,
            email,password
        }
        const UserSave = await UserModel.create(objtosend);
        res.json({
            status:true,
            message:"user Successfully signup",
            data:UserSave
        });

        
    }
    catch(error){
        console.log(error.message)
        res.json({
            status:false,
            message:error.message,
            data:null
        })
    }
}
const LoginController = async(req,res)=>{
    try{
        const {fullName,email,password}=req.body
        if(!fullName || !email || !password){
            console.log("enter valid Credentials!")
            return;
        }
        res.json({
            message:"login request sent",
            data:req.body,
        })

    }
    catch(error){
        console.log(error.message)
    }
}

module.exports ={
    SignupController,LoginController
}