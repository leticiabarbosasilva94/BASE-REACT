import * as types from '../types';

const initialState = {};

// action is not being used
// eslint-disable-next-line no-unused-vars
export default function exampleReducer(state = initialState, action) {
  switch (action.type) {
    case types.EXAMPLE_TYPE_REQUEST: {
      // Do what you need
      return state;
    }

    case types.EXAMPLE_TYPE_SUCCESS: {
      // Do what you need
      return state;
    }

    case types.PERSIST_PERSIST: {
      return state;
    }

    case types.PERSIST_REHYDRATE: {
      return state;
    }

    default: {
      return state;
    }
  }
}
