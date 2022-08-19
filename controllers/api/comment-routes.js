const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const dbCommentData = await Comment.findAll()
        res.json(dbCommentData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

router.post('/', async (req, res) => {
    try {
        const dbCommentData = await Comment.create({
            ...req.body,
            user_id: req.session.user_id
        });
        res.json(dbCommentData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
})

module.exports = router;