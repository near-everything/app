import React from "react";

function PageContentContainer({ children }) {
  return <div className="flex flex-col container mx-auto px-4 pt-4">{children}</div>;
}

export default PageContentContainer;
