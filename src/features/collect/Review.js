import { collection } from "firebase/firestore";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../app/firebase";
import { selectUser } from "../auth/authSlice";
import { insert } from "./collectSlice";
import Button from "../../components/Button"

function Review() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleSubmit } = useForm();
  const state = useSelector((state) => state.collect);

  const user = useSelector(selectUser);

  const onSubmit = () => {
    const item = state.collect;
    dispatch(insert(item, user));
    navigate("/");
  };

  return (
    <>
        <pre>{JSON.stringify(state, null, 2)}</pre>
        <Button onClick={onSubmit}>Submit</Button>
    </>
  );
}

export default Review;
