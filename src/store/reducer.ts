import { combineReducers } from "redux";
import projectReducer from "../pages/project-page/store";

const reducer = combineReducers({
  projectInfo: projectReducer, //传递方法即可，combineReducers方法会自动调用
});

export default reducer;
