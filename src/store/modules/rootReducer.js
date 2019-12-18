import { combineReducers } from 'redux';

import exampleReducer from './exampleModule/reducer';
import auth from './auth/reducer';

export default combineReducers({
  example: exampleReducer,
  auth
});
