import Map from "./Map";
import { useEffect, useState } from "react";
import { useQuery, QueryClient } from "react-query";

export default function Home() {
  interface CultureArrayType {
    GUNAME: string;
    TITLE: string;
    DATE: string;
  }

  const queryClient = new QueryClient();
  const [cultureData, setCultureData] = useState<CultureArrayType[]>([]);
  const [cultureCount, setCultureCount] = useState(0);
  const [cultureList, setCultureList] = useState<string[]>([]);
  const date = new Date();
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);

  const query = useQuery("seoul", async () =>
    (
      await fetch(
        ` http://openapi.seoul.go.kr:8088/${process.env.NEXT_PUBLIC_API_KEY}/json/culturalEventInfo/1/300/`
      )
    ).json()
  );

  useEffect(() => {
    if (query.status === "success") {
      setCultureData(query.data.culturalEventInfo.row);
    }
  }, [query.status]);

  useEffect(() => {
    if (cultureData[0]) {
      let cnt: number = 0;
      let list: string[] = [];
      for (let i = 0; i < 300; i++) {
        if (
          cultureData[i].GUNAME === "중구" &&
          cultureData[i].DATE.slice(11, 21) >= `${year}-${month}-${day}`
        ) {
          cnt = cnt + 1;
          list.push(cultureData[i].TITLE);
        }
      }
      setCultureCount(cnt);
      setCultureList(list);
    }
  }, [cultureData]);

  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center">
      <Map />
    </div>
  );
}
