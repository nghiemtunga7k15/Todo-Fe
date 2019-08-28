import { combineReducers } from 'redux';

import {todo } from './todo';
import {detailTodo } from './active';

export default combineReducers({
	todo,
	detailTodo
})