import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import PostsReducer from './reducer_posts';
import authReducer from './auth_reducer';

const rootReducer = combineReducers({
		form,
		auth: authReducer,
		posts: PostsReducer
});

export default rootReducer;