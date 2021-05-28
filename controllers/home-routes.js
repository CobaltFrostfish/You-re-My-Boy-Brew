const router = require('express').Router();
const { Ratings, User, Review, Brew } = require('../models');

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

// Ratings

router.get('/review/:id', async (req, res) => {
	try {
		const reviewData = await Review.findByPk(req.params.id, {
			include: [
				{
					model: Brew
				}, {
					model: Ratings,
					include: [
						User
					]
				}
			]
		});
		// console.log(reviewData);
		const review = reviewData.get({	plain: true	});
		// console.log(review);
		res.render('review', {
			...review,
			logged_in: req.session.logged_in
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/ratings', (req, res) => {
  res.render('ratings');
});

module.exports = router;
