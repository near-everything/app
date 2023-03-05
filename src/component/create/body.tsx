import { useEffect, useRef, useState } from "react";

type Props = {
  list: string[];
  bulk: boolean;
};

function Body({ list, bulk }: Props) {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  const [minWidth, setMinWidth] = useState(0);
  const [minlist, setMinlist] = useState(0);
  useEffect(() => {
    if (list.length * 72 < windowSize.current[0]) {
      setMinWidth(0);
      setMinlist(list.length);
    } else {
      const wi = (list.length - minlist) * 72;
      setMinWidth(wi);
    }
  }, [list]);

  return (
    <div className="mb-[12px]  w-full overflow-auto">
      <p className=" text-Body14  mt-[8px] text-center mb-[4px]">
        {bulk
          ? "take one photo for each thing"
          : "take multiple photos of one thing"}
      </p>
      <div
        className="  "
        style={{ minWidth: windowSize.current[0] + minWidth }}
      >
        <div className=" flex items-center justify-start pl-[4px] gap-2">
          {list.length !== 0 ? (
            list.map((item, id) => (
              <div className="w-[72px] h-[92px] rounded-[12px]" key={id}>
                <img
                  src={item}
                  alt="Screenshot"
                  className=" w-full h-full rounded-[12px]"
                />
              </div>
            ))
          ) : (
            <>
              <div className=" border border-gray-30 border-dashed w-[72px] h-[92px] rounded-[12px]"></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Body;
