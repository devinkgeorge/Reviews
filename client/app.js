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
    this.getProductReviews = this.getProductReviews.bind(this);
    this.sortReviews = this.sortReviews.bind(this);
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
      this.sortReviews(reviewsForProduct.data, 'top');
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

  postReview (reviewToPost) {
    axios.post('http://ec2-34-213-253-99.us-west-2.compute.amazonaws.com/reviews', {

    })
  }

  componentDidUpdate () {

  }

  sortReviews (reviewsArray, sortMethod) {
    if(sortMethod === 'recent') {
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

  render () {
    return (
      <div>
        {
          this.state.currentProductReviews !== null &&
            <ReviewList
              currentProductReviews={this.state.currentProductReviews}
              updateHelpfuls={this.updateHelpfuls}
              getProductReviews={this.getProductReviews}
              sortReviews={this.sortReviews}
            />
        }
      </div>
    )
  }
}

ReactDOM.render(<Reviews />, document.getElementById('reviews'));
