import { GET_NODES } from "../actions/actors.actions";

const initialState = {};

export default function actorsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NODES:
      return action.payload;
    default:
      return state;
  }
};
