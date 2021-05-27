const router = require('express').Router();
const userRoutes = require('./user-routes');
const mapRoutes = require('./map-routes');

router.use('/users', userRoutes);
router.use('/map', mapRoutes);


module.exports = router;