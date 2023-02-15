export default function NavBar() {
  return (
    <div className="title-font w-[100%] flex justify-end p-5 fixed bg-black text-white text-xs">
      <div className="mx-4 hover:cursor-pointer hover:text-fuchsia-400">
        MAIN
      </div>
      <div className="mx-4 hover:cursor-pointer hover:text-fuchsia-400">
        INTRO
      </div>
      <div className="mx-4 hover:cursor-pointer hover:text-fuchsia-400">
        FOR YOU
      </div>
      <div className="mx-4 hover:cursor-pointer hover:text-fuchsia-400">
        SEARCH
      </div>
    </div>
  );
}
