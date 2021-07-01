import { useState } from "react";
import "./styles.css";

const gamesData = {
  Action: [
    {
      name: "PUBG Mobile",
      review: "4.9/5"
    },
    {
      name: "COD: Mobile",
      review: "4.6/5"
    }
  ],
  Advanture: [
    {
      name: "The walking dead",
      review: "4.5/5"
    },
    {
      name: "Nimja Arashi",
      review: "4.5/5"
    }
  ],
  Strategy: [
    {
      name: "Clash of clans",
      review: "4.6/5"
    },
    {
      name: "Among us",
      review: "3.5/5"
    }
  ]
};

export default function App() {
  const [category, setCategory] = useState("Action");
  function clickHandler(type) {
    setCategory(type);
  }
  const gamesInArr = Object.keys(gamesData);
  return (
    <div className="App">
      <div className="mainDiv">
        <h1>
          <span>🎮</span> Mobile games
        </h1>
        <p>
          The games given below are my favourite ones, check out different
          categories.
        </p>
        {gamesInArr.map((type) => {
          return (
            <button key={type} onClick={() => clickHandler(type)}>
              {type}
            </button>
          );
        })}

        <hr />
        <div>
          <ul>
            {gamesData[category].map((game) => {
              return (
                <li>
                  <h2>{game.name}</h2> {game.review}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
