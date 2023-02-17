import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { AiOutlineReload } from "react-icons/ai";

interface CultureArrayType {
  MAIN_IMG: string;
  TITLE: string;
  PLACE: string;
}

export default function Foryou() {
  const queryClient = useQueryClient();
  const query: any = queryClient.getQueryState("seoul");
  const randomNumber = Math.floor(Math.random() * 300);
  const [cultureData, setCultureData] = useState<CultureArrayType>();
  const [cultureList, setCultureList] = useState<CultureArrayType[]>([]);

  useEffect(() => {
    if (query?.status === "success" && cultureList.length === 0) {
      for (let i = 0; i < 4; i++) {
        cultureList.push(
          query.data.culturalEventInfo.row[Math.floor(Math.random() * 300)]
        );
      }
      console.log(cultureList);
      //setCultureData(query.data.culturalEventInfo.row[randomNumber]);
    }
  }, [query]);

  return (
    <div className="w-[100%] h-[100vh] bg-black text-white flex justify-center items-center">
      {/*<img
        loading="lazy"
        src={cultureData?.MAIN_IMG}
        className="w-[70%] h-[50%] object-cover"
      />
      <div>{cultureData?.TITLE}</div>
      <div>{cultureData?.PLACE}</div>
      <AiOutlineReload
        color="white"
        onClick={() =>
          setCultureData(query.data.culturalEventInfo.row[randomNumber])
        }
        className="hover:cursor-pointer"
      />*/}
      {cultureList.map((item, index) => (
        <div key={index}>
          <img
            loading="lazy"
            src={item.MAIN_IMG}
            className="w-[70%] h-[50%] object-cover"
          />
          <div>{item.TITLE}</div>
          <div>{item.PLACE}</div>
        </div>
      ))}
    </div>
  );
}
