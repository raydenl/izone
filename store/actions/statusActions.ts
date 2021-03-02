import { getSystemSettings } from '../../utils/apiUtils';

export const STATUS_START = 'STATUS_START';
export const STATUS_FAILURE = 'STATUS_FAILURE';
export const STATUS_SUCCESS = 'STATUS_SUCCESS';

const startAction = () => {
  return {
    type: STATUS_START,
  };
};
const failureAction = (error: string) => {
  return {
    type: STATUS_FAILURE,
    error: error,
  };
};
const successAction = (payload: any) => {
  return {
    type: STATUS_SUCCESS,
    payload: payload,
  };
};

const getStatus = (state: any, dispatch: any) => {
  dispatch(startAction());
  getSystemSettings(state.discovery.ip)
    .then((response) => {
      dispatch(successAction(response.data));
    })
    .catch((err) => dispatch(failureAction(err)));
};

const actions = (state: any, dispatch: any) => ({
  getStatus: () => getStatus(state, dispatch),
});

export default actions;
