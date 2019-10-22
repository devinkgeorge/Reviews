import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewList from './components/reviewList.js'

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: 1,
      currentProductReviews: [],
    }
    this.updateHelpfuls = this.updateHelpfuls.bind(this);
    this.updateReviews = this.updateReviews.bind(this);
    this.sortReviews = this.sortReviews.bind(this);
  }

  updateHelpfuls (numberOfHelpfuls, reviewId) {
    axios.put('reviews', {
      review_id: reviewId,
      helpfuls: numberOfHelpfuls
    })
    .then(() => {
      this.updateReviews()
    })
    .catch( error => {
      throw error;
    })
  }

  updateReviews () {
    axios.get('/reviews', {
      params: {
        product_id: this.state.currentProduct
      }
    })
    .then(reviewsForProduct => {
      this.setState({ currentProductReviews: reviewsForProduct.data });
    })
    .catch( error => {
      throw error;
    });
  }

  componentDidMount () {
    this.updateReviews();
  }

  postReview (reviewToPost) {
    axios.post('/reviews', {

    })
  }

  componentDidUpdate () {

  }

  sortReviews (reviewsArray, sortMethod) {
    if(sortMethod === 'recent') {
      this.setState({
        currentProductReviews: reviewsArray.sort((review1, review2) => {
          return review1.created - review2.created;
        })
      });
    } else {
      this.setState({
        currentProductReviews: reviewsArray.sort((review1, review2) => {
          return review1.helpfuls - review2.helpfuls;
        })
      });
    }
  }

  render () {
    return (
      <div>
        {
          this.state.currentProductReviews !== null &&
            <ReviewList
              currentProductReviews={this.state.currentProductReviews}
              updateHelpfuls={this.updateHelpfuls}
              updateReviews={this.updateReviews}
              sortReviews={this.sortReviews}
            />
        }
      </div>
    )
  }
}

// export default Reviews;
ReactDOM.render(<Reviews />, document.getElementById('reviews'));
