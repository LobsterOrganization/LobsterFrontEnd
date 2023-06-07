import { GET_TRENDS } from ".././actions/trends.actions.js";

const initialState = {};

export default function trendsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TRENDS:
      return action.payload;
    default:
      return state;
  }
};
