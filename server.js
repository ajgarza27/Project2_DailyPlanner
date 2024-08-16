const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();

// Setup Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Middleware setup
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: true }));

// Routes
app.get('/', (req, res) => {
    res.render('main', { title: 'Daily Planner' });
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
});
