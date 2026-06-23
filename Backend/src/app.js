const express = require("express")
const cors = require("cors")
const multer = require("multer")

const uploadMusic = require("./services/ImageKit.service")


const app = express() // instance.
const upload = multer(Storage = multer.memoryStorage())

// --- middleware ---
app.use(express.json())
app.use(cors())


// (prefix, API's) ...
// upload file (test)
app.post("/music-post-create", upload.single("music"), (req, res)=>{
  const file = req.file;
  console.log(file);
  
  uploadMusic(file);
})



module.exports = app;