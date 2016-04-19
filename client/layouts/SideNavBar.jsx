import React from 'react';

export default class SideNavBar extends React.Component {
  render() {
    return(
      <div>
        <h5 className="side-nav-item-text">activity filter</h5>
        <br />
        <h5 className="side-nav-item-text">day</h5>
        <ul className="side-nav-list">
          <li className="side-nav-item"><button type="button" className="btn btn-default btn-xs">All</button></li>
          <li className="side-nav-item"><button type="button" className="btn btn-default btn-xs">Sun</button></li>
          <li className="side-nav-item"><button type="button" className="btn btn-default btn-xs">Mon</button></li>
          <li className="side-nav-item"><button type="button" className="btn btn-default btn-xs">Tues</button></li>
          <li className="side-nav-item"><button type="button" className="btn btn-default btn-xs">Wed</button></li>
          <li className="side-nav-item"><button type="button" className="btn btn-default btn-xs">Thurs</button></li>
          <li className="side-nav-item"><button type="button" className="btn btn-default btn-xs">Fri</button></li>
          <li className="side-nav-item"><button type="button" className="btn btn-default btn-xs">Sat</button></li>
        </ul>
        <h5 className="side-nav-item-text">type</h5>
        <ul className="side-nav-list">
          <li className="side-nav-item"><button type="button" className="btn btn-default btn-xs">All</button></li>
          <li className="side-nav-item"><button type="button" className="btn btn-default btn-xs">Fitness</button></li>
          <li className="side-nav-item"><button type="button" className="btn btn-default btn-xs">Food & Drink</button></li>
          <li className="side-nav-item"><button type="button" className="btn btn-default btn-xs">Beauty</button></li>
          <li className="side-nav-item"><button type="button" className="btn btn-default btn-xs">Games</button></li>
          <li className="side-nav-item"><button type="button" className="btn btn-default btn-xs">Movies</button></li>
          <li className="side-nav-item"><button type="button" className="btn btn-default btn-xs">Art</button></li>
          <li className="side-nav-item"><button type="button" className="btn btn-default btn-xs">Shows</button></li>
        </ul>
        <h5 className="side-nav-item-text">num of ppl</h5>
        <ul className="side-nav-list">
          <li className="side-nav-item"><button type="button" className="btn btn-default btn-xs">All</button></li>
          <li className="side-nav-item"><button type="button" className="btn btn-default btn-xs">4-5</button></li>
          <li className="side-nav-item"><button type="button" className="btn btn-default btn-xs">6-8</button></li>
        </ul>
      </div>
    );
  }
}