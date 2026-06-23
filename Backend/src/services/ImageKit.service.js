const ImageKit = require("@imagekit/nodejs")

const imageKit_instance = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
})



// upload music function

const uploadMusic = async(file)=>{
  try {
    const response = await imageKit_instance.files.upload({
    file: (file.buffer).toString("base64"),
    fileName: file.originalname,
    folder: "/melodix/songs",
  })

  console.log(response);
  } catch (error) {
    console.log("File upload error:", error);
    
  }
}


module.exports = uploadMusic;