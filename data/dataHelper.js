const fs = require('fs');
const filepath = __dirname +'/bookings.json';

module.exports = {

  addBooking : function(booking){
    return new Promise((resolve, reject) => {
      // Check access right..
      fs.access(filepath, fs.constants.F_OK, err => {
        if(err){ reject(err) }
        // Read the data json filea
        fs.readFile(filepath, (err, data) => {
          if(err){ reject(err) }
          let bookings = JSON.parse(data);
          // Append booking to the array
          bookings.push(booking)
          // Write back the bookings array into the json file
          fs.writeFile(filepath, JSON.stringify(bookings, null, "\t"), err => {
            if(err){ throw err }
            resolve(booking)
          })
        })
      })
    })
  },

  getBookingsByProperty : function(propertyId){
    return new Promise((resolve, reject) => {
      // Check file reading permission
      fs.access(filepath, fs.constants.F_OK, err => {
        if(err){ reject(err) }
        // Read the json file
        fs.readFile(filepath, (err, data) => {
          if(err){ reject(err) }
          let bookings = JSON.parse(data)
          resolve(bookings.filter(v => v.property_id == propertyId))
        })
      })
    })
  },

  getBookingsByUser : function(userEmail){
    return new Promise((resolve, reject) => {
      // Check file reading permission
      fs.access(filepath, fs.constants.F_OK, err => {
        if(err){ reject(err) }
        // Read the json file
        fs.readFile(filepath, (err, data) => {
          if(err){ reject(err) }
          let bookings = JSON.parse(data)
          // filter bookings
          bookings = bookings.filter(v => v.user.email == userEmail)
          // Map to remove user object
          bookings.map(booking => { delete booking.user })
          resolve(bookings)
        })
      })
    })
  }


}
