import { initialState as discoveryInitialState } from './reducers/discoveryReducer';
import { initialState as statusInitialState } from './reducers/statusReducer';
import { initialState as commandInitialState } from './reducers/commandReducer';

const initialState = {
  ...discoveryInitialState,
  ...statusInitialState,
  ...commandInitialState,
};

export default initialState;
