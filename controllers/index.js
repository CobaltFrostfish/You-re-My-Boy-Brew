const router = require('express').Router();

// const apiRoutes = require('./api');
// const homeRoutes = require('./homeRoutes');

// router.use('/', homeRoutes);
// router.use('/api', apiRoutes);

const loginTest = require('./loginTest');
router.use('/', loginTest);

module.exports = router;
