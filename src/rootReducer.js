import { combineReducers } from 'redux';
import appReducer from './Store/appReducer';

const reducers = combineReducers({
	appReducer: appReducer
});

export default reducers;
