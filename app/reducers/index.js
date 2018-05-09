// @flow
import { combineReducers } from 'redux';
import navigationReducer from './navigation.reducer';

// Root Reducer
const rootReducer = combineReducers({
  navigation: navigationReducer,
});

export default rootReducer;
