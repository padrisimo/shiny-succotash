import { createStore } from "redux";

const reducer = (state, action) => {
  if (action.type === "INC") {
    return state + 1;
  }
  return state;
}

const store = createStore(reducer, 0);

store.subscribe(() => {
  console.log("OMG! the store has changed", store.getState())
} )

store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "INC", payload: 1})