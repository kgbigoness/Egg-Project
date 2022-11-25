import React, { Component } from 'react';

import ReviewerService from '../service/ReviewerService';
import StarRatingComponent from 'react-star-rating-component';
import { Card, CardSubtitle, CardText, CardTitle, CardBody, CardImg, CardColumns, Button } from 'reactstrap';

class ListReviewsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewers: [],
      ratings: [],
    };
  }

  async componentDidMount() {
    try {
      const res = await ReviewerService.getReviewers();

      // got the data
      const reviewers = res.data;

      // not parse the response for each reviewer?
      const mappedReviewers = reviewers?.map((reviewer) => {
        try {
          const parsedResponses = JSON.parse(reviewer.responses);

          return {
            ...reviewer,
            responses: parsedResponses,
          };
        } catch (error) {
          return { ...reviewer, responses: [] };
        }
      });

      this.setState({ reviewers: mappedReviewers });
    } catch (error) {
      console.log(error);
    }

    console.log(this.state.reviewers);
  }

  render() {
    return (
      <div>
        <CardColumns id="cards-container">
          {this.state.reviewers.map((item, index) => (
            <Card>
              {console.log(item.responses)}
              <CardBody>
                <StarRatingComponent name="rate1" value={item.responses.rating} />
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {item.firstName + ' ' + item.lastName}
                </CardSubtitle>
                <CardText>
                  {' '}
                  How did you use your eggs? <br />
                  {item.responses.q1}
                </CardText>
                <CardText>
                  {' '}
                  Can you notice the Paladino Pasture free range and organic egg difference? <br /> {item.responses.q2}
                </CardText>
                <CardText>
                  {' '}
                  Would you want Paladino Pasture eggs again? <br />
                  {item.responses.q3}
                </CardText>
              </CardBody>
            </Card>
          ))}
        </CardColumns>
      </div>
    );
  }
}

export default ListReviewsComponent;
