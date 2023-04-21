const express = require('express')
require('dotenv').config();
const cors = require('cors');
const router = require('./routes/postsRoutes');
const db = require('./config/db')
const PORT = process.env.PORT


db();
const app = express()
app.use(express.json())
app.use(cors({
    origin: '*'
}))

app.use('/api/v1', router);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})