import Link from "next/link";
export default function NavBar() {
  return (
    <div className="w-[100%] flex fixed">
      <Link href="/">
        <div className="m-2 hover:cursor-pointer">지도로 찾기</div>
      </Link>
      <Link href="/Category">
        <div className="m-2 hover:cursor-pointer">이름으로 찾기</div>
      </Link>
    </div>
  );
}
