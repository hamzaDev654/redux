import { createStore } from "redux";

const initalStates = { counter: 0, showCounter: true };
const counterReducer = (state = initalStates, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }

  if (action.type === "increase") {
    return {
      ...state,
      counter: state.counter + action.amount,
    };
  }
  if (action.type === "decrement") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }

  if (action.type === "toggle") {
    return {
      ...state,
      showCounter: !state.showCounter,
    };
  }

  return state;
};
const store = createStore(counterReducer);

export default store;
