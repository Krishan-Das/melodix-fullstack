const express = require("express");
const multer = require("multer");

const musicController = require("../controllers/music.controller")
const authMiddleware = require("../middlewares/auth.middleware")

const router = express.Router();
// middleware
const upload = multer({
  storage: multer.memoryStorage()
})


router.post("/upload", authMiddleware.authArtist, upload.single("music"), musicController.createMusic);
router.post("/album", authMiddleware.authArtist, musicController.createAlbum);


module.exports = router;