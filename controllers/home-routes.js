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

router.get('/mappage', (req, res) => {
	try{
		res.render('mappage', {
			loggedIn: req.session.loggedIn
		});
	} catch (err) {
		res.status(500).json(err);
	};
});

// Review
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
			loggedIn: req.session.loggedIn
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/ratings', (req, res) => {
  res.render('ratings');
});

module.exports = router;
