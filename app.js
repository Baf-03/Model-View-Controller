const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const { SignupController, LoginController } = require("./controller/authController");
const router = require("./routes");

//----------------middlewares-----------------
app.use(cors()); 
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//-------------initializing-mongo-db--------------
const DB_URI = "please insert valid key here"

mongoose.connect(DB_URI);
mongoose.connection.on("connected",()=>{console.log("connected to mongoDb")})
mongoose.connection.on("error",(err)=>{console.log(err.message)})

//-------------------controllers---------------------
app.use(router)

app.listen(PORT, () => {
  console.log(`The app is running on http://localhost:${PORT}`);
});
