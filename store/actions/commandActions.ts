import { setCommand } from '../../utils/apiUtils';

export const COMMAND_START = 'COMMAND_START';
export const COMMAND_FAILURE = 'COMMAND_FAILURE';
export const COMMAND_SUCCESS = 'COMMAND_SUCCESS';

const startAction = () => {
  return {
    type: COMMAND_START,
  };
};
const failureAction = (error: string) => {
  return {
    type: COMMAND_FAILURE,
    error: error,
  };
};
const successAction = () => {
  return {
    type: COMMAND_SUCCESS,
  };
};

const turnOn = (state: any, dispatch: any) => {
  dispatch(startAction());
  setCommand(state.discovery.ip, 'SystemON', 'on')
    .then((response) => {
      console.log(response);
      dispatch(successAction());
    })
    .catch((err) => dispatch(failureAction(err)));
};

const turnOff = (state: any, dispatch: any) => {
  dispatch(startAction());
  setCommand(state.discovery.ip, 'SystemON', 'off')
    .then((response) => {
      console.log(response);
      dispatch(successAction());
    })
    .catch((err) => dispatch(failureAction(err)));
};

const actions = (state: any, dispatch: any) => ({
  turnOn: () => turnOn(state, dispatch),
  turnOff: () => turnOff(state, dispatch),
});

export default actions;
