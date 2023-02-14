export default function Main() {
  return (
    <div className=" bg-black text-white w-[100%] h-[100vh] flex items-center">
      <div className="bg-black border border-black border-r-white w-[3%] h-[100vh] fixed z-[1]"></div>
      <div className="ml-[5%] p-7">
        <div className="title-font text-7xl">
          <div>
            Art is <span className="italic">anything</span>
          </div>
          <div>you can get away with.</div>
        </div>
        <div className="mt-12 bg-lime-300 w-[100px] h-[10px]"></div>
        <div className="mt-3 w-[65%] text-sm text-justify">
          우리는 오늘도 일상을 살아냅니다. 반복되는 하루, 반복되는 고민,
          반복되는 지겨움 속에서 숨 돌릴 곳을 찾는 사람들. 이런 우리를 일상에서
          벗어나게 해주는 모든 것은 예술이 됩니다. 누군가에게는 추억,
          누군가에게는 쉼터, 누군가에게는 즐거움이 되어주는 우리의 예술과 문화.
          그 예술과 문화의 공간을 공유합니다.
        </div>
      </div>
    </div>
  );
}
