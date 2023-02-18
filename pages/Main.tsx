import { useEffect, useRef } from "react";

export default function Main() {
  const neonRef = useRef<HTMLInputElement>(null);
  const fadeinRef = useRef<HTMLInputElement>(null);

  const animationEffect = () => {
    const addNeonEffect = () => {
      neonRef.current?.classList.add("neon-effect");
    };
    const removeNeonEffect = () => {
      neonRef.current?.classList.remove("neon-effect");
    };

    const addFadeinEffect = () => {
      fadeinRef.current?.classList.remove("invisible");
      fadeinRef.current?.classList.add("fadein-effect");
    };

    setTimeout(addNeonEffect, 700);
    setTimeout(removeNeonEffect, 800);
    setTimeout(addNeonEffect, 1000);
    setTimeout(removeNeonEffect, 1200);
    setTimeout(addNeonEffect, 1500);
    setTimeout(addFadeinEffect, 1550);
  };

  useEffect(() => {
    animationEffect();
  }, []);

  return (
    <div className="text-center bg-black text-white w-[100%] h-[100vh] flex items-center justify-center">
      <div className="p-7 flex flex-col">
        <div>
          <div className="title-font text-5xl md:text-6xl lg:text-7xl">
            <div>
              Art is{" "}
              <span ref={neonRef} className="italic text-black">
                anything
              </span>
            </div>
            <div>you can get away with.</div>
          </div>
          <hr className="mx-[45%] my-12" />
          <div
            ref={fadeinRef}
            className="px-[10%] md:px-[15%] lg:px-[20%] invisible"
          >
            <div className="text-xs lg:text-sm text-center">
              우리는 오늘도 일상을 살아냅니다. 반복되는 하루, 반복되는 고민,
              반복되는 지겨움 속에서 숨 돌릴 곳을 찾는 사람들. 이런 우리를
              일상에서 벗어나게 해주는 모든 것은 예술이 됩니다. 누군가에게는
              추억, 누군가에게는 쉼터, 누군가에게는 즐거움이 되어주는 우리의
              예술과 문화. 그 예술과 문화의 공간을 공유합니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
