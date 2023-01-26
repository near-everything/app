import React, { useState } from "react";
import { ReactComponent as Mazecircle } from "assets/icon/mazecircle.svg";
import Form from "./form";
import Registercode from "./registercode";
import Connect from "./connect";

type Props = {
  setInfo: (info: boolean) => void;
};

function Index({ setInfo }: Props) {
  const [step, setStep] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [final, setFinal] = useState(false);

  return final ? (
    <Connect />
  ) : (
    <div className=" pt-[8px] bg-black w-full h-full">
      <div className=" bg-[#979797] rounded-t-[9.61538px] h-[9.62px] w-[90%] mx-auto" />
      <div className=" bg-black80  rounded-t-[9.61538px] h-[9.62px] w-full " />
      <div className=" bg-black80 flex items-center justify-center relative">
        <p className=" text-title17 text-white pt-[10.58px] pb-[8.65px] text-center shadow-header backdrop-blur-header">
          connect.everyting
        </p>
        <p
          className=" absolute top-[50%] -translate-y-center right-[9.65px] cursor-pointer text-blue text-Body17"
          onClick={() => setInfo(false)}
        >
          Close
        </p>
      </div>
      <div className=" flex items-center justify-center mt-[40px]">
        <div className="w-[20px] h-[20px] rounded-[50%] bg-white mr-[8px]" />
        <div className="w-[20px] h-[20px] rounded-[50%] bg-transparent border-solid border-white border-[3px] mr-[8px]" />
        <Mazecircle className=" text-white" />
      </div>
      <div className=" mt-[31px] flex items-center justify-center text-center text-title24">
        connect to everything
      </div>
      <div className=" mt-[8px] flex items-center justify-center text-center text-Body14 text-gray-40 w-[80%] mx-auto">
        {step
          ? "we’ve sent a code to"
          : "we will send you a one-time-code to verify your identity"}
      </div>
      {step && (
        <div className="text-Body14 flex items-center justify-center text-center">
          {email}{" "}
        </div>
      )}
      {step ? (
        <Registercode setStep={setStep} setFinal={setFinal} />
      ) : (
        <Form setStep={setStep} setEmail={setEmail} />
      )}
    </div>
  );
}

export default Index;
