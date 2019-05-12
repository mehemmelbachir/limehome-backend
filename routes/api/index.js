var express = require('express');
var router = express.Router();
const bookingsRouter = require('./bookings');

router.use('/bookings', bookingsRouter)

module.exports = router;
