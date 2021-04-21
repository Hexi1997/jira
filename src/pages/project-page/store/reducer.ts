import { SETPROJECTNAME, SETPROJECTS, SETUSERID, SETUSERS } from "./constants";
import { IAction } from "../../../types/redux-types";

const initState = {
  users: null,
  projects: null,
};

export const reducer = (state = initState, action: IAction) => {
  switch (action.type) {
    case SETUSERID:
      return { ...state, userId: action.payload };
    case SETUSERS:
      return { ...state, users: action.payload };
    case SETPROJECTS:
      return { ...state, projects: action.payload };
    case SETPROJECTNAME:
      return { ...state, projectName: action.payload };
    default:
      return state;
  }
};
