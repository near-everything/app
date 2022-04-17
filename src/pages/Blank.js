import React, { useState } from "react";

import { useClient } from "../context/DatabaseContext";
import PageTitle from "../components/Typography/PageTitle";

function Blank() {
  const [input, setInput] = useState("");
  const client = useClient();

  const insertListing = async () => {
    
  };

  return (
    <>
      <PageTitle>Blank</PageTitle>
      <form className="flex flex-col">
        <input
          type="text"
          className="form-input px-4 py-3 rounded my-2"
          placeholder="Test"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={insertListing}
        >
          Button
        </button>
      </form>
    </>
  );
}

export default Blank;
