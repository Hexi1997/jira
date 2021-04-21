import React, { memo } from "react";
import ProjectList from "../../components/project-list";
import Search from "../../components/search";

export default memo(function ProjectPage() {
  return (
    <div>
      <Search />
      <ProjectList />
    </div>
  );
});
