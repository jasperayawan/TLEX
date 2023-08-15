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

dotenv.config();

//middlewares
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"))

port = process.env.PORT;


// app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);


app.listen(port, () => {
    console.log('Listening to port:', port)
    connect();
})

