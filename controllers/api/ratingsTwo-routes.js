const router = require('express').Router();
const { Ratings } = require('../../models');
// const withAuth = require('../../utils/auth');

//When you go to the 
// http://localhost:3001/api/comments
// route you will see all the json
// router.get('/', (req,res) => {
//     Comment.findAll({})
//     .then(commentData => res.json(commentData))
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err)
//     });
// });

// router.get('/:id', (req, res) => {
//     Comment.findAll({
//             where: {
//                 id: req.params.id
//             }
//         })
//         .then(commentData => res.json(commentData))
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         })
// });

router.post('/', async (req, res) => {
	try {
			const newRating = await Ratings.create({
					...req.body,
					user_id: req.session.user_id,
			});

			res.json(newRating);
			// console.log(newRating);
	} catch (err) {
			res.status(500).json(err);
	}
});

// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const commentData = await Comment.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });
//     if (!commentData) {
//       res.status(404).json({ message: '404 Blog ID not found' });
//       return;
//     }
//     res.status(200).json(commentData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
module.exports = router;