import React from 'react';
import ReactDOM from 'react-dom';
import ReviewList from './components/reviewList.js'

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: 13,
      currentProductReviews: [
        {
          review_id: 13,
          product_id: 13,
          created: 20131313,
          title: 'Manure',
          user_id: 13,
          body: 'Radish on kidney beans',
          verified: true,
          stars: 5,
          size: 'M',
          style: 'Some style',
          helpfuls: 13
        },
        {
          review_id: 14,
          product_id: 16,
          created: 20040403,
          title: 'Forage Harvester',
          user_id: 17,
          body:
            'Turkey daisys eggs squeal, horses moonshine apples raising Mooo tractor plow. Ewes fox, hay hook hay manure, John Deere radish barn, a hay lof.',
          verified: false,
          stars: 2,
          color: 'black',
          style: 'Other style',
          helpfuls: 0
        }
      ]
    }
    this.updateProduct = this.updateProduct.bind(this);
  }

  updateProduct (newProduct) {
    this.setState({ currentProduct: newProduct })
  }

  render () {
    return (
      <div>
        <ReviewList currentProductReviews={this.state.currentProductReviews} />
      </div>
    )
  }
}


// export default Reviews;
ReactDOM.render(<Reviews />, document.getElementById('reviews'));