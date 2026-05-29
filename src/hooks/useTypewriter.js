import { useEffect, useState } from "react";

export default function useTypewriter(texts, speed = 70, pause = 2000) {
  const [display, setDisplay] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < texts[textIndex].length) {
      const timeout = setTimeout(() => {
        setDisplay(prev => prev + texts[textIndex][charIndex]);
        setCharIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        if (textIndex === texts.length - 1) {
          setDisplay("");
          setTextIndex(0);
          setCharIndex(0);
        } else {
          setDisplay(prev => prev + "\n");
          setTextIndex(prev => prev + 1);
          setCharIndex(0);
        }
      }, pause);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex]);

  return display;
}