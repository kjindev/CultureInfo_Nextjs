import { useEffect, useRef, useState } from "react";
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

  useEffect(() => {
    if (scrollRef) {
      let observer: IntersectionObserver;
      observer = new IntersectionObserver(
        ([event]) => {
          const target = event.target as HTMLElement;
          if (event.isIntersecting) {
            setNavName(target.id);
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(scrollRef.current[0] as Element);
    }
  }, [scrollRef]);

  useEffect(() => {
    if (scrollRef) {
      let observer: IntersectionObserver;
      observer = new IntersectionObserver(
        ([event]) => {
          const target = event.target as HTMLElement;
          if (event.isIntersecting) {
            setNavName(target.id);
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(scrollRef.current[1] as Element);
    }
  }, [scrollRef]);

  useEffect(() => {
    if (scrollRef) {
      let observer: IntersectionObserver;
      observer = new IntersectionObserver(
        ([event]) => {
          const target = event.target as HTMLElement;
          if (event.isIntersecting) {
            setNavName(target.id);
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(scrollRef.current[2] as Element);
    }
  }, [scrollRef]);

  useEffect(() => {
    if (scrollRef) {
      let observer: IntersectionObserver;
      observer = new IntersectionObserver(
        ([event]) => {
          const target = event.target as HTMLElement;
          if (event.isIntersecting) {
            setNavName(target.id);
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(scrollRef.current[3] as Element);
    }
  }, [scrollRef]);

  const handleScrollView = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    const name = target.innerText;
    const category = {
      MAIN: 0,
      INTRO: 1,
      "FOR YOU": 2,
      SEARCH: 3,
    };
    if (
      name === "MAIN" ||
      name === "INTRO" ||
      name === "FOR YOU" ||
      name === "SEARCH"
    ) {
      scrollRef.current[category[name]]?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative" onMouseMove={mouseMoving}>
      <NavBar navName={navName} handleScrollView={handleScrollView} />
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
