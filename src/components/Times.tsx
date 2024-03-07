"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { TimesTypes } from "@/types/TimesType";

const Times = () => {
  const [timeData, setTimeData] = useState<TimesTypes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://islomapi.uz/api/present/week?region=Toshkent"
        );
        setTimeData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto mt-28 xl:pl-20 xl:pr-20 md:pl-2 md:pr-2 pl-2 pr-2">
      <div className="flex flex-wrap gap-16 justify-center border-spacing-1">
        {timeData.map((time: any, index) => (
          <div
            key={index}
            className="dark:text-white bg-slate-100 dark:bg-slate-700 rounded-lg outline-none overflow-hidden hover:scale-105 transition duration-500 cursor-pointer object-cover hover:shadow-2xl dark:hover:shadow-slate-600 border-2 dark:border-none w-56 h-80"
          >
            <div className="flex justify-center">
              <div>
                <p className="flex pt-3 pb-3 justify-center text-3xl font-bold">
                  {" "}
                  {time.weekday}
                </p>
                <p className="flex pt-2 text-[20px]">
                  <p className="font-semibold pr-2">Bomdod:</p>
                  {time.times.tong_saharlik}
                </p>
                <p className="flex pt-2 text-[20px]">
                  <p className="font-semibold pr-2">Quyosh:</p>
                  {time.times.quyosh}
                </p>
                <p className="flex pt-2 text-[20px]">
                  <p className="font-semibold pr-2">Peshin:</p>
                  {time.times.peshin}
                </p>
                <p className="flex pt-2 text-[20px]">
                  <p className="font-semibold pr-2">Asr:</p>
                  {time.times.asr}
                </p>
                <p className="flex pt-2 text-[20px]">
                  <p className="font-semibold pr-2">Shom:</p>
                  {time.times.shom_iftor}
                </p>
                <p className="flex pt-2 text-[20px]">
                  <p className="font-semibold pr-2">Xufton:</p>
                  {time.times.hufton}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Times;
