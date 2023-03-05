import {
  PropsWithChildren
} from "react";
import { Link } from "react-router-dom";

type Props = {
  locationPath: string;
  linkPath: string;
};

const FooterItem = ({
  locationPath,
  linkPath,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <>
      <Link to={linkPath}>
        {locationPath === linkPath ? <SelectedCircle /> : <>{children}</>}
      </Link>
    </>
  );
};

const SelectedCircle = () => {
  return (
    <div className="w-[24px] h-[24px] bg-white rounded-[50%] cursor-pointer" />
  );
};

export default FooterItem;
