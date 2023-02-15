import { useRef, useState } from "react";
import Foryou from "./Foryou";
import Introduction from "./Introduction";
import Main from "./Main";
import Search from "./Search";
import NavBar from "./NavBar";

export default function Home() {
  const [mouseX, setMouseX] = useState<number>(0);
  const [mouseY, setMouseY] = useState<number>(0);
  const scrollRef = useRef<null[] | HTMLDivElement[]>([]);
  const [navName, setNavName] = useState("main");
  const mouseMoving = (event: React.MouseEvent<HTMLElement>) => {
    setMouseX(event.clientX);
    setMouseY(event.clientY + scrollY);
  };

  return (
    <div className="relative" onMouseMove={mouseMoving}>
      {/*<div
        className="w-[100px] h-[100px] rounded-full bg-violet-400 opacity-75"
        style={{
          position: "absolute",
          top: `${mouseY}px`,
          left: `${mouseX}px`,
          transform: `translate(-50%, -50%)`,
        }}
      ></div>*/}
      <NavBar />
      <div ref={(el) => (scrollRef.current[0] = el)} id="main">
        <Main />
      </div>
      <div ref={(el) => (scrollRef.current[1] = el)} id="intro">
        <Introduction />
      </div>
      <div ref={(el) => (scrollRef.current[2] = el)} id="foryou">
        <Foryou />
      </div>
      <div ref={(el) => (scrollRef.current[3] = el)} id="search">
        <Search />
      </div>
    </div>
  );
}
