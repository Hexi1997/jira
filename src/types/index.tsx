/**
 * 用户接口
 */
export interface IUser {
  name: string;
  id: number;
}
/**
 * 项目接口
 */
export interface IProject {
  name: string;
  personId: number;
  organization: string;
  created: number;
  id: number;
}
