import { GET_SUB_COMMENT } from "../actions/SubCommentActions";

const initialState = {
  subComment: [],
  isFetching: false,
};

//reducer
export default function SubCommentReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SUB_COMMENT:
      return {
        ...state,
        subComment: action.payload
      }
    default:
      return state;
  }
}