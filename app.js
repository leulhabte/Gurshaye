const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const tips = require('./api/routes/tips');
const session = require('express-session');
const passport = require('passport');

dotenv.config();

mongoose.connect(`mongodb+srv://leulhabte:${process.env.MONGO_PASS}@cluster0-saiuw.mongodb.net/test?retryWrites=true&w=majority`,
{
    useNewUrlParser: true,
    useUnifiedTopology: false
}
).then(console.log('Database connected...')).catch(err=>{console.log(err)});

const app = express();

// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true
// }));


const user = require('./api/routes/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Handling CORS Error
app.use((req, res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
        );
    if(req.method == 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, PATCH, DELETE');
        return res.status(200).json({});
    }    
    next();
});

app.use('/', tips);
app.use('/', user);

app.use((req, res, next)=>{
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        message: error.message
    })
});

module.exports = app;