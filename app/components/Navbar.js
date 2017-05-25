import React, {Component} from 'react';
import ReactRouter, {Link, IndexLink} from 'react-router';

require('./../styles/css/navigation.css');

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="custom-navbar">
          <div className="links-list">
            <li><IndexLink to='/' activeClassName="active">Dashboard</IndexLink>
            <li><Link to='/Page1' activeClassName="active">Contribute</Link></li>
            <li><Link to='/Research' activeClassName="active">Research</Link></li>
            <li><Link to='/Poc' activeClassName="active">Poc</Link></li>
            </li>
          </div>
        </div>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Navbar;
