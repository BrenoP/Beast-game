import React, { useEffect, useState } from "react";

export const GameContext = React.createContext({});

export function GameProvider(props) {
  const [gameBegun, setGameBegun] = useState(false);
  const [deckOfHeroes, setDeckOfHeroes] = useState([]);
  const [coins, setCoins] = useState(3);

  return (
    <GameContext.Provider 
      value={{ 
        gameBegun, 
        setGameBegun,
        deckOfHeroes, 
        setDeckOfHeroes,
        coins, 
        setCoins
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export const useGame = () => React.useContext(GameContext);