import { combineReducers } from "redux";
import user from "./user.reducers";
import { reducer as formReducer } from "redux-form";

const appReducer = combineReducers({
  user,
  form: formReducer
});

// Thanks Dan! https://stackoverflow.com/a/35641992/873073
// const rootReducer = (state, action) => {
//   if (action.type === "LOGOUT") {
//     state = undefined;
//   }

//   return appReducer(state, action);
// };

export default appReducer;
