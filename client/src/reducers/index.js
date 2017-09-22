import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import {
  AUTH_USER,
  UNAUTH_USER
} from '../actions/types';

	const rootReducer = combineReducers({
  		form,
  		auth: authReducer
	});

export default rootReducer;