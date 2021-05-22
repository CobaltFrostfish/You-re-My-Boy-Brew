const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Brew extends Model { }

Brew.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		brewery_type: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		street: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		city: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		postal_code: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		website_url: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		phone: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		longitude: {
			type: DataTypes.FLOAT,
			allowNull: true,
		},
		latitude: {
			type: DataTypes.FLOAT,
			allowNull: true,
		},

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
