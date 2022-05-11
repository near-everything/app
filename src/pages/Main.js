import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import { resetCollect } from "../features/collect/collectSlice";

function Main() {
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    dispatch(resetCollect())
  }, [dispatch])
  

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-black text-black dark:text-white">
      <div className="flex flex-col flex-1 w-full">
        <MainHeader />
        <main className="h-full overflow-y-auto">
          <Link to="/media">
            <div className="flex justify-center items-center h-full text-center ">
              collect everything
              <br />
              (click anywhere to begin)
            </div>
          </Link>
        </main>
      </div>
    </div>
  );
}

export default Main;
