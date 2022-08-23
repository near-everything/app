import React from "react";
import { PulseLoader } from "react-spinners";
import Layout from "../../containers/Layout";
import ModuleContainer from "../../containers/ModuleContainer";
import { useInventory } from "../../features/marketplace/marketplaceApi";

function Marketplace() {
  const { data, isLoading, isError } = useInventory();

  return (
    <>
      {isLoading || isError ? (
        <>
          <div className="flex w-full justify-center my-4">
            <PulseLoader
              size={10}
              color={"#e5e7eb"}
              loading={true}
              speedMultiplier={1.5}
            />
          </div>
        </>
      ) : (
        <>{data && data.map((it) => <div key={it.id}>{JSON.stringify(it)}</div>)}</>
      )}
    </>
  );
}

Marketplace.getLayout = function getLayout(page) {
  return (
    <Layout>
      <ModuleContainer moduleName={"marketplace"} moduleColor={"black"}>
        {page}
      </ModuleContainer>
    </Layout>
  );
};
export default Marketplace;
