const express = require('express');
const mongoose = require('mongoose');
const routes = express.Router();

require('../model/gurshaye');
const Tips = mongoose.model('tips');

routes.post('/save', (req, res)=>{
    console.log(req.body);
    const newTips = {
        league: "English",
        team1: "Arsenal",
        team2: "Manchister United",
        time: "13:30",
        date: "May-20-20",
        tip: "1x"	
    };

    new Tips(newTips).save()
    .then(tip=>{console.log(tip)})
    .catch(err=>{console.log(err)});
    res.json({
        message: saved,
    });
});

routes.get('/posts',(req, res)=>{
    Tips.find({}).then(tips=>{
        const tip = {
            data: tips.map(tips=>{
                return {
                    league: tips.league,
                    team1: tips.team1,
                    team2: tips.team2,
                    time: tips.time,
                    date: tips.date,
                    tip: tips.tip,
                }
            })
        };

        res.json({
            Total: tips.length,
            data: tip.data
        });
    })
});

module.exports = routes;