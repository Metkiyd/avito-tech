import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from "redux-thunk";
import NewsReducer from "./reducers/NewsReducer";
import StoryReducer from "./reducers/StoryReducer";

const rootReducer = combineReducers({
		News: NewsReducer,
		Story: StoryReducer,

});

const store = createStore(
	rootReducer, 
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;