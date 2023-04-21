const express = require('express')
const router = express.Router();
const Post = require('../models/postsModel')

router.get('/',  (req, res) => {
    console.log('Yehey you ran it!!');
    res.json({mssg: 'Yehey!'});
});


router.get('/posts' , async(req, res) => {
  const posts = await Post.find()
  try {
    res.status(200).json(posts)
  } catch (error) {
    res.status(400).json({mssg: error})
  }
})


router.get('/posts/:id', async(req, res) => {
  const {id} = req.params

  try {
    const singlePost = await Post.findById(id)
    if(!singlePost) {
      res.status(404).json({
        mssg: 'No post found'
      }) 
    } else {
      res.status(200).json(singlePost)
    }
  } catch (error) {
    res.status(400).json({mssg: error.message})
  }
})

router.post('/posts', async(req, res) => {
  const {title, message} = req.body;  
  try {
    const post = await Post.create({title, message})
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})
// router.post('/posts', (req, res) => {
//   res.json({
//     mssg: "test"
//   })
// })


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