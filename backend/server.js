const express = require('express')

const app = express()


require('dotenv').config();

const PORT = process.env.PORT


app.get('/', (req, res) => {

    res.json({mssg: 'yehey'})
    console.log('Yehey you ran it!!')
})



app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})