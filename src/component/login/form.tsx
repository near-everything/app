import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "component/shared/input/labelactioninput";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MainBtn, Iconsecondarywhite } from "component/shared/btn";
import { ReactComponent as Arrow } from "assets/icon/arrowleft.svg";
import { motion } from "framer-motion";

type Inputs = {
  email: string;
  code: string;
};

type Props = {
  setStep: (step: boolean) => void;
  setEmail: (email: string) => void;
  step: boolean;
};

function Form({ setStep, setEmail, step }: Props) {
  const schema = !step
    ? yup.object({
        email: yup.string().email().required(),
      })
    : yup.object({
        code: yup
          .string()
          .required()
          .min(6, "Must be exactly 6 digits")
          .max(6, "Must be exactly 6 digits"),
      });
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
      {!step ? (
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
      ) : (
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
      )}

      <div className=" flex items-center justify-between text-center mt-[48px] max-w-[343px] mx-auto">
        {step ? (
          <motion.div
            initial={{ opacity: 1, width: "0" }}
            animate={{
              opacity: 1,
              width: "16%",
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Iconsecondarywhite
              disabled={false}
              type="button"
              className=" p-[15px]"
              onClick={() => setStep(false)}
            >
              <Arrow />
            </Iconsecondarywhite>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 1, width: "20%" }}
            animate={{
              opacity: 0,
              width: "0",
            }}
            transition={{ duration: 1 }}
          >
            <Iconsecondarywhite
              disabled={false}
              type="button"
              className=" p-[15px]"
              onClick={() => setStep(false)}
            >
              <Arrow />
            </Iconsecondarywhite>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 1, width: "100%" }}
          animate={{
            opacity: 1,
            width: step ? "80%" : "100%",
            // margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
          transition={{ duration: 1 }}
        >
          <MainBtn type="submit" disabled={false} size="L" className="w-full">
            {step ? <p>verify</p> : <p>connect to everything</p>}
          </MainBtn>
        </motion.div>
      </div>
    </form>
  );
}

export default Form;
