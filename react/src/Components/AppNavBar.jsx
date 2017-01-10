import React, {Component} from 'react';
import { Link } from 'react-router';

class AppNavBar extends Component {
  render() {
    return (
      <div>
      <div className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>

       <a className="navbar-brand" href="#">Brand</a>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            {this.props.children}
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Dashboard">Dashboard</Link></li>
            <li><Link to="/Counter">Counter</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
    );
  }
}

export default AppNavBar;
