import { ReactComponent as Close } from "assets/icon/close.svg";

type Props = {
  setUrl: (url: string | null) => void;
  setClose: (close: boolean) => void;
};

function Header({ setClose, setUrl }: Props) {
  return (
    <div className="flex items-center justify-between px-[16px] pt-[4px] pb-[8px]">
      <div
        className=" bg-white20 rounded-[50%] p-[14px]  cursor-pointer"
        onClick={() => {
          setClose(false);
          setUrl(null);
        }}
      >
        <Close className="text-white" />
      </div>
    </div>
  );
}

export default Header;
