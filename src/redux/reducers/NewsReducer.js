import { GET_NEWS } from "../actions/NewsActions";


const initialState = {
  items: [],
  isFetching: true,
};

//reducer
export default function NewsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        items: action.payload.items
      }
    default:
      return state;
  }
}

