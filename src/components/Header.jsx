import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
      	
      	<li><Link to= '/'>Main page</Link></li>
      	<li><Link to= '/news'>News</Link></li>
      	<li><Link to= '/profile'>Profile</Link></li>

      	<hr/>
    
      </div>
    );
  }
}

export default Header;