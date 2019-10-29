import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Ratings from './components/ratings.js'
import ReviewList from './components/reviewList.js'

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: 1,
      sortMethod: 'top',
      currentProductReviews: [],
    }
    this.updateHelpfuls = this.updateHelpfuls.bind(this);
    this.getProductReviews = this.getProductReviews.bind(this);
    this.sortReviews = this.sortReviews.bind(this);
    this.updateSorter = this.updateSorter.bind(this);
  }

  componentDidMount () {
    window.addEventListener('updateProduct', (event) => {
      this.setState({
        currentProduct: event.detail
      });
    }, false);

    this.getProductReviews();
  }

  getProductReviews () {
    axios.get('http://ec2-34-213-253-99.us-west-2.compute.amazonaws.com/reviews', {
      params: {
        product_id: this.state.currentProduct
      }
    })
    .then(reviewsForProduct => {
      this.sortReviews(reviewsForProduct.data);
    })
    .catch( error => {
      throw error;
    });
  }

  updateHelpfuls (numberOfHelpfuls, reviewId) {
    axios.put('http://ec2-34-213-253-99.us-west-2.compute.amazonaws.com/reviews', {
      review_id: reviewId,
      helpfuls: numberOfHelpfuls
    })
    .then(() => {
      this.getProductReviews()
    })
    .catch( error => {
      throw error;
    })
  }

  sortReviews (reviewsArray) {
    if(this.state.sortMethod === 'recent') {
      this.setState({
        currentProductReviews: reviewsArray.sort((review1, review2) => {
          return review2.created - review1.created;
        })
      });
    } else {
      this.setState({
        currentProductReviews: reviewsArray.sort((review1, review2) => {
          return review2.helpfuls - review1.helpfuls;
        })
      });
    }
  }

  updateSorter (newSortMethod) {
    this.setState({ sortMethod: newSortMethod });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentProduct !== prevState.currentProduct) {
      this.getProductReviews();
    }
    if (this.state.sortMethod !== prevState.sortMethod) {
      this.sortReviews(this.state.currentProductReviews);
    }
  }

  render () {
    return (
      <div className="review-rating-container">
        <div className="ratings-block-container">
          {
            this.state.currentProductReviews !== null &&
              <Ratings />
          }
        </div>
        <div className="review-block-container">
          {
            this.state.currentProductReviews !== null &&
              <ReviewList
                currentProductReviews={this.state.currentProductReviews}
                updateHelpfuls={this.updateHelpfuls}
                getProductReviews={this.getProductReviews}
                updateSorter={this.updateSorter}
                currentProduct={this.state.currentProduct}
                getProductReviews={this.getProductReviews}
              />
          }
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Reviews />, document.getElementById('reviews'));
