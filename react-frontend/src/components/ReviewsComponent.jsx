import React, { Component } from 'react';
import { Card, CardSubtitle, CardText, CardTitle, CardBody, CardImg } from 'reactstrap';
import ReviewerService from '../service/ReviewerService';

class ReviewsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewers: '',
    };
  }

  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle tag="h1">Reviews Page</CardTitle>
          <div className="reviews-top">
            <div className="user-details">
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {'John Doe'}
              </CardSubtitle>
            </div>
            <div className="reviews-body">
              <CardText>{}</CardText>
            </div>
            <CardText>
              <small className="text-muted text-bold">{'3 mins ago'}</small>
            </CardText>
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default ReviewsComponent;
