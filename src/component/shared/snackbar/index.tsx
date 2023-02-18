import React, { useEffect, useState } from "react";
import { ReactComponent as Tickcicle } from "assets/icon/tickcicle.svg";

type Props = {
  message: string;
  success: boolean;
};

function Index({ message, success }: Props) {
  const [snack, setSnack] = useState(true);
  useEffect(() => {
    setSnack(true);
    function pollDOM() {
      setSnack(false);
    }

    const interval = setInterval(pollDOM, 3000);

    return () => clearInterval(interval);
  }, []);
  return snack ? (
    <div
      className={
        success
          ? "bg-[#184D2EB2] text-caption13 rounded-[20px] backdrop-blur-[20px] pt-[8px] pr-[16px] pb-[8px] pl-[8px] absolute top-[40px] right-0 left-0 max-w-[90%] mx-auto flex items-center justify-start"
          : ""
      }
    >
      <Tickcicle className=" mr-[8px]" />
      {message}
    </div>
  ) : null;
}

export default Index;
