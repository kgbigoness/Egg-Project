import React, { Component } from 'react';

class HeaderComponent extends Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <ul class="navbar-nav me-auto">
          <li class="nav-item active">
            <a className="navbar-brand" href="/" style={{ marginLeft: '20px' }}>
              Paladino's Pasture
            </a>
          </li>
        </ul>

        <ul class="navbar-nav ms-auto">
          <li class="nav-item active">
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
