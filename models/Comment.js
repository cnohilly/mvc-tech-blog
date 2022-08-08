const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// creates the comment model
class Comment extends Model { }

Comment.init(
    {
        // id - primary key - auto increment
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // comment_text - at least 1 character long
        comment_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        // user_id - references user model - poster of comment
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        // post_id - references post model - post that the comment is attached to
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'post',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
)