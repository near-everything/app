import { useTheme } from "next-themes";
import React from "react";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../../containers/Layout";
import ModuleContainer from "../../containers/ModuleContainer";

function Settings() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <FontAwesomeIcon
            className="cursor-pointer"
            size="xl"
            icon={faSun}
          />
        ) : (
          <FontAwesomeIcon className="cursor-pointer" size="xl" icon={faMoon} />
        )}
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
