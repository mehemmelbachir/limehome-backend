var express = require('express');
var router = express.Router();
const bookingsRouter = require('./bookings');
const publicRouter = require('./public');

router.use('/public', publicRouter)
// TODO: Add passport middleware to protect private api
router.use('/bookings', bookingsRouter)

module.exports = router;
