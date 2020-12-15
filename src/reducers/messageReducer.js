import * as actionTypes from "../actions/actionTypes";

const initialState = {
  messages: [],
  message: "",
};

export default function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SEND_MESSAGE:
      return { ...state, messages: [...state.messages,action.message] };
    default:
      return state;
  }
}