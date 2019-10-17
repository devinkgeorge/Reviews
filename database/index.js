const mongoose = require('mongoose');
const Review = require('./models/reviews');
// const reviews = require('./data.js');

// Get the default connection
const db = mongoose.connection;

//  Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('db connected!');
});

// Set up mongoose connection to Atlas
const mongoAtlas =
  'mongodb+srv://dkgeorge:AE2PX9NAABSEJ6JU@amishon-reviews-ajtnd.mongodb.net/Amishon?retryWrites=true&w=majority';
mongoose.connect(mongoAtlas, { useNewUrlParser: true });

const getReviews = callback => {
  Review.find({ product_id: 3 }, (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

// Review.insertMany(reviews, err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('successfully seeded');
//   }
// });

module.exports = getReviews;
