const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

router.get('/', async (req, res) => {
    console.log('======================');
    try {
        const dbPostData = await Post.findAll({
            attributes: ['id', 'title', 'created_at'],
            include: [
                {
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        });
        res.json(dbPostData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

module.exports = router;