import React, { memo } from "react";
import { IProject } from "../../types/index";
import { connect } from "react-redux";

type IProps = {
  projects: IProject[];
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
              <td>{item.personId}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
});

const mapStateToProps = (state: any) => ({
  projects: state.projectInfo.projects,
});

export default connect(mapStateToProps)(ProjectList);
