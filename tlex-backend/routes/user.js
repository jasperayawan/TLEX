const router = require('express').Router();


router.post('/register', async (req, res) => {
    const { username, email, password, gender, bod, address, country } = req.body; 
    const user = new Parse.User();

        user.set('username', username)
        user.set('email', email);
        user.set('password', password);
        user.set('gender', gender);
        user.set('bod', bod);
        user.set('address', address);
        user.set('country', country);

    try{
        await user.signUp()

       res.status(200).json({ message: "User successfully created!" }) 
    }
    catch(error){
       res.status(400).json({ error: error.message })
    }
})



router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await Parse.User.logIn(email, password);
      // You can customize the response as needed
      res.status(200).json({ message: "Login successful!", user: user.toJSON() });
    } catch (error) {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  });


  router.post('/logout', async (req, res) => {
    try {
      await Parse.User.logOut();
      res.status(200).json({ message: "Logout successful!" });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while logging out' });
    }
  });

module.exports = router;