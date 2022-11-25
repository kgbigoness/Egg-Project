import React, { Component } from 'react';
import PropTypes from 'prop-types';

import logo from '../images/pic.jpg';

class HomeComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src={logo} width="10%" height="10%" className="center"></img>
        <div className="container">
          {/* <h2 className="center" style={{ margin: '1em' }}>
            Paladino's Pasture
          </h2> */}
          <div className="center col-md-12" style={{ margin: '1em' }}>
            <div className="card-body">
              <h4>Paladino's Pasture</h4>
              <h6 className="card-subtitle mb-2 text-muted">AJ & Kayla</h6>
              <p className="card-text">
                We take great pide in our chickens and treat them with the best of care. <br />
                We hope you enjoyed the eggs!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
