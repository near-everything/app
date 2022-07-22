import { useDispatch, useSelector } from "react-redux";
import { setDescription } from "../../features/request/requestSlice";
import TextArea from "../TextArea";

function Description() {
  const description = useSelector((state) => state.request.description);
  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    dispatch(setDescription(event.target.value));
  };

  return (
    <>
      <TextArea
        name="request_description"
        placeholder="Description..."
        onChange={handleOnChange}
        value={description}
      />
    </>
  );
}

export default Description;
