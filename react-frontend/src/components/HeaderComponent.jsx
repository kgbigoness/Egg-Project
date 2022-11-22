import React, { Component } from 'react';

class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="create-review">
              Leave a Review
            </a>
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
