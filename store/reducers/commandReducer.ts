import {
  COMMAND_START,
  COMMAND_FAILURE,
  COMMAND_SUCCESS,
} from '../actions/commandActions';

export interface CommandState {
  loading: boolean;
  error?: string;
}

export const initialState: { command: CommandState } = {
  command: {
    loading: false,
  },
};

const commandReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case COMMAND_START:
      return {
        ...state,
        command: {
          ...state.command,
          loading: true,
          error: undefined,
        },
      };
    case COMMAND_FAILURE:
      return {
        ...state,
        command: {
          ...state.command,
          loading: false,
          error: action.error,
        },
      };
    case COMMAND_SUCCESS:
      return {
        ...state,
        command: {
          ...state.command,
          loading: false,
        },
      };
    default:
      return state;
  }
};

export default commandReducer;
