import React from "react";
import { PulseLoader } from "react-spinners";
import ThingCard from "../../../components/Cards/ThingCard";
import Layout from "../../../containers/Layout";
import ModuleContainer from "../../../containers/ModuleContainer";
import { useAuth } from "../../../context/AuthContext";
import { useThingsByOwner } from "../../../features/organize/organizeApi";

function Things() {
  const { user } = useAuth();
  const { data, isLoading, isError } = useThingsByOwner(user && user.uid, {
    enabled: !!user,
  });

  return (
    <>
      {isLoading || isError ? (
        <div className="flex justify-center items-center h-full">
          <PulseLoader
            size={10}
            color={"#e5e7eb"}
            loading={isLoading}
            speedMultiplier={1.5}
          />
        </div>
      ) : (
        <div className="grid gap-4">
          {data?.map((it) => (
            <div key={it.node.id}>
              <ThingCard thing={it.node} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

Things.getLayout = function getLayout(page) {
  return (
    <Layout>
      <ModuleContainer moduleName={"my things"} moduleColor={"green"}>
        {page}
      </ModuleContainer>
    </Layout>
  );
};
export default Things;
