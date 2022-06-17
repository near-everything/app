import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import ImageCard from "../../components/Cards/ImageCard";
import Header from "../../components/Header";
import { selectUser } from "../auth/authSlice";
import { insert } from "./collectSlice";

function Review() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const subcategory = useSelector((state) => state.collect.subcategory);
  const media = useSelector((state) => state.collect.media);
  const attributes = useSelector((state) => state.collect.attributes);
  const item = useSelector((state) => state.collect);
  const user = useSelector(selectUser);

  const onSubmit = () => {
    dispatch(insert({ item, user }));
    navigate("/complete");
  };

  return (
    <>
      <div className="flex flex-col justify-between h-full">
        <Header className="flex flex-1" title={"Review"} pageNumber={"5"} />
        <div className="flex flex-1 p-6 flex-col">
          <div className="flex flex-col h-full">
            <div className="flex flex-row mb-4">
              {media.length > 0 &&
                media.map((file, index) => (
                  <ImageCard key={index} index={index} media={file.url} />
                ))}
            </div>
            <div>
              <p>
                <span className="font-semibold">Category:</span>{" "}
                {item.category.name}
              </p>
              <p>
                <span className="font-semibold">Subcategory:</span>{" "}
                {item.subcategory.name}
              </p>
              {subcategory &&
                subcategory.attributes &&
                subcategory.attributes.map((char) => (
                  <p key={char.id}>
                    <span className="font-semibold">{char.name}:</span>{" "}
                    {attributes[char.name]}
                  </p>
                ))}
              <p>
                <span className="font-semibold">Quantity:</span>{" "}
                {attributes['quantity']}
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <Button className="w-full h-16" onClick={onSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}

export default Review;
