import React, { memo, useEffect, useState } from "react";
import { IUser } from "../../types/index";
import { connect } from "react-redux";
import {
  getUsersActionAsync,
  setProjectsActionAsync,
} from "../../pages/project-page/store/actionCreator";

type IProps = {
  users: IUser[];
  getUsers: () => void;
  setProjects: (params: object) => void;
};

const Search = memo(function Seacrh(props: IProps) {
  const [projectName, setProjectName] = useState("");
  const [personId, setPersonId] = useState(-1);
  const { users, getUsers, setProjects } = props;
  //网络请求获取数据Users数据
  useEffect(() => {
    //组件加载完毕，获取users数据并展示
    getUsers();
  }, []);

  //每次下拉框值改变或者输入框值变化，都更新projects
  useEffect(() => {
    setProjects({
      personId,
      name: projectName,
    });
  }, [personId, projectName]);

  // 事件响应函数分开写，e的类型是React.FormEvent<HTMLInputElement>
  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    //不能直接用e.target.value，因为e.targetevent.target 这是一个 HTMLElement 哪个是所有HTML元素的父级，但不保证具有属性值。 TypeScript检测到此并抛出错误。将 event.target
    //转换为相应的HTML元素，以确保它是 HTMLInputElement 哪个值属性：
    setProjectName((e.target as HTMLInputElement).value);
  };

  return (
    <div>
      <input placeholder="项目名" onChange={handleChange} value={projectName} />
      <select
        onChange={(e) => {
          setPersonId(parseInt((e.target as HTMLSelectElement).value));
        }}
        value={personId}
      >
        <option value={-1}>负责人</option>
        {users?.map((item) => {
          return (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
});

export default connect(
  (state: any) => ({
    users: state.projectInfo.users,
  }),
  (dispatch) => ({
    getUsers: () => dispatch(getUsersActionAsync()),
    setProjects: (params: object) => dispatch(setProjectsActionAsync(params)),
  })
)(Search);
