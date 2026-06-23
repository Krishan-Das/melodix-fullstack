const express = require("express")
const cors = require("cors")


const app = express() // instance.

// --- middleware ---
app.use(express.json())
app.use(cors())


// prefix ...



module.exports = app;