import { GET_SUB_COMMENT } from "../actions/SubCommentActions";

const initialState = {
  subComments: [],
  isFetching: false,
};

//reducer
export default function SubCommentReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SUB_COMMENT:
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
    default:
      return state;
  }
}
