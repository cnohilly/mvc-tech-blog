const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// route to get all posts
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

// route to get post by id
router.get('/:id', async (req, res) => {
    try {
        const dbPostData = await Post.findByPk(req.params.id, {
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
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbPostData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

// route to make a new post
// expects title: string, user_id: integer
router.post('/', async (req, res) => {
    try {
        const dbPostData = await Post.create({
            title: req.body.title,
            user_id: req.session.user_id
        });
        res.json(dbPostData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

// route to update post
router.put('/:id', (req, res) => {
    try {
        const dbPostData = await Post.update(
            {
                title: req.body.title,
            },
            {
                where: {
                    id: req.params.id
                }
            }
        );
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id.' });
            return;
        }
        res.json(dbPostData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

// route to delete post
// route to update post
router.delete('/:id', (req, res) => {
    try {
        const dbPostData = await Post.destroy({
            where: {
                id: req.params.id
            }
        });
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id.' });
            return;
        }
        res.json(dbPostData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

module.exports = router;