const express = require("express");
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const routes = require('./routes')
const cors = require('cors');
const cookieParser = require('cookie-parser')

dotenv.config()

const app = express()
const port = process.env.PORT || 3001


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(cookieParser())

routes(app);

mongoose.connect('mongodb://localhost:27017/huy_hoang_shop')
    .then(() => {
         console.log('Connect Db success!')
    })
    .catch((err) => {
         console.log(err)
    })
app.listen(port, () => {
    console.log('Server is running in port: ', + port)
})