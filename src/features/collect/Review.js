import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { selectUser } from "../auth/authSlice";
import { insert, resetCollect } from "./collectSlice";

function Review() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const item = useSelector((state) => state.collect);

  const user = useSelector(selectUser);

  const onSubmit = () => {
    dispatch(insert(item, user));
    dispatch(resetCollect());
    navigate("/");
  };

  return (
    <>
      <pre>{JSON.stringify(item, null, 2)}</pre>
      <Button onClick={onSubmit}>Submit</Button>
    </>
  );
}

export default Review;
