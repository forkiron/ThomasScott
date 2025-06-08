import { useEffect, useRef, useState } from "react";

interface BarProps {
  title: () => React.ReactNode;
  color: string;
  scroll: number;
  direction: boolean;
}

const BottomBar = ({ title, color, scroll, direction }: BarProps) => {
  const scrollTextRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * scroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={color}>
      <div
        ref={scrollTextRef}
        className="whitespace-nowrap font-bold text-white text-lg"
        style={{
          transform: `translateX(${direction === true ? -offset : offset}px)`,
          transition: "transform 0.1s linear",
        }}
      >
        {Array.from({ length: 4 }, (_, index) => (
          <span key={index} className="inline-block mx-4">
            {title()}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BottomBar;
