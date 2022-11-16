import { SET_COMMENTS, SET_SUB_COMMENTS } from "../actions/CommentsActions";

const initialState = {
  comments: [],
  subComments: [],
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
    case SET_SUB_COMMENTS: {

      const ids = state?.map(item => item.id);
      console.log('red 1', ids)
      const newComments = action.payload.filter(item => !ids.includes(item.id));
      console.log('red 2',newComments)

      if(newComments.length){
          return state.concat(newComments)
      }

      return {
        ...state,
        subComments: action.subComments
      };
    }
    default:
      return state;
  }
};