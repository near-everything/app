import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "component/shared/input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
type Props = {};
type Inputs = {
  search: string;
};
const schema = yup.object({
  search: yup.string(),
});
function Searchbox({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className="flex items-center justify-between  w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <Input
          name="search"
          type="text"
          placeholder={"Search person or thing"}
          error={errors.search?.message}
          autoFocus
          register={register}
          autoComplete="nope"
          className="rounded-xl"
          wrapperClass="text-start"
        />
      </form>
    </div>
  );
}

export default Searchbox;
