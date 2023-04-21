const mongoose = require('mongoose')

const db = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL)

        console.log(`Database connected at: ${conn.connection.host}`)
    } catch (error){
        console.log('An error occured: ', error)
        process.exit(1)
    }
}

module.exports = db