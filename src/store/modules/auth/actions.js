import * as types from '../types';

export function registerRequest(someData) {
  return {
    type: types.REGISTER_REQUEST,
    exampleData: someData
  };
}

export function registerSuccess(someData) {
  return {
    type: types.REGISTER_SUCCESS,
    exampleData: someData
  };
}

export function logInRequest(someData) {
  return {
    type: types.LOGIN_REQUEST,
    exampleData: someData
  };
}
