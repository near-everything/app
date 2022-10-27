import React from "react";
import Header from "../../components/Header";
import MarketplaceGrid from "../../components/MarketplaceGrid";
import Layout from "../../containers/Layout";
import PageContentContainer from "../../containers/PageContentContainer";

function Marketplace() {
  return (
    <>
      <Header title="marketplace" />
      <PageContentContainer>
        <MarketplaceGrid />
      </PageContentContainer>
    </>
  );
}

Marketplace.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Marketplace;
