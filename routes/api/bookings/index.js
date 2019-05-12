var express = require('express');
var router = express.Router();
const dataHelper = require('../../../data/dataHelper');

// var bookings = require('../../../data/bookings.json')


router.post('/',(req, res, next) => {
  let data = req.body
  try {
    dataHelper.addBooking(data)
    return res.status(201).json(data)
  }catch(err){
    next(err)
  }
})

module.exports = router;
