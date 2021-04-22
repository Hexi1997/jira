import { put } from "@redux-saga/core/effects";
import { myFectch } from "../../../network";
import { PROJECTS_API, USERS_API } from "../../../network/api";
import { setProjectsAction, setUsersAction } from "./actionCreator";
import { IProject, IUser } from "../../../types/index";
import { IAction } from "../../../types/redux-types";

export function* getUsers() {
  const res = yield myFectch(USERS_API);
  yield put(setUsersAction(res as IUser[]));
}

export function* setProjects(action: IAction) {
  const { personId, name } = action.payload as any;
  console.log(personId, name);
  let params: {
    personId?: number;
    name_like?: string;
  } = {};
  if (personId >= 0) {
    params.personId = personId;
  }
  if (name) {
    params.name_like = name;
  }
  //发送网络请求
  const res = yield myFectch(PROJECTS_API, "GET", params);
  //更新到redux
  yield put(setProjectsAction(res as IProject[]));
}
