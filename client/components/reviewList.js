import React from 'react';
import Review from './review.js';
import axios from 'axios';

class ReviewList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      addReview: false,
      review_id: 813,
      product_id: 0,
      created: 0,
      title: '',
      body: '',
      verified: false,
      stars: 0,
      style: '',
      helpfuls: 0,
      user: {
        user_id: 13,
        username: 'Tricky Ricky',
        userimg: 'https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png'
      }
    }
    this.postReview = this.postReview.bind(this);
    this.editReview = this.editReview.bind(this);
  }

  editReview (reviewEdit) {
    this.setState({ reviewToPost: reviewEdit })
  }

  postReview (event) {
    event.preventDefault();
    axios.post('http://ec2-34-213-253-99.us-west-2.compute.amazonaws.com/reviews',  {
        reviewToPost: {
          review_id: this.state.review_id,
          product_id: this.state.product_id,
          created: this.state.created,
          title: this.state.title,
          body: this.state.body,
          verified: this.state.verified,
          stars: this.state.stars,
          style: this.state.style,
          helpfuls: 0,
          user: {
            user_id: 13,
            username: 'Tricky Ricky',
            userimg: 'https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png'
          }
        }
      }
    )
    .then(() => {
      this.props.getProductReviews();
    })
    .then(() => {
      this.setState({
        addReview: false,
        created: 0,
        title: '',
        body: '',
        verified: false,
        stars: 0,
        style: '',
        helpfuls: 0,
        user: {
          user_id: 134,
          username: 'Slicky Ricky',
          userimg: 'https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png'
        }
      });
    })
    .catch( error => {
      throw error;
    })
  }

  render () {
    return (
      <div>
        {
          this.props.currentProductReviews &&
          <h3 className="number-reviews-header">
            {this.props.currentProductReviews.length} farmer reviews
          </h3>
        }
        <div className="reviews-sorter-container">
          <select
            className="reviews-dropdown-button"
            onChange={
              () => this.props.updateSorter(event.target.value)
            }
          >
            <option
              className="reviews-sorter-option"
              value='top'
            >
              Top Reviews
            </option>
            <option
              className="reviews-sorter-option"
              value='recent'
            >
              Most recent
            </option>
          </select>
          {/* <i className="reviews-dropdown-icon"></i> */}
        </div>
        <div className="review-list-container">
          {
            this.props.currentProductReviews.length > 0 &&
            this.props.currentProductReviews.map( currentReview => {
              return (
                <Review
                  review={currentReview}
                  key={currentReview.review_id}
                  updateHelpfuls={this.props.updateHelpfuls}
                />
              )
            })
          }
          <div>
            <div className="see-all-reviews-container">
              <a href="URLforAllReviewsPage" className="see-all-reviews-link">
                See all {this.props.currentProductReviews.length} farmer reviews
              </a>
            </div>
            <div>
              <button
                className="review-button post-review-button"
                onClick={
                  () => this.setState({
                    addReview: true,
                    review_id: this.state.review_id + 1,
                    created: Date.now(),
                    product_id: this.props.currentProduct
                  })
                }
              >
                Write a farmer review
              </button>
            </div>
          </div>
          {
            this.state.addReview &&
            <form
              className="post-review-form"
              onSubmit={this.postReview}
            >
              <div className="post-review-form-section">
                <label>
                  <h3 className="post-review-title">
                    Star rating
                  </h3>
                  <div>
                    <input
                      value={this.state.stars}
                      onChange={
                        event => {
                          this.setState({
                            stars: event.target.value
                          });
                        }
                      }/>
                  </div>
                </label>
              </div>
              <div className="post-review-form-section">
                <label>
                  <h3 className="post-review-title">
                    Add a title
                  </h3>
                  <div>
                    <textarea
                      className="post-review-text"
                      value={this.state.title}
                      onChange={
                        event => {
                          this.setState({
                            title: event.target.value
                          });
                        }
                      }
                    />
                  </div>
                </label>
              </div>
              <div className="post-review-form-section">
                <label>
                  <h3 className="post-review-title">
                  Add a written review
                  </h3>
                  <div>
                    <textarea
                      className="post-review-text"
                      value={this.state.body}
                      onChange={
                        event => {
                          this.setState({
                            body: event.target.value
                          });
                        }
                      }
                    />
                  </div>
                </label>
              </div>
              <div>
                <input
                  type="submit"
                  className="review-button"
                  value="Submit"
                />
              </div>
            </form>
          }
        </div>
      </div>
    )
  }
}

export default ReviewList;