import React, { useEffect, useState } from "react";

export const GameContext = React.createContext({});

export function GameProvider(props) {
  const [deckOfHeroes, setDeckOfHeroes] = useState([]);

  // useEffect(() => {
  //   const gameTimeStorage = localStorage.getItem("gameTime");
  //   if (gameTimeStorage) {
  //     setDeckOfHeroes(JSON.parse(gameTimeStorage));
  //   } else {
  //     setDeckOfHeroes([]);
  //   }
  // }, []);

  return (
    <GameContext.Provider 
      value={{ 
        deckOfHeroes, 
        setDeckOfHeroes 
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export const useGame = () => React.useContext(GameContext);