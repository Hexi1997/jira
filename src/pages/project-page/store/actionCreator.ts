import { IUser } from "../../../types";
import {
  SETUSERS,
  GETUSERSASYNC,
  SETPROJECTS,
  SETPROJECTSASYNC,
} from "./constants";
import { IProject } from "../../../types/index";
/**
 * 同步action 设置显示的用户数组
 * @param users
 */
export const setUsersAction = (users: Array<IUser>) => ({
  type: SETUSERS,
  payload: users,
});
/**
 * 异步action 异步获取显示的用户数组
 * @param users
 */
export const getUsersActionAsync = () => ({
  type: GETUSERSASYNC,
});

/**
 * action 设置项目数组
 * @param list
 */
export const setProjectsAction = (list: IProject[]) => ({
  type: SETPROJECTS,
  payload: list,
});
/**
 * 异步action 设置项目数组
 * @param params
 */
export const setProjectsActionAsync = (params: object) => {
  return {
    type: SETPROJECTSASYNC,
    payload: params,
  };
};
