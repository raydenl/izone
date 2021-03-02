import { discoverBridge as udpCall } from '../../utils/udpUtils';

export const DISCOVERY_START = 'DISCOVERY_START';
export const DISCOVERY_FAILURE = 'DISCOVERY_FAILURE';
export const DISCOVERY_SUCCESS = 'DISCOVERY_SUCCESS';

const startAction = () => {
  return {
    type: DISCOVERY_START,
  };
};
const failureAction = (error: string) => {
  return {
    type: DISCOVERY_FAILURE,
    error: error,
  };
};
const successAction = (payload: any) => {
  return {
    type: DISCOVERY_SUCCESS,
    payload: payload,
  };
};

const discoverBridge = (dispatch: any) => {
  dispatch(startAction());
  udpCall
    .then((data) => {
      dispatch(successAction(data));
    })
    .catch((err) => dispatch(failureAction(err)));
};

const actions = (dispatch: any) => ({
  discoverBridge: () => discoverBridge(dispatch),
});

export default actions;
