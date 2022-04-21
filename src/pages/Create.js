import React from "react";

import PageTitle from "../components/Typography/PageTitle";
import Insert from "../components/Create/Insert";
import List from "../components/Create/List";

function Create() {

  return (
    <>
      <PageTitle>Create</PageTitle>
      <div className="flex flex-col">
        <div>
          <Insert />
          <List />
        </div>
      </div>
    </>
  );
}

export default Create;
