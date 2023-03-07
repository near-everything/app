import { ReactComponent as Add } from "assets/icon/add.svg";
import { ReactComponent as Profile } from "assets/icon/people.svg";
import { ReactComponent as Circle } from "assets/icon/profile/circle.svg";
import { useLocation } from "react-router-dom";
import FooterItem from "./FooterItem";

type Props = {};

const Footer = (props: Props) => {
  const location = useLocation();

  return (
    <div className="absolute bottom-[16px] right-[8px] left-[8px] z-40 ">
      <div className="px-[54px] py-[24px] bg-black80 backdrop-blur-[12px] rounded-[24px] flex items-center justify-between">
        <FooterItem linkPath="/" locationPath={location.pathname}>
          <Circle />
        </FooterItem>
        <FooterItem linkPath="/create" locationPath={location.pathname}>
          <Add className="aspect-square w-[32px] text-white" />
        </FooterItem>
        <FooterItem linkPath="/profile" locationPath={location.pathname}>
          <Profile />
        </FooterItem>
      </div>
    </div>
  );
};

export default Footer;
