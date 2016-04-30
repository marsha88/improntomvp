import React from 'react';
import SkyLight from 'react-skylight';
import Blaze from 'meteor/gadicc:blaze-react-component';

export default class NavBar extends React.Component {
  render() {
    return(
      <div>
        <nav className="navbar navbar-light navbar-fixed-top">
          <button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2">
            &#9776;
          </button>
          <div className="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">
            <a className="navbar-brand ubuntu white" id="logoHeader" href="/"><span className="yellow">Im</span>pronto</a>
            <ul className="nav navbar-nav" id="navList">
              <li className="nav-item listItem">
                <a className="nav-link white" href="/events"><strong>Events</strong></a>
              </li>
              <li className="nav-item listItem">
                <a className="nav-link white" href="/howitworks"><strong>How It Works</strong></a>
              </li>
              <li className="nav-item listItem">
                <a className="nav-link white" href="/support"><strong>Support</strong></a>
              </li>
              <li className="nav-item listItem">
                <a className="nav-link white" href="/addevent"><strong>Add Event</strong></a>
              </li>
              <li className="nav-item listItem">
                <a className="nav-link yellow" href="#"><AccountsUI /></a>
                <button className="btn btn-secondary-outline" onClick={()=> this.refs.simpleDialog.show()}>Log In</button>
              </li>
            </ul>
          </div>
        </nav>
        <SkyLight hideOnOverlayClicked ref="simpleDialog" title="Impronto">
          <Blaze template="LogInModal" />
        </SkyLight>
      </div>
    );
  }
}
