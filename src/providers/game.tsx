import React, { useEffect, useState } from "react";

export const GameContext = React.createContext({});

export function GameProvider(props) {
  const [game, setGame] = useState({
    gameTime: 1
  });

  useEffect(() => {
    const gameTimeStorage = localStorage.getItem("gameTime");
    if (gameTimeStorage) {
      setGame(JSON.parse(gameTimeStorage));
    } else {
      setGame({
        gameTime: 1
      });
    }
  }, []);

  return (
    <GameContext.Provider value={{ game, setGame }}>
      {props.children}
    </GameContext.Provider>
  );
};

export const useGame = () => React.useContext(GameContext);