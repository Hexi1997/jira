import { takeEvery, put, all } from "redux-saga/effects";
import { myFectch } from "../network";
import { PROJECTS_API, USERS_API } from "../network/api";
import {
  setProjectsAction,
  setUsersAction,
} from "../pages/project-page/store/actionCreator";
import {
  GETUSERSASYNC,
  SETPROJECTSASYNC,
} from "../pages/project-page/store/constants";
import { IUser } from "../types";
import { IAction } from "../types/redux-types";
import { IProject } from "../types/index";

function* getUsers() {
  const res = yield myFectch(USERS_API);
  yield put(setUsersAction(res as IUser[]));
}

function* setProjects(action: IAction) {
  const { personId, name } = action.payload as any;
  console.log(personId, name);
  let params: {
    personId?: number;
    name?: string;
  } = {};
  if (personId >= 0) {
    params.personId = personId;
  }
  if (name) {
    params.name = name;
  }
  //发送网络请求
  const res = yield myFectch(PROJECTS_API, "GET", params);
  //更新到redux
  yield put(setProjectsAction(res as IProject[]));
}

function* saga() {
  //第一个参数是要监听的action的type
  //第二个参数是生成器回调，定义用户如果dispatch该action该如何处理
  //takeEvery 和 takeLateset的区别
  //如果短时间内发送了多个action,在执行当前action时如果又来一个同名action
  //那么takeEvery会逐个执行，takeLateset会取消当前action，执行下一个
  yield all([
    //如果要监听多个action，继续写takeEvery即可
    takeEvery(GETUSERSASYNC, getUsers),
    takeEvery(SETPROJECTSASYNC, setProjects),
    // takeEvery(CHANGEIMAGESAGA,getImageData)
  ]);
}

export default saga;
