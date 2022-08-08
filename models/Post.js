const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Post model 
class Post extends Model { }

// fields and columns for the post model
Post.init(
    {
        // id column - primary key - auto increment
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        // title
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // user_id - references user model - creator of the post
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableNameName: true,
        underscored: true,
        modelName: 'post'
    }
)