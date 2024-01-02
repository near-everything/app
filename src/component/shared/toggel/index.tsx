import React from "react";

type Props = {
  text: string;
  bulk: boolean;
  setBulk: (bulk: boolean) => void;
};

function Index({ text, setBulk, bulk }: Props) {
  return (
    <div className="flex items-center  justify-center">
      <div className="text-title18 text-white mr-[8px]">{text}</div>
      <label htmlFor="toggleB" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            id="toggleB"
            className="sr-only"
            onChange={() => setBulk(!bulk)}
          />
          <div className="block bg-black80 w-14 h-8 rounded-full"></div>
          <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
        </div>
      </label>
    </div>
  );
}

export default Index;
