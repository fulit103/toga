/* eslint-disable import/no-named-as-default-member */
// const reducer = (state, action) => {
//   return state;
// };

// export default reducer;

import { combineReducers } from 'redux';
// eslint-disable-next-line import/no-named-as-default
import kindReducer from './KindReducer';

export default combineReducers({
  kindReducer,
});
