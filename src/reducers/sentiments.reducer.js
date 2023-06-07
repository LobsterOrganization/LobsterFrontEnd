import { GET_SENTIMENTS} from ".././actions/sentiments.actions.js";

const initialState = {};

export default function sentimentsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SENTIMENTS:
      console.log("EHHHH OHHH SARAH REGARDE ICI", action.payload)
      return action.payload;
    default:
      return state;
  }
};
