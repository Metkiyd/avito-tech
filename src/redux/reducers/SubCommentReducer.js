import { GET_SUB_COMMENT } from "../actions/SubCommentActions";

const initialState = {
  subComment: [],
  isFetching: false,
};

//reducer
export default function SubCommentReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SUB_COMMENT:
      //need2change
      const ids = state.map(item => item.id);
      console.log(ids)
      const newComments = action.payload.filter(item => !ids.includes(item.id));
      console.log(newComments)

      if(newComments.length){
          return state.concat(newComments)
      }

      return {
        ...state,
        subComment: action.payload
      }
    default:
      return state;
  }
}