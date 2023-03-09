import { ReactComponent as Addcircle } from "assets/icon/addcircle.svg";
import { Secondarywhite } from "component/shared/btn";

type Props = {
  attr: any;
};

function Attribute({ attr }: Props) {
  return (
    <>
      <div className="bg-gray-95 rounded-[16px] pt-[8px] pb-[8px] pr-[8px] pl-[16px] w-[98%] mb-[8px] mx-auto flex items-center justify-between">
        <p className=" text-Body14 text-[#B8B9B9]">{attr.label}</p>
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
    </>
  );
}

export default Attribute;
