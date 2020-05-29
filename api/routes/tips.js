const express = require('express');
const mongoose = require('mongoose');
const routes = express.Router();

require('../model/gurshaye');
const Tips = mongoose.model('tips');

routes.post('/save', (req, res)=>{
    console.log("Invoked");
    console.log(req.body);
    const newTips = {
        league: req.body.league,
        team1: req.body.team1,
        team2: req.body.team2,
        time: req.body.time,
        date: req.body.date,
        tip: req.body.tip	
    };

    new Tips(newTips).save()
    .then(tip=>{
        res.json({
            message: "saved",
            data: tip
        });
    })
    .catch(err=>{console.log(err)});
});

routes.get('/posts',(req, res)=>{
    Tips.find({}).then(tips=>{
        console.log(tips)
        res.json({
            Total: tips.length,
            data: tips
        });
    })
});

routes.put('/edit/:id', (req, res)=>{
    Tips.findOne({
        _id: req.params.id
    }).then((value)=>{
        value.league = req.body.league,
        value.team1 = req.body.team1,
        value.team2 = req.body.team2,
        value.time = req.body.time,
        value.date = req.body.date,
        value.tip = req.body.tip
        
        value.save().then(()=>{
            console.log("Value Saved");
            res.json({
                data: value
            });
        })
    });
});

routes.delete('/remove/:id', (req, res)=>{
    Tips.deleteOne({
        _id: req.params.id
    }).then(()=>{
        res.json({
            message: 'Success',
        });
    }).catch(err=>{
        res.json({
            message: 'Action Failed'
        });
    });
});

module.exports = routes;