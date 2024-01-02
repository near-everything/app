import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "component/shared/input/labelactioninput";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MainBtn, Iconsecondarywhite } from "component/shared/btn";
import { ReactComponent as Arrow } from "assets/icon/arrowleft.svg";

type Inputs = {
  code: string;
};
const schema = yup.object({
  code: yup
    .string()
    .required()
    .min(6, "Must be exactly 6 digits")
    .max(6, "Must be exactly 6 digits"),
});
type Props = {
  setStep: (step: boolean) => void;
  setFinal: (final: boolean) => void;
};

function Index({ setStep, setFinal }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("data", data);
    setFinal(true);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[96%] mx-auto mt-[20px]"
    >
      <div className=" relative">
        <Input
          name="code"
          type="number"
          placeholder={""}
          label={"enter 6-digit code"}
          error={errors.code?.message}
          autoFocus
          register={register}
          autoComplete="nope"
          className="rounded-[16px] pt-[20px] pb-[23px]"
          wrapperClass="text-start"
        />
        <p className=" absolute top-[32%] right-[21.4px]">resend</p>
      </div>

      <div className=" flex items-center justify-between text-center mt-[48px]">
        <div>
          <Iconsecondarywhite
            disabled={false}
            type="button"
            className=" p-[15px]"
            onClick={() => setStep(false)}
          >
            <Arrow />
          </Iconsecondarywhite>
        </div>
        <MainBtn type="submit" disabled={false} size="L" className="  w-[80%]">
          <p>verify</p>
        </MainBtn>
      </div>
    </form>
  );
}

export default Index;
