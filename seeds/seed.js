const sequelize = require('../config/connection');
const { User, Brew, Ratings } = require('../models');

const userData = require('./userData.json');
const brewData = require('./breweriesNew.json');
const ratingsData = require('./ratingsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const brews = await Brew.bulkCreate(brewData, {
    returning: true,
  });

  const ratings = await Ratings.bulkCreate(ratingsData, {
    returning: true,
  });
	
  process.exit(0);
};

seedDatabase();