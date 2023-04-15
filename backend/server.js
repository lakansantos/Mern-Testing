const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())


require('dotenv').config();

const PORT = process.env.PORT


app.get('/',  cors(), (req, res) => {

    // res.json({mssg: 'yehey'})
    console.log('Yehey you ran it!!')
})


app.get('/api/v1', cors(),(req, res) => {
    res.json({mssg: 'yehey'})
    console.log('Yehey you ran it!!')
})



app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})