const { Post, User, Comment } = require('../models');

const router = require('express').Router();

// route for homepage, gets all of the posts and passes it in the render
router.get('/', async (req, res) => {
    try {
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
        });
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// route for login page
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

// route for sign up page
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});

router.get('/post/:id', async (req, res) => {
    try {
        const dbPostData = await Post.findByPk(req.params.id, {
            attributes: ['id', 'title', 'content', 'created_at'],
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Comment,
                    attributes: ['comment_text', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                }
            ]
        });
        if (!dbPostData) {
            res.status(404).json({ message: 'There is no post with this id.' });
            return;
        }
        const post = dbPostData.get({ plain: true });
        res.render('single-post', {
            post,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;