import { ReactComponent as Gallery } from "assets/icon/gallery.svg";
import { Secondarywhite } from "component/shared/btn";

type Props = {
  capture: () => void;
  handleUpload: () => void;
};

function Footer({ capture, handleUpload }: Props) {
  return (
    <div className="absolute bottom-[30px] left-0 w-full">
      <div className="flex items-center justify-between mx-auto">
        <div className="grow basis-0 flex items-center justify-center">
          <div className="p-[15px] rounded-[50%] bg-white20 text-white flex items-center justify-center cursor-pointer">
            <Gallery />
          </div>
        </div>
        <div
          className="w-[64px] h-[64px] rounded-[50%] bg-white cursor-pointer"
          onClick={capture}
        />
        <div className="grow basis-0 flex items-center justify-center">
          <Secondarywhite
            size="L"
            type="button"
            disabled={false}
            className="py-[16px] px-[24px]"
            onClick={handleUpload}
          >
            <p className="text-Button16">upload</p>
          </Secondarywhite>
        </div>
      </div>
    </div>
  );
}

export default Footer;
