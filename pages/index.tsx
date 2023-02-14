import { useState } from "react";
import Main from "./Main";
import Map from "./Map";

export default function Home() {
  const [mouseX, setMouseX] = useState<number>(0);
  const [mouseY, setMouseY] = useState<number>(0);

  const mouseMoving = (event: React.MouseEvent<HTMLElement>) => {
    setMouseX(event.clientX);
    setMouseY(event.clientY + scrollY);
  };

  return (
    <div className="relative" onMouseMove={mouseMoving}>
      <div
        className="w-[100px] h-[100px] rounded-full bg-lime-300 opacity-75"
        style={{
          position: "absolute",
          top: `${mouseY}px`,
          left: `${mouseX}px`,
          transform: `translate(-50%, -50%)`,
        }}
      ></div>
      <Main />
      <Map />
    </div>
  );
}
