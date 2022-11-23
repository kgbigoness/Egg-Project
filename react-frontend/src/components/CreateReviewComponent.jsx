import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

const colors = {
  orange: '#FFBA5A',
  grey: '#a9a9a9',
};

class CreateReviewComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
    };

    this.onStarClick = this.onStarClick.bind(this);
  }

  onStarClick(val) {
    this.setState({ rating: val }, () => {
      console.log('star ratting: ' + this.state.rating);
    });
  }

  render() {
    return (
      <div style={styles.container}>
        <h2> Egg Review </h2>

        <StarRatingComponent className="star" name="rate1" value={this.state.rating} onStarClick={this.onStarClick} />
        <form>
          <div className="form-group" style={{ marginBottom: '10px' }}>
            <label> First Name </label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="First Name" />
          </div>
          <div className="form-group" style={{ marginBottom: '10px' }}>
            <label> Last Name </label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Last Name" />
          </div>
          <div className="form-group" style={{ marginBottom: '10px' }}>
            <label> Email </label>
            <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Email Address" />
          </div>
          <div className="form-group" style={{ marginBottom: '10px' }}>
            <label> How did you use your eggs? </label>
            <textarea id="story" name="story" rows="4" cols="50"></textarea>
          </div>
          <div className="form-group" style={{ marginBottom: '10px' }}>
            <label> Can you notice the Paladino Pasture free range and organic egg difference? </label>
            <textarea id="story" name="story" rows="4" cols="50"></textarea>
          </div>
          <div className="form-group" style={{ marginBottom: '10px' }}>
            <label> Would you want Paladino Pasture eggs again? </label>
            <textarea id="story" name="story" rows="4" cols="50"></textarea>
          </div>
          <div className="form-group" style={{ marginBottom: '10px' }}>
            <label> Please rate the eggs overall on 1-5 stars: </label>
            <div>
              <StarRatingComponent name="rate1" value={this.state.rating} onStarClick={this.onStarClick} />
            </div>
          </div>
          <div className="center">
            <button className="btn btn-success" onClick={this.saveEmployee} style={{ marginLeft: '10px' }}>
              Submit
            </button>
            <button className="btn btn-danger" onClick={this.cancelEmployee} style={{ marginLeft: '10px' }}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

export default CreateReviewComponent;
