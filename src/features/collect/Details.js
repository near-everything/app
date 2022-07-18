import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Attributes from "./Attributes";
import Category from "./Category";
import Subcategory from "./Subcategory";

function Details() {
  const category = useSelector((state) => state.collect.category);
  const subcategory = useSelector((state) => state.collect.subcategory);
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/review");
  };

  return (
    <>
      <div className="flex flex-col justify-between h-full">
        <Header className="flex flex-1" title={"Details"} pageNumber={"2"} />
        <div className="flex flex-1 p-6 flex-col">
          <div className="flex flex-col h-full text-black">
            {/* <PhotoReel /> */}
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
        </div>
        <div className="flex m-4">
          <Button
            className="w-full h-16"
            disabled={!category || !subcategory}
            onClick={handleSubmit}
          >
            &#x2192;
          </Button>
        </div>
      </div>
    </>
  );
}

export default Details;
