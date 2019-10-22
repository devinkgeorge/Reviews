import React from 'react';
import ReactDOM from 'react-dom';
import ReviewList from './components/reviewList.js'
import axios from 'axios';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: 1,
      currentProductReviews: [],
    }
    this.updateHelpfuls = this.updateHelpfuls.bind(this);
    this.getProductReviews = this.getProductReviews.bind(this);
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

  updateHelpfuls (numberOfHelpfuls, reviewId) {
    axios.put('/reviews', {
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
    axios.post('/reviews', {

    })
  }

  componentDidUpdate () {

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
            />
        }
      </div>
    )
  }
}

ReactDOM.render(<Reviews />, document.getElementById('reviews'));
