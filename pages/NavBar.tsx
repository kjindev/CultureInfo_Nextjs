interface propsType {
  navName: string;
  handleScrollView: any;
}

export default function NavBar({ navName, handleScrollView }: propsType) {
  const style = "mx-4 hover:cursor-pointer";
  const styleHover = "mx-4 hover:cursor-pointer text-fuchsia-400";
  return (
    <div
      onClick={handleScrollView}
      className="title-font w-[100%] flex justify-end p-5 fixed bg-black text-white text-xs"
    >
      <div className={navName === "main" ? styleHover : style}>MAIN</div>
      <div className={navName === "intro" ? styleHover : style}>INTRO</div>
      <div className={navName === "foryou" ? styleHover : style}>FOR YOU</div>
      <div className={navName === "search" ? styleHover : style}>SEARCH</div>
    </div>
  );
}
