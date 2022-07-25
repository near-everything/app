import Link from "next/link";
import { useAppSelector } from "../../app/hooks";
import Button from "../../components/Button";
import Attributes from "../../components/Collect/Attributes";
import Category from "../../components/Collect/Category";
import Subcategory from "../../components/Collect/Subcategory";
import Media from "../../components/Media";
import ModuleContainer from "../../containers/ModuleContainer";

function Collect() {
  const category = useAppSelector((state) => state.collect.category);
  const subcategory = useAppSelector((state) => state.collect.subcategory);
  const media = useAppSelector((state) => state.collect.media);

  const handleSubmit = () => {};

  return (
    <>
      <div className="flex flex-1 flex-col">
        <Media media={media} />
        <br />
        <div className="flex flex-1 flex-col text-black">
          <Category />
          <br />
          {category ? <Subcategory /> : null}
          <br />
          {subcategory ? (
            <>
              <div className="w-75 border-t-2 flex justify-end text-sm text-gray-400 pb-2">
                Optional
              </div>
              <Attributes />
            </>
          ) : null}
        </div>
        <div className="flex justify-self-end">
          <Link href="/review">
            <Button
              className="w-full h-16"
              disabled={!category || !subcategory || media.length <= 0}
              onClick={handleSubmit}
            >
              Review
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Collect;

Collect.getLayout = function getLayout(page) {
  return (
    <ModuleContainer moduleName={"collect"} moduleColor={"green"} >
      {page}
    </ModuleContainer>
  );
};
