import { takeEvery, all } from "redux-saga/effects";
import {
  GETUSERSASYNC,
  SETPROJECTSASYNC,
} from "../pages/project-page/store/constants";
import { getUsers, setProjects } from "../pages/project-page/store/saga";

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
