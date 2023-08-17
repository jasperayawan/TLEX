const User = require('../model/user.model');
const router = require('express').Router();
const bcrypt = require('bcrypt')


router.put('/:id', async (req, res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin){
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }catch(error){
                return res.status(500).json(error)
            }
        }
        try{
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json("Account has been updated successfully!")
        } catch(error){
            return res.status(500).json(error)
        }
    } else {
        return res.status(403).json('you can update only your account!')
    }
})




router.delete('/deleteUser/:id', async (req, res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin){
        
        try{
            const user = await User.findByIdAndDelete(req.params.id, {
                $set: req.body,
            });
            res.status(200).json("Account has been deleted successfully!")
        } catch(error){
            return res.status(500).json(error)
        }
    } else {
        return res.status(403).json('you can delete only your account!')
    }
})


//folow a user

router.put('/:id/follow', async (req, res) => {
    if(req.body.userId !== req.params.id){
        try{
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);

            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({ $push: {followers: req.body.userId} });
                await currentUser.updateOne({ $push: {followings: req.params.id} });
                res.status(200).json("user has been followed!");
            } else {
                res.status(403).json("you already follow this user")
            }
        }   
        catch(error){
            res.status(500).json(error)
        }
    } else {
        res.status(403).json("you cant follow yourself!")
    }
})


// unfoollow a user
router.put('/:id/unfollow', async (req, res) => {
    if(req.body.userId !== req.params.id){
        try{
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);

            if(user.followers.includes(req.body.userId)){
                await user.updateOne({ $pull: {followers: req.body.userId} });
                await currentUser.updateOne({ $pull: {followings: req.params.id} });
                res.status(200).json("user has been unfollowed!");
            } else {
                res.status(403).json("you dont follow this user")
            }
        }   
        catch(error){
            res.status(500).json(error)
        }
    } else {
        res.status(403).json("you cant follow yourself!")
    }
})



router.get('/getUser/:id', async (req, res) => {
    try{
        const user = await User.findById(req.params.id)
        const {password, updatedAt, ...others} = user._doc
        if(!user){
            res.status(404).json("user not found!")
        } else {
            res.status(200).json(user)
        }
    } catch(error){
        console.log(error)
    }
})

module.exports = router;