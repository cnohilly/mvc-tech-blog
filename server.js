const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helpers = require('./utils/helpers');

const app = express();
// sets the port to the env variable or defaults to 3001
const PORT = process.env.PORT || 3001;

const sess = {
    name: process.env.SESSION_NAME,
    secret: process.env.SESSION_SECRET,
    rolling: true, // sets rolling to true to reset expiration
    cookie: {
        maxAge: 1000 * 60 * 10 // 10 minutes (1000ms * 60s * 10m)
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening on port ' + PORT));
});