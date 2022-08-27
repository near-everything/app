import React from "react";

function PageContentContainer({ children }) {
  return <div className="flex flex-1 flex-col container mx-auto">{children}</div>;
}

export default PageContentContainer;
