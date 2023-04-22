const express = require('express')
const router = express.Router();

const {
  getAllPosts,
  getSinglePost,
  addPost,
  editPost,
  deletePost
} = require('../controllers/postsController')

router.get('/',  (req, res) => {
    console.log('Yehey you ran it!!');
    res.json({mssg: 'Yehey!'});
});

//route for getting all posts
router.get('/posts' , getAllPosts)

//route for getting single post
router.get('/posts/:id', getSinglePost) 


//route for adding post
router.post('/posts', addPost) 


//route for editing a single post
router.put('/posts/:id', editPost)


router.delete('/posts/:id', deletePost)





module.exports = router