import classNames from "classnames";
import { useEffect, useRef } from "react";

function Avatar({ color, size }) {
  const ref = useRef();

  useEffect(() => {
    if (ref.current == null) {
      return;
    }
    ref.current.style.backgroundColor = color;
  }, [ref, color]);

  return (
    <div className={`w-${size} h-${size} relative`}>
      <div className="rounded-full min-w-full min-h-full max-w-full max-h-full" ref={ref}></div>
    </div>
  );
}

export default Avatar;