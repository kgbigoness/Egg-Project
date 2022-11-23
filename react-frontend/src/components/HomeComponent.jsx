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
        <img src={logo} width="90%" height="90%" className="center"></img>
        <div className="container">
          <h2 className="center" style={{ margin: '1em' }}>
            Paladino's Pasture
          </h2>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
