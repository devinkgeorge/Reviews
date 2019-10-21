import React from 'react';
import ReactDOM from 'react-dom';
import ReviewList from './components/reviewList.js'
import axios from 'axios';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: 2,
      currentProductReviews: []
      // [
      //   {
      //     review_id: 13,
      //     product_id: 1,
      //     created: "December 6, 2016",
      //     title: 'Manure',
      //     user: {
      //       user_id: 13,
      //       username: 'Rachel P',
      //       userimg: 'https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png'
      //     },
      //     body: 'Radish on kidney beans',
      //     verified: true,
      //     stars: 5,
      //     size: 'M',
      //     style: 'Some style',
      //     helpfuls: 13
      //   },
      //   {
      //     review_id: 14,
      //     product_id: 16,
      //     created: "September 12, 2009",
      //     title: 'Forage Harvester',
      //     user: {
      //       user_id: 14,
      //       username: 'Buddy J',
      //       userimg: 'https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png'
      //     },
      //     body:
      //       'Turkey daisys eggs squeal, horses moonshine apples raising Mooo tractor plow. Ewes fox, hay hook hay manure, John Deere radish barn, a hay lof.Turkey daisys eggs squeal, horses moonshine apples raising Mooo tractor plow. Ewes fox, hay hook hay manure, John Deere radish barn, a hay lof.Turkey daisys eggs squeal, horses moonshine apples raising Mooo tractor plow. Ewes fox, hay hook hay manure, John Deere radish barn, a hay lof.Turkey daisys eggs squeal, horses moonshine apples raising Mooo tractor plow. Ewes fox, hay hook hay manure, John Deere radish barn, a hay lof.',
      //     verified: false,
      //     stars: 2,
      //     color: 'black',
      //     size: 'XXL',
      //     helpfuls: 0
      //   }
      // ]
    }
    this.updateProduct = this.updateProduct.bind(this);
  }

  updateProduct (newProduct) {
    this.setState({ currentProduct: newProduct })
  }

  componentDidMount () {
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

  componentDidUpdate () {

  }

  render () {
    return (
      <div>
        {
          this.state.currentProductReviews !== null &&
            <ReviewList currentProductReviews={this.state.currentProductReviews} />
        }
      </div>
    )
  }
}

// export default Reviews;
ReactDOM.render(<Reviews />, document.getElementById('reviews'));
