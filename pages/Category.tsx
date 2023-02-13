import {
  BsPencilSquare,
  BsMusicNoteList,
  BsEmojiSunglasses,
} from "react-icons/bs";
import { BiMoviePlay } from "react-icons/bi";
import { FaUniversity } from "react-icons/fa";
import { TbConfetti } from "react-icons/tb";
import { useEffect, useState } from "react";

export default function Category() {
  const [menuName, setMenuName] = useState("music");
  const menuStyle =
    "flex items-center justify-center bg-gray-100 w-[10vh] h-[10vh] rounded-full mx-3 hover:cursor-pointer";
  const menuStyleHover =
    "flex items-center justify-center bg-sky-200  w-[10vh] h-[10vh] rounded-full mx-3 hover:cursor-pointer";

  const menuClick = (event: React.MouseEvent<HTMLElement>) => {
    const targetElement = event.target as HTMLDivElement;
    if (targetElement.dataset.name !== undefined) {
      setMenuName(targetElement.dataset.name);
    }
  };

  useEffect(() => {
    //console.log(menuName);
  }, [menuName]);

  return (
    <div className="w-[100%] h-[100vh] flex flex-col justify-center items-center">
      <div
        onClick={menuClick}
        className="w-[70%] h-[20%] flex flex-wrap justify-center items-center "
      >
        <div
          data-name="music"
          className={menuName === "music" ? menuStyleHover : menuStyle}
        >
          <BsMusicNoteList size={25} className="" />
          {/*<div>뮤지컬/오페라</div>
          <div>독주/독창회</div>
          <div>클래식</div>
  <div>국악</div>*/}
        </div>
        <div
          data-name="concert"
          className={menuName === "concert" ? menuStyleHover : menuStyle}
        >
          <TbConfetti size={25} />
          {/*<div>콘서트</div>
          <div>축제</div>*/}
        </div>
        <div
          data-name="movie"
          className={menuName === "movie" ? menuStyleHover : menuStyle}
        >
          <BiMoviePlay size={25} />
          {/*<div>영화</div>
          <div>연극</div>
          <div>무용</div>*/}
        </div>
        <div
          data-name="museum"
          className={menuName === "museum" ? menuStyleHover : menuStyle}
        >
          <FaUniversity size={25} />
          {/*<div>전시/미술</div>*/}
        </div>
        <div
          data-name="education"
          className={menuName === "education" ? menuStyleHover : menuStyle}
        >
          <BsPencilSquare size={25} />
          {/*<div>교육/체험</div>*/}
        </div>
        <div
          data-name="etc"
          className={menuName === "etc" ? menuStyleHover : menuStyle}
        >
          <BsEmojiSunglasses size={25} />
          {/*<div>기타</div>*/}
        </div>
      </div>
      <div className="w-[70%] h-[60%] bg-gray-100 rounded-lg">text</div>
    </div>
  );
}
