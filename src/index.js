import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/Main.js';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import myReducer from './reducer';
import AppRouter from './router';
const store = createStore(myReducer);

ReactDOM.render(
	<Provider store={store}>
			<AppRouter />
	</Provider>

	, document.getElementById('root'));
serviceWorker.unregister();
