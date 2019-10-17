import React from 'react';
import ReactDOM from 'react-dom';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: 13
    }
  }

  updateProduct (newProduct) {
    this.setState({currentProduct: newProduct})
  }



  render () {
    return (
      <div>
        This is the React test div
      </div>
    )
  }
}


// export default Reviews;
ReactDOM.render(
  React.createElement(Reviews),
  document.getElementById('reviews')
);