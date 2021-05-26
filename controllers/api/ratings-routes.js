const router = require('express').Router();
const { Ratings } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newRating = await Ratings.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newRating);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;