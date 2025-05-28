import { useEffect, useState } from "react";

interface Props {
  text: string;
  speed?: number;
}

function Typewriter({ text, speed = 15 }: Props) {
  const [displayedText, setDisplayedText] = useState<string[]>([]);

  useEffect(() => {
    let intervalId: number;
    let i = 0;

    setDisplayedText([]); // Reinicia el texto al empezar

    intervalId = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.split("").slice(0, i + 1));
        i++;
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return (
    <p>
      {displayedText.map((char, index) => (
        <span key={index} className="fade-in">
          {char}
        </span>
      ))}
    </p>
  );
}

export default Typewriter;
