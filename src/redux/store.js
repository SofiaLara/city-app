import { createStore } from "redux";

const initialState = {
  value: 0,
};

//Reducer
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_VALUE":
      return {
        ...state,
        value: action.payload + 1,
      };
    case "DECREMENT_VALUE":
      return {
        ...state,
        value: action.payload - 1,
      };
    default:
      return { ...state };
  }
};

//Actions
export const incrementValueAction = (value) => {
  return {
    type: "INCREMENT_VALUE",
    payload: value,
  };
};

export const decrementValueAction = (value) => {
  return {
    type: "DECREMENT_VALUE",
    payload: value,
  };
};

//we create the store that takes the reducer as parameter
let store = createStore(reducer);

export default store;