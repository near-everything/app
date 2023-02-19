import React from "react";
import { useLocation } from "react-router-dom";
import Snackbar from "component/shared/snackbar";
import { Secondarywhite } from "component/shared/btn";
import { ReactComponent as Addcircle } from "assets/icon/addcircle.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "component/shared/input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ReactComponent as Shirt } from "assets/icon/templates/shirt.svg";
import { ReactComponent as Trash } from "assets/icon/trash.svg";
import { ReactComponent as Edit } from "assets/icon/edit.svg";
import { ReactComponent as Arrowupright } from "assets/icon/arrowupright.svg";
type Props = {};
type Inputs = {
  search: string;
};
const schema = yup.object({
  search: yup.string(),
});
function Finishtemplate({}: Props) {
  const location = useLocation();
  const data = location.state?.data;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className=" relative pb-[64px] bg-black h-full w-full rounded-t-[24px] mt-[40px]  overflow-auto">
      <Snackbar
        message="your things was uploaded successfully"
        success={true}
      />
      <img
        src={location.state?.data?.url}
        alt="Screenshot"
        className="w-full mx-auto h-auto max-h-[490px]  rounded-[22px]"
      />
      <div className=" mt-[24px]">
        {info.map((item, id) => (
          <div
            key={id}
            className="bg-gray-95 rounded-[16px] pt-[8px] pb-[8px] pr-[8px] pl-[16px] w-[98%] mb-[8px] mx-auto flex items-center justify-between"
          >
            <p className=" text-Body14 text-[#B8B9B9]">{item?.name}</p>
            <Secondarywhite
              disabled={false}
              type="button"
              size="S"
              className=" px-[24px] py-[10px]"
            >
              <div className=" flex items-center justify-center ">
                <Addcircle className=" mr-[4px]" />
                <p>click to add</p>
              </div>
            </Secondarywhite>
          </div>
        ))}
      </div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[90%] mx-auto mt-[24px] pb-[24px] border-b border-solid border-gray-90"
        >
          <Input
            name="search"
            type="text"
            placeholder={"Type anything..."}
            error={errors.search?.message}
            autoFocus
            register={register}
            autoComplete="nope"
            className="placeholder:text-gray-40 text-gray-40 bg-black"
            wrapperClass="text-start bg-black "
          />
        </form>
      </div>
      <div className=" bg-gray-95 w-[98%] mx-auto rounded-[20px] p-[4px] mt-[24px] flex items-center justify-between">
        <div className=" flex items-center justify-start text-Button16 text-gray-30">
          <div className=" bg-gray-90 rounded-[18px] w-[48px] h-[48px] flex items-center justify-center mr-[10px]">
            <Shirt />
          </div>
          {location.state?.data?.template}
        </div>
        <div className="flex items-center justify-start">
          <Trash className=" text-red" />
          <Edit className=" ml-[8px] mr-[4px]" />
        </div>
      </div>
      <div className=" w-[98%] mx-auto bg-gray-95 p-[16px]  rounded-[20px] mt-[8px] flex items-center justify-between">
        <p>Everything</p>
        <Arrowupright className="" />
      </div>
     <div className=" flex items-center justify-end">
     <div className=" mt-[8px] rounded-[20px] bg-black80 backdrop-blur-[15px] p-[16px] mr-[16px]">
        <Edit className=" " />
      </div>
     </div>
    </div>
  );
}

export default Finishtemplate;

const info = [
  {
    name: "Brand",
  },
  {
    name: "Material",
  },
  {
    name: "Size",
  },
  {
    name: "Purchase price",
  },
];
