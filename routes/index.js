const express = require('express');
const {Restaurant,
Hotel,
Activity} = require('../models');
const router = express.Router();

module.exports = router;


let allAttractions = {};



router.get('/attractions', (req, res, next) => {
    const hotelPromise = Hotel.findAll({ include: [{ all: true }] });
    const restaurantPromise = Restaurant.findAll({ include: [{ all: true }] });
    const activityPromise = Activity.findAll({ include: [{ all: true }] });
    Promise.all([hotelPromise, activityPromise, restaurantPromise])
    .then(([hotels, activities, restaurants]) => {
        res.json({hotels, activities, restaurants});
    })
    .catch(next);
});
