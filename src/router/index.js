import React, { Component }  from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

import Main from './../components/Main';

export default () =>{
	return (
			<Router>
				<div>
				 	<Switch>
			        	<Route path="/" exact component={Main} />
			        	<Route path="/about" component={Main} />
			        	<Route path="/contact" component={Main} />
			     	</Switch>
			    </div>
			</Router>
	)
}