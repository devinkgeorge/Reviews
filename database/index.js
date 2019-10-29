const mongoose = require('mongoose');
const Review = require('./models/reviews');

const db = mongoose.connection;

//  Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('db connected!');
});

const mongoAtlas =
  'mongodb+srv://dkgeorge:AE2PX9NAABSEJ6JU@amishon-reviews-ajtnd.mongodb.net/Amishon?retryWrites=true&w=majority';
mongoose.connect(mongoAtlas, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const getReviews = product => {
  return new Promise((resolve, reject) => {
    Review.find({ product_id: product })
      .then(reviewsForProduct => {
        resolve(reviewsForProduct);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const updateReviewHelpfuls = (reviewId, newHelpfuls) => {
  return new Promise((resolve, reject) => {
    Review.updateOne({ review_id: reviewId }, { helpfuls: newHelpfuls })
      .then(successMessage => {
        resolve(successMessage);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const postReview = reviewObject => {
  return new Promise((resolve, reject) => {
    Review.insertMany([reviewObject], (error, successMessage) => {
      if (error) {
        reject(error);
      }
      resolve(successMessage);
    });
    // .then(successMessage => {
    //   console.log('this is success ', successMessage)
    //   resolve(successMessage);
    // })
    // .catch(error => {
    //   console.log('this is catch')
    //   reject(error);
    // });
  });
};

const getAllReviews = () => {
  return new Promise((resolve, reject) => {
    Review.find({}).then(allReviews => {
      resolve(allReviews);
    });
  });
};

module.exports = {
  getReviews,
  updateReviewHelpfuls,
  postReview
};
