import React, { useState } from "react";

const arr = [
  {
    name: "Luffy",
    age: 19,
    show: "One Piece",
  },
  {
    name: "Naruto",
    age: 16,
    show: "Naruto",
  },
  {
    name: "Ichigo",
    age: 21,
    show: "Bleach",
  },
];

function UseStateWithArr() {
  const [animes, setAnimes] = useState(arr);
  const clickHandler = () => {
    setAnimes((prevAnime) => {
      return [
        ...prevAnime,
        { name: "Saitama", age: 25, show: "One punch man" },
      ];
    });
  };

  return (
    <>
      <h1>Today's Anime Charcter is </h1>
      <ul>
        {animes.map((anime) => (
          <li>My name is {anime.name} </li>
        ))}
      </ul>
      <button onClick={clickHandler}>Add Saitama</button>
    </>
  );
}

export default UseStateWithArr;
