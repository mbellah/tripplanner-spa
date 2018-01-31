const express = require('express');
const {Restaurant,
Hotel,
Activity} = require('../models');
const router = express.Router();

module.exports = router;


let allAttractions = {};

const hotelPromise = Hotel.findAll({include: [{all: true}]});
const restaurantPromise = Restaurant.findAll({include: [{all: true}]});
const activityPromise = Activity.findAll({include: [{all: true}]});


router.get('/attractions', (req, res, next) => {
    Promise.all([hotelPromise, activityPromise, restaurantPromise])
    .then((places) => {
        res.json(places);
    })
    .catch(next);
});
