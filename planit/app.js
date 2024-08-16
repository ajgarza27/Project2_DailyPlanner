const express = require('express');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const exphbs = require('express-handlebars');
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Configure middleware
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Set up Handlebars as the template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Serve static files (e.g., CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const userRoutes = require('./routes/users');
const taskRoutes = require('./routes/tasks');

// Use routes
app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);

// Set up a home route (example)
app.get('/', (req, res) => {
    res.render('home');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
