import { combineReducers } from "redux";

const resultReducer = (results = [], action) => {
  if (action.type === "CREATE_MATCH") {
    return action.payload;
  }
  return results;
};

export default combineReducers({ results: resultReducer });
