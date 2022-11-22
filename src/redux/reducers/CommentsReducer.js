import { SET_COMMENTS, SET_SUB_COMMENTS } from "../actions/CommentsActions";

const initialState = {
  comments: [],
  // subComments: [],
  isFetching: false,
};

export default function CommentsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_COMMENTS: {
      return {
        ...state,
        comments: action.comments,
      }
    }
    // case SET_SUB_COMMENTS: {
    //   return {
    //     ...state,
    //     subComments: action.subComments
    //   };
    // }
    default:
      return state;
  }
};