import { DISCOVERY_START, DISCOVERY_FAILURE, DISCOVERY_SUCCESS } from '../actions/discoveryActions';

export const initialState = {
    discovery: {
        loading: false,
        error: '',
        payload: null
    }
};

const discoveryReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case DISCOVERY_START:
            return {
                ...state, discovery: {
                    ...state.discovery, loading: true, error: ''
                }
            };
        case DISCOVERY_FAILURE:
            return {
                ...state, discovery: {
                    ...state.discovery, loading: false, error: action.error
                }
            };
        case DISCOVERY_SUCCESS:
            return {
                ...state, discovery: {
                    ...state.discovery, loading: false, payload: action.payload
                }
            };
        default:
            return state;
    }
};

export default discoveryReducer;
