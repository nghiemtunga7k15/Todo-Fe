import React, { Component }  from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

import Main from './../components/Main';
import Interface from './../components/Interface';

export default () =>{
	return (
			<Router>
				<div>
				 	<Switch>
			        	<Route path="/" exact component={Main} />
			        	<Route path="/main" component={Main} />
			        	<Route path="/interface" component={Interface} />
			     	</Switch>
			    </div>
			</Router>
	)
}