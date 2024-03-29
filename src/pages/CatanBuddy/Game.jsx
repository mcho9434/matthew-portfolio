import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import Divider from "../../components/Divider";
import One from "./Dice/One";
import Two from "./Dice/Two";
import Three from "./Dice/Three";
import Four from "./Dice/Four";
import Five from "./Dice/Five";
import Six from "./Dice/Six";
import clsx from "clsx";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const roll = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const rollMap = {
  1: <One />,
  2: <Two />,
  3: <Three />,
  4: <Four />,
  5: <Five />,
  6: <Six />,
};

const Game = ({
  setGameState,
  maxTurnTime,
  playerNames,
  setPlayerNames,
  playerCount,
}) => {
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [turnNumber, setTurnNumber] = useState(0);
  const [firstPlayer, setFirstPlayer] = useState(-1);

  const [isDiceValid, setIsDiceValid] = useState(true);
  const [diceRollTotal, setDiceRollTotal] = useState(-1);
  const [diceRoll1, setDiceRoll1] = useState(-1);
  const [diceRoll2, setDiceRoll2] = useState(-1);
  const [diceHistory, setDiceHistory] = useState([]);
  const [diceFrequency, setDiceFrequency] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  const [isCounting, setIsCounting] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(maxTurnTime);
  const [isTimeUp, setIsTimeUp] = useState(false);

  const players = [
    playerNames.player1,
    playerNames.player2,
    playerNames.player3,
    playerNames.player4,
    playerNames.player5,
    playerNames.player6,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (isCounting) {
        setTimeRemaining((prevTime) => {
          return prevTime - 1;
        });
        if (timeRemaining <= 0) {
          setIsTimeUp(true);
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isCounting, timeRemaining]);

  return (
    <Card>
      <div className="flex flex-col">
        <div className="w-full text-lg">Catan buddy</div>
        <Divider />
        <div className="flex flex-col items-center">
          <div className="text-2xl">
            {players[currentPlayerIndex]
              ? players[currentPlayerIndex]
              : "Player " + (currentPlayerIndex + 1)}
            's turn
          </div>
          {!isTimeUp ? (
            <div
              className={clsx({
                "underline font-semibold text-red-900": timeRemaining <= 10,
              })}
            >
              Time Remaining: {timeRemaining}
            </div>
          ) : (
            <div className="underline font-semibold text-red-900 text-3xl">
              Time is up!
            </div>
          )}

          {diceRollTotal > 0 ? (
            <div className="mt-2 grid grid-cols-2 gap-2">
              {rollMap[diceRoll1]}
              {rollMap[diceRoll2]}
            </div>
          ) : (
            <div className="mt-2">
              Navigate to the first player and hit Roll Dice to start!
            </div>
          )}
          <div className="flex w-full mt-4 justify-center gap-4">
            <div
              className={clsx(
                "p-3 text-center hover:bg-slate-200 shadow-md border border-black rounded-lg cursor-pointer",
                {
                  "pointer-events-none bg-slate-100 text-slate-300 border-slate-500":
                    gameStarted && !isDiceValid,
                }
              )}
              onClick={() => {
                if (isDiceValid) {
                  const roll1 = roll();
                  const roll2 = roll();

                  setDiceRoll1(roll1);
                  setDiceRoll2(roll2);
                  setDiceRollTotal(roll1 + roll2);

                  setDiceHistory((prevHistory) => {
                    return prevHistory.concat([roll1 + roll2]);
                  });

                  setDiceFrequency((previousFrequency) => {
                    previousFrequency[roll1 + roll2 - 2] += 1;
                    return previousFrequency;
                  });

                  setIsCounting(true);
                  setIsDiceValid(false);
                  if (turnNumber === 0) {
                    setTurnNumber(1);
                    setFirstPlayer(currentPlayerIndex);
                  }
                  if (!gameStarted) {
                    setGameStarted(true);
                  }
                }
              }}
            >
              Roll Dice
            </div>
            <div
              className={clsx(
                "p-3 text-center hover:bg-slate-200 shadow-md border border-black rounded-lg cursor-pointer",
                {
                  "pointer-events-none text-slate-300 border-slate-500":
                    gameStarted && isDiceValid,
                }
              )}
              onClick={() => {
                setIsCounting(false);
                setTimeRemaining(maxTurnTime);
                setIsTimeUp(false);
                if (currentPlayerIndex === firstPlayer && gameStarted) {
                  setTurnNumber((prevTurn) => {
                    return prevTurn + 1;
                  });
                }
                setCurrentPlayerIndex((prevIndex) => {
                  if (prevIndex === playerCount - 1) {
                    return 0;
                  } else {
                    return prevIndex + 1;
                  }
                });
                setIsDiceValid(true);
              }}
            >
              Next Player
            </div>
            {gameStarted && (
              <div
                className={clsx(
                  "p-3 text-center hover:bg-slate-200 shadow-md border border-black rounded-lg cursor-pointer",
                  {
                    "pointer-events-none text-slate-300 border-slate-500":
                      isDiceValid,
                  }
                )}
                onClick={() => {
                  setIsCounting((prevCounting) => {
                    return !prevCounting;
                  });
                }}
              >
                {isCounting ? "Pause Timer" : "Resume Timer"}
              </div>
            )}
            <div
              className="p-3 text-center hover:bg-slate-200 shadow-md border border-black rounded-lg cursor-pointer"
              onClick={() => {
                setPlayerNames({
                  player1: "",
                  player2: "",
                  player3: "",
                  player4: "",
                  player5: "",
                  player6: "",
                });
                setGameState("Setup");
              }}
            >
              Finish Game
            </div>
          </div>
          <div className="mt-2 text-lg">
            Previous rolls:{" "}
            {diceHistory
              .slice(Math.max(diceHistory.length - 10, 0))
              .reverse()
              .join(", ")}
          </div>
          <div className="w-full">
            <Bar
              className="w-full"
              options={{ responsive: true }}
              data={{
                labels: [
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  "10",
                  "11",
                  "12",
                ],
                datasets: [
                  {
                    label: "Dice Distribution",
                    data: diceFrequency,
                    backgroundColor: ["rgba(0,0,0, 0.5)"],
                    borderColor: ["rgba(0,0,0)"],
                    borderWidth: 1,
                    hoverOffset: 4,
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Game;
