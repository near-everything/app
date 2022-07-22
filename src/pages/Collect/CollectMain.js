import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Attributes from "../../components/Collect/Attributes";
import Category from "../../components/Collect/Category";
import Subcategory from "../../components/Collect/Subcategory";
import Media from "../../components/Media";
import { setMedia } from "../../features/collect/collectSlice";

function CollectMain() {
  const category = useSelector((state) => state.collect.category);
  const subcategory = useSelector((state) => state.collect.subcategory);
  const media = useSelector((state) => state.collect.media);
  
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/review");
  };

  return (
    <>
      <div className="flex flex-1 flex-col">
        <Media media={media} setMedia={setMedia} />
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
          <Button
            className="w-full h-16"
            disabled={!category || !subcategory || media.length <= 0}
            onClick={handleSubmit}
          >
            Review
          </Button>
        </div>
      </div>
    </>
  );
}

export default CollectMain;
