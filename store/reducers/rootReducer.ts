import combineReducers from '../utils/combineReducers';

// reducers
import discoveryReducer from './discoveryReducer';
import statusReducer from './statusReducer';
import commandReducer from './commandReducer';

const rootReducer = combineReducers(
  discoveryReducer,
  statusReducer,
  commandReducer,
);

export default rootReducer;
