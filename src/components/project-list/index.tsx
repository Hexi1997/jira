import React, { memo } from "react";
import { IProject, IUser } from "../../types/index";
import { connect } from "react-redux";

type IProps = {
  projects: IProject[];
  users: IUser[];
};

const ProjectList = memo(function index(props: IProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {props.projects?.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                {props.users.filter((i) => i.id === item.personId)[0].name}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
});

const mapStateToProps = (state: any) => ({
  projects: state.projectInfo.projects,
  users: state.projectInfo.users,
});

export default connect(mapStateToProps)(ProjectList);
