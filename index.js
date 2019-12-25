const mongoose = require('mongoose');
require('./config/db');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./routes');
const app = express();
require('dotenv').config({path: 'global_variables.env'});
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(express.static(path.join(__dirname, 'public')));

app.use('/',
    router()
);

app.use(cookieParser());

app.use(session({
    secret: process.env.SECRET_SEED,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
        mongooseConnection: mongoose.connection
    })
}));

app.listen(4000);

