import React, { Component } from 'react';

class HeaderComponent extends Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="create-review">
          Leave a Review
        </a>
      </nav>
    );
  }
}

export default HeaderComponent;
