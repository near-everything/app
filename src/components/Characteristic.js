import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import React from "react";
import { graphqlClient } from "../app/api";

function Characteristic({ char }) {
  const {
    data: attr,
    isLoading: attributeIsLoading,
    isError: attributeIsError,
  } = useQuery(["attributeById", char.attributeId], async () => {
    const { attribute } = await graphqlClient.request(
      gql`
        query attributeById($attributeId: Int!) {
          attribute(id: $attributeId) {
            name
          }
        }
      `,
      { attributeId: char.attributeId }
    );
    return attribute;
  });
  const {
    data: opt,
    isLoading: optionIsLoading,
    isError: optionIsError,
  } = useQuery(["optionById", char.optionId], async () => {
    const { option } = await graphqlClient.request(
      gql`
        query optionById($optionId: Int!) {
          option(id: $optionId) {
            value
          }
        }
      `,
      { optionId: char.optionId }
    );
    return option;
  });

  return (
    <>
      <div className="badge badge-outline">
        {attributeIsLoading
          ? "Loading..."
          : attributeIsError
            ? "Error"
            : `${attr.name}`}
        {": "}
        {optionIsLoading
          ? "Loading..."
          : optionIsError
            ? "Error"
            : `${opt.value}`}
      </div>
    </>
  );
}

export default Characteristic;
