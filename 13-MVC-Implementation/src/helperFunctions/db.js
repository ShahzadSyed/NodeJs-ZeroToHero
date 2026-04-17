const mongoose = require('mongoose')
const connectDB = async ()=>{
    try {
        console.log("process.env.MONGO_URI" ,process.env.MONGO_URI);
        const con = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MonogDb Connected: ${con.connection.host}`)
    } catch (error) {
        console.log(error.message);
        process.exit(1) // If DB fails, server stops.
    }
}

module.exports = connectDB