export const DISCOVERY_START = 'DISCOVERY_START';
export const DISCOVERY_FAILURE = 'DISCOVERY_FAILURE';
export const DISCOVERY_SUCCESS = 'DISCOVERY_SUCCESS';

const startAction = () => {
    return {
        type: DISCOVERY_START
    };
};
const failureAction = (error: string) => {
    return {
        type: DISCOVERY_FAILURE,
        error: error
    };
};
const successAction = (payload: any) => {
    return {
        type: DISCOVERY_SUCCESS,
        payload: payload
    };
};

const actions = (dispatch: any) => ({
    startDiscovery: () => dispatch(startAction()),
    discoveryFailure: (error: string) => dispatch(failureAction(error)),
    discoverySuccess: (payload: any) => dispatch(successAction(payload))
});

export default actions;