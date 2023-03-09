import { yupResolver } from "@hookform/resolvers/yup";
import { ReactComponent as Arrowupright } from "assets/icon/arrowupright.svg";
import { ReactComponent as Edit } from "assets/icon/edit.svg";
import Input from "component/shared/input";
import Snackbar from "component/shared/snackbar";
import ApplyTemplateBtn from "component/template/ApplyTemplateBtn";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import * as yup from "yup";
import Attribute from "./Attribute";
type Props = {};
type Inputs = {
  search: string;
};
const schema = yup.object({
  search: yup.string(),
});

function Index({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const thing: any = useLoaderData();

  // What if thing not found?

  return (
    <div className=" relative bg-black h-full w-full rounded-t-[24px] overflow-auto">
      <Snackbar message="your thing was uploaded successfully" success={true} />
      <img
        src={thing.media[0]} // TODO: Fallback if image not provided
        alt="Screenshot"
        className="w-full mx-auto h-auto max-h-[490px] rounded-[22px] border-4 border-black"
      />
      <div className=" mt-[24px]">
        {thing.attributes.map((it: any, id: number) => (
          <div key={id}>
            <Attribute attr={it} />
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
      {/* This should be the generic TemplateSelectBtn, which means the template editor should be pulled out so it can be used in both places... maybe a context? */}
      <ApplyTemplateBtn template={thing.template} />
      {/* This should represent the pile it exists in... defaults to "everything" */}
      <div className=" w-[98%] mx-auto bg-gray-95 p-[16px]  rounded-[20px] mt-[8px] flex items-center justify-between">
        <p>Everything</p>
        <Arrowupright className="" />
      </div>
      {/* This should be fixed to the scrollable container */}
      <div className=" fixed bottom-0 right-0">
        <div className=" mt-[8px] rounded-[20px] bg-black80 backdrop-blur-[15px] p-[16px] mr-[16px]">
          <Edit className=" " />
        </div>
      </div>
    </div>
  );
}

export default Index;
