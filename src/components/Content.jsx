import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router';
import Main from './Main'
import News from './News'
import Login from './Login'
import Profile from './Profile'


class Content extends Component {
  render() {
    return (
      <div>
      
	    <Switch>
			<Route exact path="/" component={Main} />
		    <Route path="/news" component={News} />
		    <Route path="/profile" component={Profile} />
		    <Route path="/login" component={Login} />
		</Switch>
	  
      </div>

    );
  }
}

export default Content;