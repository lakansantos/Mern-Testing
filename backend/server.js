const express = require('express')
require('dotenv').config();
const app = express()
const cors = require('cors');
const router = require('./routes/postsRoutes');

const PORT = process.env.PORT

app.use(cors({
    origin: '*'
}))

app.use('/api/v1', router);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})