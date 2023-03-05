import { useEffect, useRef, useState } from "react";
import { ReactComponent as Close } from "assets/icon/close.svg";

type Props = {
  list: string[];
  bulk: boolean;
  setList: (list: string[]) => void;
};

function Body({ list, bulk, setList }: Props) {
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

  const removeImage = (id: number) => {
    setList(list.filter((value: string, i: number) => i !== id));
  };

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
              <div
                className="w-[72px] h-[92px] rounded-[12px] relative"
                key={id}
              >
                <div className="absolute top-1 right-1">
                  <div
                    className="bg-white rounded-full h-[20px] w-[20px] cursor-pointer justify-center items-center flex"
                    onClick={() => removeImage(id)}
                  >
                    <Close className="text-red" />
                  </div>
                </div>
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
