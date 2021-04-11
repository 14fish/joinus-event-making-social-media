import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { eventReducer, getEvents } from "./event";
import { categoryReducer } from "./categories";
import { activityReducer } from "./activity";
import { profileReducer } from "./profile";
import { authReducer } from "./auth";
import { commentReducer } from "./comment";

const rootReducer = combineReducers({
  events: eventReducer,
  categories: categoryReducer,
  activities: activityReducer,
  profile: profileReducer,
  auth: authReducer,
  comment: commentReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
