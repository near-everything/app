import { useTheme } from "next-themes";
import React from "react";
import Layout from "../../containers/Layout";
import ModuleContainer from "../../containers/ModuleContainer";

function Settings() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="rounded-md focus:outline-none focus:shadow-outline-green"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <span>Sun</span> : <span>Moon</span>}
      </button>
    </>
  );
}

Settings.getLayout = function getLayout(page) {
  return (
    <Layout>
      <ModuleContainer moduleName={"settings"} moduleColor={"black"}>
        {page}
      </ModuleContainer>
    </Layout>
  );
};
export default Settings;
