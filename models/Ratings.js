const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ratings extends Model { }

Ratings.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        stars: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: true,
        },
				date_created: {
					type: DataTypes.DATE,
					allowNull: false,
					defaultValue: DataTypes.NOW,
				},
				user_id: {
					type: DataTypes.INTEGER,
					references: {
						model: 'user',
						key: 'id',
					},
				},
				brew_id: {
					type: DataTypes.INTEGER,
					references: {
						model: 'brew',
						key: 'id'
					}
				}
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'ratings',
    }
);

module.exports = Ratings;