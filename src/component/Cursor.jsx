import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef(null);

  useEffect(() => {
    const move = (e) => {
      dot.current.style.left = e.clientX + "px";
      dot.current.style.top = e.clientY + "px";
    };

    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="fixed w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-50" ref={dot}></div>
  );
}