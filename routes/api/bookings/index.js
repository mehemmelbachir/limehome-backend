var express = require('express');
var router = express.Router();
const dataHelper = require('../../../data/dataHelper');

// Create booking request
router.post('/',(req, res, next) => {
  let booking = req.body
  try {
    dataHelper.addBooking(booking)
    .then(resp => {
      return res.status(201).json(resp)
    })
  }catch(err){
    next(err)
  }
})

module.exports = router;
