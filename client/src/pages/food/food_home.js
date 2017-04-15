import React, { Component } from 'react';

class FoodHome extends Component {
  render() {
    return (
      <div className="page">
        <div className="page-header">
          <h3>Food Home</h3>
        </div>
        <div className="page-body">
          <div>
            <p>Next Meal</p>
            <p>Calendar</p>
          </div>
        </div>
      </div>
    );
  }
}

export default FoodHome;