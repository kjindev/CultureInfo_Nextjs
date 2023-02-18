import { useEffect, useRef, useState } from "react";
import Main from "./Main";
import Search from "./Search";

export default function Home() {
  const effectRef = useRef<HTMLInputElement>(null);
  const [targetName, setTargetName] = useState("main");

  useEffect(() => {
    if (effectRef) {
      let observer: IntersectionObserver;
      observer = new IntersectionObserver(
        ([event]) => {
          const target = event.target as HTMLElement;
          if (event.isIntersecting) {
            setTargetName(target.id);
          }
        },
        { threshold: 0.4 }
      );
      observer.observe(effectRef.current as Element);
    }
  }, [effectRef]);

  return (
    <div>
      <div>
        <Main />
      </div>
      <div ref={effectRef} id="search">
        <Search targetName={targetName} />
      </div>
    </div>
  );
}
