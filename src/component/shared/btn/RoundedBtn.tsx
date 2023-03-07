import { ReactElement } from "react";

type Props = {
  icon: ReactElement;
  onClick: () => void;
};

function RoundedBtn({ icon, onClick }: Props) {
  return (
    <div
      className=" bg-white20 rounded-[50%] p-[14px]  cursor-pointer"
      onClick={onClick}
    >
      {icon}
    </div>
  );
}
export default RoundedBtn;
