import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetCollect } from "../features/collect/collectSlice";

function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetCollect());
  }, [dispatch]);

  return <div>This is main</div>;
}

export default Main;
