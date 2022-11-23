import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import ReviewerService from '../service/ReviewerService';
import logo from '../images/Brown-eggs.jpg';

const colors = {
  orange: '#FFBA5A',
  grey: '#a9a9a9',
};

class CreateReviewComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      q1: '',
      q2: '',
      q3: '',
      rating: 0,
    };

    this.onStarClick = this.onStarClick.bind(this);
    this.submitReview = this.submitReview.bind(this);
    this.cancelReview = this.cancelReview.bind(this);
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeQ1Handler = this.changeQ1Handler.bind(this);
    this.changeQ2Handler = this.changeQ2Handler.bind(this);
    this.changeQ3Handler = this.changeQ3Handler.bind(this);
  }

  changeQ1Handler(event) {
    this.setState({ q1: event.target.value });
  }

  changeQ2Handler(event) {
    this.setState({ q2: event.target.value });
  }

  changeQ3Handler(event) {
    this.setState({ q3: event.target.value });
  }

  changeEmailHandler(event) {
    this.setState({ email: event.target.value });
  }

  changeLastNameHandler(event) {
    this.setState({ lastName: event.target.value });
  }

  changeFirstNameHandler(event) {
    this.setState({ firstName: event.target.value });
  }

  submitReview(event) {
    // event.stopImmediatePropagation();
    event.preventDefault();

    let questionResponses = {
      q1: this.state.q1,
      q2: this.state.q2,
      q3: this.state.q3,
      rating: this.state.rating,
    };

    let reviewer = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      responses: JSON.stringify(questionResponses),
    };
    console.log('reviewer => ' + JSON.stringify(reviewer));
    ReviewerService.createReviewer(reviewer).then(() => {
      this.props.history.push('/');
    });
  }

  cancelReview() {
    return this.props.history.push('/');
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
        <form>
          <div className="form-group" style={{ marginBottom: '10px' }}>
            <label> First Name </label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="First Name" value={this.state.firstName} onChange={this.changeFirstNameHandler} />
          </div>
          <div className="form-group" style={{ marginBottom: '10px' }}>
            <label> Last Name </label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Last Name" value={this.state.lastName} onChange={this.changeLastNameHandler} />
          </div>
          <div className="form-group" style={{ marginBottom: '10px' }}>
            <label> Email </label>
            <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Email Address" value={this.state.email} onChange={this.changeEmailHandler} />
          </div>
          <div className="form-group" style={{ marginBottom: '10px' }}>
            <label> How did you use your eggs? </label>
            <textarea id="story" name="story" rows="4" cols="50" value={this.state.q1} onChange={this.changeQ1Handler}></textarea>
          </div>
          <div className="form-group" style={{ marginBottom: '10px' }}>
            <label> Can you notice the Paladino Pasture free range and organic egg difference? </label>
            <textarea id="story" name="story" rows="4" cols="50" value={this.state.q2} onChange={this.changeQ2Handler}></textarea>
          </div>
          <div className="form-group" style={{ marginBottom: '10px' }}>
            <label> Would you want Paladino Pasture eggs again? </label>
            <textarea id="story" name="story" rows="4" cols="50" value={this.state.q3} onChange={this.changeQ3Handler}></textarea>
          </div>
          <div className="form-group" style={{ marginBottom: '10px' }}>
            <label> Please rate the eggs overall on 1-5 stars: </label>
            <div>
              <StarRatingComponent name="rate1" value={this.state.rating} onStarClick={this.onStarClick} />
            </div>
          </div>
          <div className="center">
            <button className="btn btn-success" onClick={this.submitReview} style={{ marginLeft: '10px' }}>
              Submit
            </button>
            <button className="btn btn-danger" onClick={this.cancelReview} style={{ marginLeft: '10px' }}>
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
