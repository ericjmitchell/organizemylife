import React, { Component } from 'react';
import { Link } from 'react-router';

class MainLayout extends Component {
  render() {
    return (
      <div className="app">
        <header className="primary-header">
          <div className="main-logo">
            <p>Organize My Life</p>
          </div>
          <ul>
            <li><Link to="/" activeClassName="active">Home</Link></li>
            <li><Link to="/food" activeClassName="active">Food</Link></li>
          </ul>
        </header>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default MainLayout;