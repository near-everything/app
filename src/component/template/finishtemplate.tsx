import React from 'react'
import { useLocation } from "react-router-dom";

type Props = {}

function Finishtemplate({}: Props) {
    const location = useLocation();
    console.log(location, " useLocation Hook");
    const data = location.state?.data;
    console.log('data', data)
  return (
    <div>finishtemplate</div>
  )
}

export default Finishtemplate