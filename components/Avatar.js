import React, { useEffect, useRef } from "react";

function Avatar({ color  }) {
  const ref = useRef();

  useEffect(() => {
    if (ref.current == null) {
      return;
    }
    ref.current.style.backgroundColor = color;
  }, [ref, color]);

  return (
    <div className="avatar">
      <div className={"w-36 rounded-full"} ref={ref}></div>
    </div>
  );
}

export default Avatar;
