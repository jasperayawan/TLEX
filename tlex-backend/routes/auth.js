const router = require('express').Router();
const User = require('../model/user.model')
const bcrypt = require('bcrypt')

router.post('/register', async (req, res) => {
  const {username, email} = req.body;

  try{
    // generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const user = await new User({
      username: username,
      email: email,
      password: hashedPassword
    })

    const response = await user.save();
    res.status(200).json(response)
  }
  catch(error){
    res.status(400).json({ error: error.message})
  }

})


//LOGIN 
router.post('/login', async (req, res) => {
  try{
    const user = await User.findOne({email:req.body.email});

    if(!user){
      res.status(404).send('user not found!')
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if(!validPassword){
      res.status(400).json("wrong password!")
    }

    res.status(200).json(user)
  }
  catch(error){
    res.status(500).json({ error:error.message })
  }
})


module.exports = router;