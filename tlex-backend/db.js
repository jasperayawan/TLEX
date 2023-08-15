const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('successfully connected to database!')
    }
    catch(error){
        console.log("can't connect to database!")
    }
}

module.exports = connect;