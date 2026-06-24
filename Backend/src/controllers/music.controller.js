const jwt = require("jsonwebtoken");

const musicModel = require("../models/music.model")
const albumModel = require("../models/album.model")
const uploadMusic = require("../services/ImageKit.service")


// Create Music (Only Artist).
async function createMusic(req, res) {

  const { title } = req.body;
  const file = req.file;

  const result = await uploadMusic(file);

  const music = await musicModel.create({
    uri: result.url,
    title,
    artist: req.user.id
  })



  res.status(201).json({
    message: "Music created successfully",
    music: {
      id: music._id,
      uri: music.uri,
      title: music.title,
      artist: music.artist
    }
  })
}

async function createAlbum(req, res) {
  const { title, musics } = req.body;

  const album = await albumModel.create({
    title,
    artist: req.user.id,
    musics
  })


  res.status(201).json({
    message: "Album created successfully",
    album: {
      id: album._id,
      title: album.title,
      artist: album.artist,
      music: album.musics
    }
  })


}


module.exports = { createMusic, createAlbum }