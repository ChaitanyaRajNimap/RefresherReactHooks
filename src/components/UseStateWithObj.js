import React, { useState } from "react";

// const avengersObj = {
//   IronMan: { name: "Tony Stark", Dialouge: `I'm Iron Man!` },
//   CaptainAmerica: {
//     name: "Steve Roger",
//     Dialouge: `I can do this all day!`,
//   },
//   BlackPanther: { name: `T'Challa `, Dialouge: `Wakanda Forever!` },
// };

const avengersObj = {
  name: "Tony Stark",
  Dialouge: `I'm Iron Man!`,
};

function UseStateWithObj() {
  const [avengers, setAvengers] = useState(avengersObj);

  return (
    <>
      <h1>Avengers</h1>
      <h2> Name : {avengers.name}</h2>
      <h2> Dialouge : {avengers.Dialouge}</h2>
      <button
        onClick={() =>
          setAvengers({
            name: "Steve Roger",
            Dialouge: "I can do this all day!",
          })
        }
      >
        Add new avenger
      </button>
    </>
  );
}

export default UseStateWithObj;
