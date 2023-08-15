const router = require('express').Router();
const Post = require('../model/post.model')

// create a post
router.post('/', async (req, res) => {
    const post = new Post(req.body);
    try{
        const savePost = await post.save();
        res.status(200).json(savePost)
    }
    catch(error){
        res.status(400).json({ error: error.message })
    }
})


// update a post

router.put('/:id', async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne({$set: req.body});
            res.status(200).json("the post has been updated!")
        } else {
            res.status(403).json("you can update only your post!")
        }
    }
    catch(error){
        res.status(500).json(error)
    }
})


// delete post


router.delete('/:id', async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json("the post has been deleted!")
        } else {
            res.status(403).json("you can delete only your post!")
        }
    }
    catch(error){
        res.status(500).json(error)
    }
})
module.exports = router