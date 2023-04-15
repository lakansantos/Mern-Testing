const express = require('express')
const router = express.Router();


router.get('/',  (req, res) => {
    console.log('Yehey you ran it!!');
    res.json({mssg: 'Yehey!'});

  });



module.exports = router