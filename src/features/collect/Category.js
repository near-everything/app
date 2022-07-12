import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCategories } from "./collectApi";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { setCategory } from "./collectSlice";

function Category() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useCategories();

  const onSubmit = (data) => {
    dispatch(setCategory(data));
    navigate("/subcategory");
  };

  return (
    <>
      <div className="flex flex-col justify-between h-full">
        <Header className="flex flex-1" title={"Category"} pageNumber={"2"} />
        {isLoading ? (
          "Loading..."
        ) : isError ? (
          "Error"
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 h-full">
            {data?.map((category, index) => {
              return (
                <Button
                  key={index}
                  className="flex grow rounded-none my-2"
                  onClick={() => onSubmit(category.node)}
                >
                  {category.node.name}
                </Button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Category;
