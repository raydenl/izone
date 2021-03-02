import {
  DISCOVERY_START,
  DISCOVERY_FAILURE,
  DISCOVERY_SUCCESS,
} from '../actions/discoveryActions';

export interface DiscoveryState {
  loading: boolean;
  error?: string;
  ip?: string;
}

export const initialState: { discovery: DiscoveryState } = {
  discovery: {
    loading: false,
  },
};

const discoveryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case DISCOVERY_START:
      return {
        ...state,
        discovery: {
          ...state.discovery,
          loading: true,
          error: undefined,
        },
      };
    case DISCOVERY_FAILURE:
      return {
        ...state,
        discovery: {
          ...state.discovery,
          loading: false,
          error: action.error,
        },
      };
    case DISCOVERY_SUCCESS:
      const ip = action.payload
        .split(',')
        .filter((item: String) => item.startsWith('IP_'))
        .map((item: String) => item.slice(3))
        .shift();

      return {
        ...state,
        discovery: {
          ...state.discovery,
          loading: false,
          ip: ip,
        },
      };
    default:
      return state;
  }
};

export default discoveryReducer;
