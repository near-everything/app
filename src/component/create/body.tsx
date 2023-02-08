import React, { useCallback, useRef, useState, useEffect } from "react";

type Props = {
  list: string[];
};

function Body({ list }: Props) {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  return (
    <div className="mb-[12px]">
      <p className=" text-Body14  mt-[8px] text-center mb-[4px]">
        take as many photos of one thing as you wish
      </p>
      <div
        className=" flex items-center justify-start pl-[4px] overflow-x-scroll"
        style={{ minWidth: windowSize.current[0] }}
      >
        {list.length !== 0 ? (
          list.map((item, id) => (
            <div
              className=" border border-gray-30 border-dashed w-[72px] h-[92px] rounded-[12px] mr-[4px] "
              key={id}
            >
              <img
                src={item}
                alt="Screenshot"
                className=" w-full h-full rounded-[12px]"
                // style={{ filter: `brightness(${brightnes})` }}
              />
            </div>
          ))
        ) : (
          <div className=" border border-gray-30 border-dashed w-[72px] h-[92px] rounded-[12px]"></div>
        )}
      </div>
    </div>
  );
}

export default Body;
