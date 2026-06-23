const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")


const authRoutes = require("./routes/auth.routes")
const musicRoutes = require("./routes/music.routes")


const app = express() // instance.

// --- middleware ---
app.use(express.json());
app.use(cors());
app.use(cookieParser());



// (prefix, API's) ...
app.use("/api/auth", authRoutes);

app.use("/api/music", musicRoutes);






module.exports = app;