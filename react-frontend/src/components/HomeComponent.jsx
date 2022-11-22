import React, { Component } from 'react';
import PropTypes from 'prop-types';

import logo from '/Users/keeganbigoness/github/Egg-Project/react-frontend/src/images/Brown-eggs.jpg';

class HomeComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src={logo} width="90%" height="90%" className="center"></img>
      </div>
    );
  }
}

export default HomeComponent;
