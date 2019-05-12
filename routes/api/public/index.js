var express = require('express');
var router = express.Router();
const dataHelper = require('../../../data/dataHelper');

// Return bookings by property_id
router.get('/properties/:PROPERTY_ID/bookings', (req, res, next) => {
  let propertyId = req.params['PROPERTY_ID']
  try{
    dataHelper.getBookingsByProperty(propertyId)
    .then(data => {
      return res.status(200).json(data)
    })
  } catch(err){
    next(err)
  }
})


module.exports = router;
