import React, { Component } from 'react';

class HeaderComponent extends Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav me-auto">
          <li className="nav-item active">
            <a className="navbar-brand" href="/" style={{ marginLeft: '20px' }}>
              <b>Paladino's Pasture</b>
              <span>
                {' '}
                |{' '}
                <a className="navbar-brand" href="list-reviews">
                  {' '}
                  Reviews{' '}
                </a>
              </span>
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
