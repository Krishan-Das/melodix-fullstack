const express = require("express")
const cors = require("cors")
const multer = require("multer")
const cookieParser = require("cookie-parser")

const uploadMusic = require("./services/ImageKit.service")
const authRoutes = require("./routes/auth.routes")


const app = express() // instance.

// --- middleware ---
app.use(express.json());
app.use(cors());
app.use(cookieParser());
const upload = multer(Storage = multer.memoryStorage());



// (prefix, API's) ...
app.use("/api/auth", authRoutes);


// upload file (test)
app.post("/music-post-create", upload.single("music"), (req, res)=>{
  const file = req.file;
  console.log(file);
  
  uploadMusic(file);
})



module.exports = app;