import { useEffect, useState } from "react";

export default function Preloader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    setTimeout(() => setHide(true), 800);
  }, []);

  if (hide) return null;

  return (
    <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
      <div className="w-10 h-10 border-4 border-gray-600 border-t-cyan-400 rounded-full animate-spin"></div>
    </div>
  );
}