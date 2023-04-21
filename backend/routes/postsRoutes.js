const express = require('express')
const router = express.Router();

router.get('/',  (req, res) => {
    console.log('Yehey you ran it!!');
    res.json({mssg: 'Yehey!'});

});


router.get('/posts' , (req, res) => {
  res.json({
    "posts" : [
      { 
        "postId"  : 1,
        "title" : "Hello This is my first post",
        "message" : "test"
      },
      {
        "postId"  : 2,
        "title" : "Hello This is my second post",
        "message" : "test"
      }
    ]
  })
})


router.get('/posts/:id', (req, res) => {
  res.json({
    mssg: "get a single posts"
  })
})

router.post('/posts/:id', (req, res) => {
  res.json({
    mssg: "post a single post"
  })
})

router.put('/posts/:id', (req, res) => {
  res.json({
    mssg: "edited a single post"
  })
})

router.delete('/posts/:id', (req, res) => {
  res.json({
    mssg: "deleted a single post"
  })
})





module.exports = router