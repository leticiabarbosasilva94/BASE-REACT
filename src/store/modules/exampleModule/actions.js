import * as types from './types';

export function exampleActionRequest(someData) {
  return {
    type: types.EXAMPLE_TYPE_REQUEST,
    exampleData: someData
  };
}

export function exampleActionSuccess(someData) {
  return {
    type: types.EXAMPLE_TYPE_SUCCESS,
    exampleData: someData
  };
}
