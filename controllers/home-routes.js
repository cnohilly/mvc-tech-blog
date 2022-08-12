const { Post, User } = require('../models');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const dbPostData = await Post.findAll({
        attributes: [
            'title',
            'content',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    res.render('homepage', {
        loggedIn: req.session.loggedIn
    });
    const posts = dbPostData.map(post => post.get({ plain: true }));
    res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn
    });
});

module.exports = router;