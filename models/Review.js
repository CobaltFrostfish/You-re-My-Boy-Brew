const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model { }

Review.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			primaryKey: true,
			autoIncrement: true,
		},
		user_id: {
			type:
		}
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'brew',
	}
);

module.exports = Brew;
