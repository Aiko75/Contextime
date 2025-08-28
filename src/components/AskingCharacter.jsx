"use client";

import { useState } from "react";

export default function AskingCharacter({ dataCharacter, checkDataAnime }) {
  const [guess, setGuess] = useState(false);
  const [firstTimeGuess, setFirstTimeGuess] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handleCheck = () => {
    if (inputValue?.toLowerCase() === dataCharacter.title.toLowerCase()) {
      setGuess(true);
      setFirstTimeGuess(true);
    } else {
      setGuess(false);
      setFirstTimeGuess(true);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-[350px] w-full p-6 bg-gray-50 rounded-xl shadow-lg max-w-xl mx-auto">
      {checkDataAnime ? (
        <div className="mb-2">Data is available</div>
      ) : (
        <div className="mb-2">No data available</div>
      )}
      {guess ? (
        <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 w-full">
          <img
            src={dataCharacter.images.jpg.image_url}
            alt={dataCharacter.title}
            className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-blue-200 shadow"
          />
          <h1 className="text-2xl font-bold text-blue-700 mb-2 text-center">
            {dataCharacter.title}
          </h1>
          <span className="text-green-500 font-semibold">Correct!</span>
        </div>
      ) : (
        <div className="flex flex-col items-center w-full gap-4">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
            Guess the anime character
          </h1>
          <input
            type="text"
            className="border border-gray-300 rounded-lg w-full max-w-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Please input anime name"
          />
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors w-fit max-w-md"
            onClick={handleCheck}
          >
            Answer
          </button>
          {firstTimeGuess &&
            (guess ? (
              <h1 className="text-green-500 font-semibold">"Dung roi"</h1>
            ) : (
              <h1 className="text-red-500 font-semibold">"Sai roi"</h1>
            ))}
        </div>
      )}
    </div>
  );
}
