"use client";
import Times from "@/components/Times";
import React from "react";

const HomePage = () => {
  return (
    <div className="container mx-auto mt-20 pl-5 pr-4">
      <p className="flex justify-center text-3xl font-semibold">
        Toshkent shahri
      </p>
      <div className="flex justify-between pt-5">
        <p className="font-semibold text-2xl">07 Mart 2024 - 25 Shaʼbon 1445</p>
        <div>
          <button className="rounded-md border-2 p-1 w-20 border-sky-700 hover:bg-sky-700 hover:text-white transition duration-150 ease-out hover:ease-in">
            Bugun
          </button>
          <button className="rounded-md border-2 p-1 w-20 border-sky-700 hover:bg-sky-700 hover:text-white transition duration-150 ease-out hover:ease-in">
            Haftalik
          </button>
          <button className="rounded-md border-2 p-1 w-20 border-sky-700 hover:bg-sky-700 hover:text-white transition duration-150 ease-out hover:ease-in">
            Oylik
          </button>
          <button className="rounded-md border-2 p-1 w-20 border-sky-700 hover:bg-sky-700 hover:text-white transition duration-150 ease-out hover:ease-in">
            Yillik
          </button>
        </div>
        <select className="outline-none border-2 w-28">
          <option value="toshkent">Toshkent</option>
          <option value="nukus">Nukus</option>
          <option value="termiz">Termiz</option>
          <option value="zоmin">Zоmin</option>
        </select>
      </div>
      <Times />
    </div>
  );
};

export default HomePage;
