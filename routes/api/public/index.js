var express = require('express');
var router = express.Router();
const dataHelper = require('../../../data/dataHelper');

// Return bookings by property_id
router.get('/properties/:PROPERTY_ID/bookings', (req, res, next) => {
  let propertyId = req.params['PROPERTY_ID']
  try{
    dataHelper.getBookingsByProperty(propertyId)
    .then(data => {
      return res.status(200).json({ bookings : data })
    })
  } catch(err){
    next(err)
  }
})


// Return bookings by user
router.get('/users/:USER_ID/bookings', (req, res, next) => {
  let userId = req.params['USER_ID']
  try{
    dataHelper.getBookingsByUser(userId)
    .then(data => {
      return res.status(200).json({ bookings : data })
    })
  } catch(err){
    next(err)
  }
})


module.exports = router;
