import { SET_NEWS, SET_STORY } from "../actions/NewsActions";;

const initialState = {
  news: [],
  story: [],
  isFetching: false,
};

export default function NewsReducer(state = initialState, action) {
  switch (action.type) {

    case SET_NEWS: {
      return {
        ...state,
        news: action.news,
      };
    }
    case SET_STORY: {
      return {
        ...state,
        story: action.story,
      };
    }

    default:
      return state;
  }
}