const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('./models');

app.use(cookieParser());
app.use(session({
    secret: process.env.SESSION_SECRET || 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}));

passport.use(new LocalStrategy(async (username, password, done) => {
    try {
        const user = await User.findOne({ where: { username } });
        if (user && await user.validPassword(password)) {
            return done(null, user);
        } else {
            return done(null, false, { message: 'Invalid credentials' });
        }
    } catch (err) {
        return done(err);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findByPk(id);
        done(null, user);
    } catch (err) {
        done(err);
    }
});

app.use(passport.initialize());
app.use(passport.session());
