const router = require('express').Router();
const User = require('../model/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')

dotenv.config();


const requireAuth = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Authorization token missing' });
  }

  try {
    // Verify the token
    const decodedToken = jwt.verify(token, process.env.secretKey);
    req.user = decodedToken; // Store the decoded token (e.g., userId) in the request object
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};




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

    // Create and sign a JWT
    const token = jwt.sign({ userId: user._id }, process.env.secretKey, { expiresIn: '1h' });
    res.setHeader('Authorization', `Bearer ${token}`);
    res.status(200).json({ user, token })
  }
  catch(error){
    res.status(500).json({ error:error.message })
  }
})


router.post('/logout', async (req, res) => {
  const token = req.headers.authorization;

  try {
    // You can add additional logic here if needed (e.g., token invalidation)
    res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;