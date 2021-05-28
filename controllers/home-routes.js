const router = require('express').Router();

// GET all galleries for homepage
// http://localhost:3001/
router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    // console.log(err);
    res.status(500).json(err);
  }
});

// http://localhost:3001/login
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

router.get('/mapPage', (req, res) => {
  res.render('mapPage');
});

router.get('/ratings', (req, res) => {
  res.render('ratings');
});

module.exports = router;
