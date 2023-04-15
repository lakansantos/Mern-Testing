const express = require('express')
const app = express()
const cors = require('cors');
const router = require('./routes/testroutes');

require('dotenv').config();

const PORT = process.env.PORT

app.use(cors({
    origin: 'http://localhost:4000'
}))

app.use('/api/v1', router);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})