import React, { useEffect, useState } from "react";
import { AnimateSharedLayout, motion, Transition } from "framer-motion";
import {
  Connectcircle,
  Connectemptycircle,
  Connectmulticircle,
} from "component/login/animations";
import { useNavigate } from "react-router-dom";

type Props = { url: string | null; template: string };
const transition: Transition = {
  type: "spring",
  stiffness: 500,
  damping: 30,
  duration: 1,
};

function Index({ url, template }: Props) {
  const navigate = useNavigate();
  const [data, setData] = useState({
    url: url,
    temp: template,
  });
  useEffect(() => {
    function pollDOM() {
      navigate("/finish", { replace: true, state: { data: data } });
    }

    const interval = setInterval(pollDOM, 6000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className=" flex flex-col">
        <div className=" absolute top-[50%]  left-[50%] -translate-x-center -translate-y-center">
          <pre className="text-white text-center  text-Body16 ">
            {"wait a sec, we’re saving" + "\n" + "everything"}
          </pre>
          <AnimateSharedLayout>
            <motion.ul className=" flex flex-col" transition={transition}>
              <div className=" mt-[25px] flex flex-col items-center justify-center">
                <Connectcircle />
                <div className=" mt-[12px]">
                  <Connectemptycircle />
                </div>
                <div className=" mt-[12px]">
                  <Connectmulticircle />
                </div>
              </div>
            </motion.ul>
          </AnimateSharedLayout>
        </div>
      </div>
    </>
  );
}

export default Index;
