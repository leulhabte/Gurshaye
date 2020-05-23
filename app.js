const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const tips = require('./api/routes/tips');

dotenv.config();

mongoose.connect(`mongodb+srv://leulhabte:${process.env.MONGO_PASS}@cluster0-saiuw.mongodb.net/test?retryWrites=true&w=majority`,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
).then(console.log('Database connected...')).catch(err=>{console.log(err)});

const app = express();

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