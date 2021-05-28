const User = require('./User');
const Brew = require('./Brew');
const Review = require('./Review');
const Ratings = require('./Ratings');

Review.hasMany(Ratings, {
	foreignKey: 'review_id',
});

Review.belongsTo(Brew, {
	foreignKey: 'brew_id'
});

Ratings.belongsTo(User, {
	foreignKey: 'user_id',
});

module.exports = { User, Brew, Review, Ratings };