import React, { createContext, useReducer } from 'react';

import rootReducer from './reducers/rootReducer';
import initialState from './initialState';
import discoveryActions from './actions/discoveryActions';
import statusActions from './actions/statusActions';
import commandActions from './actions/commandActions';

const context = createContext<any>(initialState);
const { Provider } = context;

const StateProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  const actions = {
    ...discoveryActions(dispatch),
    ...statusActions(state, dispatch),
    ...commandActions(state, dispatch),
  };

  return <Provider value={{ state, actions }}>{children}</Provider>;
};

export { context, StateProvider };
