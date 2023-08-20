const express = require('express');
const bodyParse = require('body-parser')
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const connect = require('../tlex-backend/db')
const helmet = require('helmet');
const morgan = require('morgan')
// const userRoute = require('../tlex-backend/routes/user')
const authRoute = require('../tlex-backend/routes/auth')
const userRoute = require('../tlex-backend/routes/user')
const postRoute = require('../tlex-backend/routes/post')

dotenv.config();

const multer = require("multer");
const path = require("path");

app.use('/images', express.static(path.join(__dirname,"/images")))

//middlewares
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"))

port = process.env.PORT;


// app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);


const storage = multer.diskStorage({
  destination:(req,file,callback) => {
    callback(null, "images")
  },filename:(req,file,callback) => {
    callback(null, req.body.name);
  },
})

const upload = multer({storage: storage});

app.post('/api/upload', upload.single('file'),(req,res) => {
  res.status(200).json("File has been uploaded")
})



app.listen(port, () => {
    console.log('Listening to port:', port)
    connect();
})

