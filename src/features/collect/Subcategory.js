import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSubcategoriesByCategoryId } from "../../app/api";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { setSubcategory } from "./collectSlice";

function Subcategory() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const category = useSelector((state) => state.collect.category);
  const { data, isLoading, isError } = useSubcategoriesByCategoryId(category.id);

  const onSubmit = (data) => {
    dispatch(setSubcategory(data));
    navigate("/attributes");
  };

  return (
    <>
      <div className="flex flex-col justify-between h-full">
        <Header
          className="flex flex-1"
          title={"Subcategory"}
          pageNumber={"3"}
        />
        {isLoading ? (
          "Loading..."
        ) : isError ? (
          "Error"
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 h-full">
            {data?.map((subcategory, index) => {
              return (
                <Button
                  key={index}
                  className="flex grow rounded-none"
                  onClick={() => onSubmit(subcategory.node)}
                >
                  {subcategory.node.name}
                </Button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Subcategory;
