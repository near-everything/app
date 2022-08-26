import React from "react";
import { PulseLoader } from "react-spinners";
import Header from "../../components/Header";
import Layout from "../../containers/Layout";
import PageContentContainer from "../../containers/PageContentContainer";
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
        <>
          <Header title="marketplace" />
          <PageContentContainer>
            {data &&
              data.map((it) => <div key={it.id}>{JSON.stringify(it)}</div>)}
          </PageContentContainer>
        </>
      )}
    </>
  );
}

Marketplace.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Marketplace;
