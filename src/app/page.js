"use client";

import GetAnimeById from "@/api/GetAnimeById";
import AskingCharacter from "@/components/AskingCharacter";
import MenuCharacter from "@/components/MenuCharacter";
import { useEffect, useState } from "react";

export default function Home() {
  const [randomId, setRandomId] = useState(null);
  const [dataAnime, setDataAnime] = useState([]);
  const [checkDataAnime, setCheckDataAnime] = useState(false);

  useEffect(() => {
    const id = Math.floor(Math.random() * 10000) + 1;
    console.log("Generated random ID:", id);
    setRandomId(id);
  }, []);

  useEffect(() => {
    let isMounted = true;
    const fetchAnime = async (id) => {
      console.log("Fetching anime with ID:", id);

      const res = await GetAnimeById(id);
      if (!isMounted) return;
      if (res.success) {
        console.log("Detail information anime character:", res.data);
        setDataAnime(res.data);
        setCheckDataAnime(true);
      } else if (res.status === 404) {
        // If 404, try another randomId
        const newId = Math.floor(Math.random() * 10000) + 1;
        console.log("Generated new random ID:", newId);
        setRandomId(newId);
      }
    };

    if (randomId) {
      setTimeout(() => {
        fetchAnime(randomId);
      }, 400);
    }
    return () => {
      isMounted = false;
    };
  }, [randomId]);

  useEffect(() => {
    if (!checkDataAnime) return;
    if (!dataAnime) return;
    console.log("anime year aired: ", dataAnime.aired.prop.from.year);

    if (dataAnime.aired.prop.from.year < 1980 || dataAnime.type != "TV") {
      setTimeout(() => {
        const id = Math.floor(Math.random() * 10000) + 1;
        setRandomId(id);
        setCheckDataAnime(false);
      }, 400);
    }
  }, [checkDataAnime, dataAnime]);

  return (
    <div className="">
      {/* <MenuCharacter /> */}
      <AskingCharacter
        dataCharacter={dataAnime}
        checkDataAnime={checkDataAnime}
      />
    </div>
  );
}
