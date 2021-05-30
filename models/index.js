const User = require('./User');
const Brew = require('./Brew');
const Ratings = require('./Ratings');

User.hasMany(Ratings, {
	foreignKey: 'user_id',
	onDelete: 'CASCADE'
});

Brew.belongsTo(User, {
	foreignKey: 'user_id'
  });

Brew.hasMany(Ratings,{
	foreignKey: 'brew_id' 
});

Ratings.belongsTo(User, {
	foreignKey: 'user_id'
});

module.exports = { User, Brew, Ratings };