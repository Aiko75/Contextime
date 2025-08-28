"use client";

import GetAnime from "@/api/GetAnime";
import { useEffect, useState } from "react";

export default function MenuCharacter() {
  const [dataAnime, setDataAnime] = useState([]);
  useEffect(() => {
    const fetchData = GetAnime();
    fetchData.then((res) => {
      if (res.success) {
        setDataAnime(res.data);
        // console.log("Anime data fetched successfully:", res.data);
      }
    });
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-4 max-w-4xl mx-auto">
      {dataAnime.map((anime) => (
        <div
          key={anime.mal_id}
          className="bg-white rounded-xl shadow-md flex flex-col items-center p-4 transition-transform hover:scale-105 hover:shadow-lg cursor-pointer"
        >
          <img
            src={anime.images.jpg.image_url}
            alt={anime.title_english ?? anime.title}
            className="w-24 h-24 object-cover rounded-full mb-2 border-2 border-gray-200"
          />
          <h2 className="text-lg font-semibold text-gray-800 text-center truncate w-full">
            {anime.title_english ?? anime.title}
          </h2>
        </div>
      ))}
    </div>
  );
}
