import { ReactElement } from "react";
type Props = {
  elementLeft?: ReactElement;
  elementCenter?: ReactElement;
  elementRight?: ReactElement;
};

function Index({ elementLeft, elementCenter, elementRight }: Props) {
  return (
    <div className="flex items-center justify-between px-[16px] py-[4px] pb-[8px]">
      <div className="grow basis-0 flex justify-start">
        {elementLeft}
      </div>
      {elementCenter}
      <div className="grow basis-0 flex justify-end">
        {elementRight}
      </div>
    </div>
  );
}

export default Index;
