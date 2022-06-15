import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { setAttributes } from "./collectSlice";

function Extra() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const subcategory = useSelector((state) => state.collect.subcategory);
  const attributes = useSelector((state) => state.collect.attributes);
  const { register, handleSubmit } = useForm({
    defaultValues: attributes,
  });

  const onSubmit = (data) => {
    dispatch(setAttributes(data));
    navigate("/review");
  };

  return (
    <>
      <div className="flex flex-col justify-between h-full">
        <Header className="flex flex-1" pageNumber={"4"} />
        <form
          id="extra"
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-between h-full w-full"
        >
          <div>
            {subcategory &&
              subcategory.attributes &&
              subcategory.attributes.map((attr) => (
                <Input key={attr.id} label={attr.name} register={register} />
              ))}
          </div>
          <div className="flex">
            <div className="w-1/2"></div>
            <Button
              className="w-1/2 h-16 bg-gray-200 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-800 rounded-none"
              form="extra"
              type="submit"
            >
              &#x2192;
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Extra;
