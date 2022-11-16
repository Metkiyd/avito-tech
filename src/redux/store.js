import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import NewsReducer from "./reducers/NewsReducer";
import CommentsReducer from "./reducers/CommentsReducer";

const rootReducer = combineReducers({
  News: NewsReducer,
  Comments: CommentsReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
