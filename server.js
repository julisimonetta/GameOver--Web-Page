require('dotenv').config()
const cors = require('cors')
const passport = require("passport")
const express = require('express')
const fileUpload = require('express-fileupload')
require('./config/database')

const Router = require ('./routes/routes')

const app = express()

const path = require('path')

//middleware
app.use(cors());
app.use(fileUpload())
app.use(express.json());
app.use(passport.initialize());
app.use('/api', Router);


// HOST HEROKU

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname + "/client/build/index.html"))
    })
    }

app.listen(process.env.PORT || 4000, process.env.HOST || "0.0.0.0", () => console.log(`Server listening on port ${process.env.PORT || 4000}`))

