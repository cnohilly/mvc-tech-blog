const router = require('express').Router();
const { User, Post, Comment, Vote } = require('../../models');

// route to get all users
router.get('/', async (req, res) => {
    try {
        const dbUserData = await User.findAll({
            attributes: { exclude: ['password'] }
        });
        res.json(dbUserData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// route to get a user by id
router.get('/:id', async (req, res) => {
    try {
        const dbUserData = await User.findByPk(req.params.id, {
            attributes: { exclude: ['password'] },
            include: [
                {
                    model: Post,
                    attributes: ['id', 'title', 'created_at']
                },
                {
                    model: Comment,
                    attributes: ['id', 'comment_text', 'created_at'],
                    include: {
                        model: Post,
                        attributes: ['title']
                    }
                }
            ]
        });
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id.' });
            return;
        }
        res.json(dbUserData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// route to create a new user which will be used to sign up and passes the data to the session
router.post('/', async (req, res) => {
    // expects username: string, email: string, password: string
    try {
        const dbUserData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json(dbUserData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

router.put('/:id', async (req, res) => {
    // expects username: string, email: string, password: string
    // uses req.body to only update the changes that have been specified
    try {
        const dbUserData = User.update(req.body, {
            individualHooks: true,
            where: {
                id: req.params.id
            }
        });
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id.' });
            return;
        }
        res.json(dbUserData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

router.delete('/:id', async (req, res) => {
    try {
        const dbUserData = await User.destroy({
            where: {
                id: req.params.id
            }
        });
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id.' });
            return;
        }
        res.json(dbUserData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

router.post('/login', async (req, res) => {
    const dbUserData = await User.findOne({
        where: {
            username: req.body.username
        }
    });
    if (!dbUserData) {
        res.status(400).json({ message: 'No user with that username!' });
        return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
    }

    req.session.save(() => {
        // declare session variables
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
});

router.post('/logout', (req, res) => {
    console.log(req.session);
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        res.status(404).end();
    }
});

module.exports = router;