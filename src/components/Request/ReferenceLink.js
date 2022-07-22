import { useDispatch, useSelector } from "react-redux";
import {
  setReferenceLink
} from "../../features/request/requestSlice";
import Input from "../Input";

function ReferenceLink() {
  const referenceLink = useSelector((state) => state.request.referenceLink);
  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    dispatch(setReferenceLink(event.target.value));
  };

  return (
    <>
      <Input
        placeholder="Reference link... https://..."
        onChange={handleOnChange}
        value={referenceLink}
      />
    </>
  );
}

export default ReferenceLink;
