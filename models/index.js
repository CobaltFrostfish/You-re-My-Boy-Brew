const User = require('./User');
const Brew = require('./Brew');
const Ratings = require('./Ratings');

// User.hasMany(Brew, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });



module.exports = { User, Brew, Ratings };
