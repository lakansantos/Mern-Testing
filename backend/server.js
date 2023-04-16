const express = require('express')
const app = express()
const cors = require('cors');
const router = require('./routes/postsRoutes');

require('dotenv').config();

const PORT = process.env.PORT

app.use(cors({
    origin: 'http://127.0.0.1:5173'
}))

app.use('/api/v1', router);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})