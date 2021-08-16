import { useState } from "react";
import "./styles.css";

const gamesData = {
  Action: [
    {
      name: "BGMI Mobile",
      desc: "Gameplay. Battlegrounds is a player versus player shooter game in which up to one hundred players fight in a battle royale, a type of large-scale last man standing deathmatch where players fight to remain the last alive. Players can choose to enter the match solo, duo, or with a small team of up to four people.",
      review: "review : 4.9/5",
    },
    {
      name: "COD: Mobile",
      desc: "Call of Duty is a first-person shooter video game based on id Tech 3, and was released on October 29, 2003. The game was developed by Infinity Ward and published by Activision. The game simulates the infantry and combined arms warfare of World War II.",
      review: "review : 4.6/5",
    },
    {
      name: "Fortnite",
      desc: "Fortnite is a survival game where 100 players fight against each other in player versus player combat to be the last one standing. It is a fast-paced, action-packed game, not unlike The Hunger Games, where strategic thinking is a must in order to survive. There are an estimated 125 million players on Fortnite.",
      review: "review : 4.7/5",
    },
  ],
  Advanture: [
    {
      name: "The walking dead",
      desc: "The Walking Dead is a graphic adventure, played from a third-person perspective with a variety of cinematic camera angles, in which the player, as protagonist Lee Everett, works with a rag-tag group of survivors to stay alive in the midst of a zombie apocalypse.",
      review: "review : 4.5/5",
    },
    {
      name: "Nimja Arashi",
      desc: "Ninja Arashi is an intense platformer with mixed RPG elements. In this game, you play as arashi, a former legendary ninja who fights his way through the corrupted world to save his kidnapped son from the hand of the devil Orochi.",
      review: "review : 4.5/5",
    },
    {
      name: "Alto's Adventure",
      desc: "Alto's Adventure is a side-scrolling endless runner snowboarding game. The player character moves automatically through procedurally generated landscapes towards the right side of the screen and the player can only control when to jump.",
      review: "review : 4.6/5",
    },
  ],
  Strategy: [
    {
      name: "Clash of clans",
      desc: "Clash of Clans is an online multiplayer game in which players form communities called clans, train troops, and attack other players to earn resources. ... Gold and elixir can be used to build and upgrade defenses and traps that protect the player's village from other players' attacks and to build and upgrade buildings.",
      review: "review : 4.6/5",
    },
    {
      name: "Clash Royale",
      desc: "Clash Royale is a tower rush video game which pits players in games featuring two or four players (1v1 or 2v2) in which the objective is to destroy the most opposing towers, with the destruction of the King's Tower being an instantaneous win.",
      review: "review : 4.4/5",
    },
    {
      name: "Among us",
      desc: "Play online or over local WiFi with 4-15 players as you attempt to prep your spaceship for departure, but beware as one will be an impostor bent on killing everyone! Crewmates can win by completing all tasks or discovering and voting the impostor off the ship.",
      review: "review : 3.5/5",
    },
  ],
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
                  <h2>{game.name}</h2>
                  <p>{game.desc}</p>
                  <h3>{game.review}</h3>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
