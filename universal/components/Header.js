import React, { PropTypes, Component } from 'react';
import { IndexLink, Link } from 'react-router';

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className='HomeTown-header'>
          <h1>HomeTown</h1>
          <div className='HomeTown-links'>
            <IndexLink to='/' activeClassName='active'>All POis</IndexLink>  
            <Link to='/my-pois' activeClassName='active'>My POis</Link>
            <Link to='/other-pois' activeClassName='active'>Other POis</Link>
          </div>
        </header>
      </div>
    );
  }
}
