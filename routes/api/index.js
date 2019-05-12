var express = require('express');
var router = express.Router();
const bookingsRouter = require('./bookings');
const publicRouter = require('./public');

router.use('/bookings', bookingsRouter)
router.use('/public', publicRouter)

module.exports = router;
