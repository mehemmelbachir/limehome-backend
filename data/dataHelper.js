const fs = require('fs');
const filepath = __dirname +'/data/bookings.json';

module.exports = {

  addBooking : function(data){
    console.log(filepath);
    // Read the data json file
    fs.access(filepath, fs.constants.F_OK, err => {
      if(err){ throw err }
      fs.readFile(filepath, "utf8", (err, data) => {
        if(err){ throw err }
        let bookings = JSON.parse(data);
        bookings.push(data);
        fs.writeFile(filepath, JSON.stringify(bookings, null, "\t"), err => {
          if(err){
            throw err
          }
        })
        // console.log(data);
      })
    })
  }



}
