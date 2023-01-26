import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "component/shared/input/labelactioninput";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MainBtn } from "component/shared/btn";
type Inputs = {
  email: string;
};
const schema = yup.object({
  email: yup.string().email().required(),
});
type Props = {
  setStep: (step: boolean) => void;
  setEmail: (email: string) => void;
};

function Form({ setStep, setEmail }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setStep(true);
    setEmail(data?.email);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[96%] mx-auto mt-[20px]"
    >
      <Input
        name="email"
        type="text"
        placeholder={""}
        label={"enter phone or email"}
        error={errors.email?.message}
        autoFocus
        register={register}
        autoComplete="nope"
        className="rounded-[16px] pt-[20px] pb-[23px]"
        wrapperClass="text-start"
      />
      <div className=" text-center">
        <MainBtn
          type="submit"
          disabled={false}
          size="L"
          className=" mt-[48px] w-full mx-auto"
        >
          <p>connect to everything</p>
        </MainBtn>
      </div>
    </form>
  );
}

export default Form;
