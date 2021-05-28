const router = require('express').Router();
const userRoutes = require('./user-routes');
const mapRoutes = require('./map-routes');
const ratingsRoute = require('./ratings-routes');

router.use('/users', userRoutes);
router.use('/map', mapRoutes);
router.use('/ratings', ratingsRoute);


module.exports = router;