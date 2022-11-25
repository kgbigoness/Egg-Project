import React, { Component } from 'react';

class HeaderComponent extends Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav me-auto">
          <li className="nav-item active">
            <a className="navbar-brand" href="/" style={{ marginLeft: '20px' }}>
              Paladino's Pasture
            </a>
          </li>
        </ul>

        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <a className="navbar-brand" href="/create-review">
              Add Review
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default HeaderComponent;
