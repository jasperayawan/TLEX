const router = require('express').Router();
const Post = require('../model/post.model')
const User = require('../model/user.model')

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


// react a post and disreact
router.put('/:id/react', async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(!post.reacts.includes(req.body.userId)){
            await post.updateOne({$push: { reacts:req.body.userId } });
            res.status(200).json("The post has been reacted!")
        } else {
            await post.updateOne({$pull: {reacts: req.body.userId}});
            res.status(200).json("The post has been disreacted"); 
        }
    }
    catch(error){
        res.status(500).json(error)
    }

})


// get a post

router.get('/:id', async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }
    catch(error){
        res.status(500).json(error)
    }
})



// get timeline post

router.get('/timeline/:userId', async (req, res) => {
    try{
        const currentUser = await User.findById(req.params.userId);
        const userPosts = await Post.find({ userId: currentUser._id });
        const friendPosts = await Promise.all(
            currentUser.followings.map((friendId) => {
                return Post.find({ userId: friendId });
            })
        );

        res.status(200).json(userPosts.concat(...friendPosts))
    }
    catch(error){
        res.status(500).json(error)
    }
})



// get all user's posts
router.get('/profile/:username', async (req, res) => {
    try{
        const user = await User.findOne({username: req.params.username})
        const posts = await Post.find({userId: user._id});
        res.status(200).json(posts);
    }
    catch(error){
        res.status(500).json(error)
    }
})



module.exports = router