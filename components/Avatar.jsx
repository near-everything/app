import { useEffect, useRef } from "react";

function Avatar({ color }) {
  const ref = useRef();

  useEffect(() => {
    if (ref.current == null) {
      return;
    }
    ref.current.style.backgroundColor = color;
  }, [ref, color]);

  return (
    <div className="w-10 h-10 relative">
      <div className="w-24 rounded-full min-w-full min-h-full max-w-full max-h-full" ref={ref}></div>
    </div>
  );
}

export default Avatar;