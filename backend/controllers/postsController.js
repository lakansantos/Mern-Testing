const Post = require('../models/postsModel')

//get all posts 

const getAllPosts = async (req, res) => {
    const posts = await Post.find().sort({createdAt: "desc"})
    try {
        res.status(200).json(posts)
    } catch (error) {
        res.status(400).json({mssg: error})
    }
}

//get a single post

const getSinglePost = async (req, res) => {
    
    const {id} = req.params
    
    try {
        const singlePost = await Post.findById(id)
        if(!singlePost) {
        res.status(404).json({
            mssg: 'No posts found'
        }) 
        } else {
        res.status(200).json(singlePost)
        }
    } catch (error) {
        res.status(400).json({mssg: error.message})
    }
    
}

//add post

const addPost = async (req, res) => {
    const {title, message} = req.body;  
    try {
        const post = await Post.create({title, message})
        if(!post) {
            res.status(400).json({
                mssg: 'No post found!'
            }) 
        } else {
            res.status(200).json(post)
        }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}


//edit post

const editPost = async (req, res) => {
    const { title, message } = req.body
    try {
        const editedPost = await Post.findByIdAndUpdate(
            req.params.id, 
            { title, message},
            { new: true }    
        )

        if(!editedPost) {
            res.status(404).json({mssg: 'Post not found'})
        } else {
            res.status(200).json({mssg: 'Successfully edited the post'})
        }
    } catch (error) {
        res.status(400).json({mssg: "Something went wrong"})
    }
}


//delete post
const deletePost = async (req, res) => {
    try {
        const deletePost = await Post.findByIdAndDelete(
            req.params.id, 
            { new: true }    
        )

        if(!deletePost) {
            res.status(404).json({mssg: 'Post not found'})
        } else {
            res.status(200).json({mssg: 'Successfully deleted a post'})
        }

       
    } catch (error) {
        res.status(400).json({mssg: "Sometging went wrong!"})
    }
}


module.exports = {
    getAllPosts,
    getSinglePost,
    addPost,
    editPost,
    deletePost
}