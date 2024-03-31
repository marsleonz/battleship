import createGameboard from "./gameboard";
import { createPlayer, createComputer } from "./player";
import createShip from "./ship";

const playerShipsConfig = [
  { ship: createShip(5), coords: [0, 0], orientation: "horizontal" },
  { ship: createShip(4), coords: [2, 3], orientation: "vertical" },
  { ship: createShip(3), coords: [7, 4], orientation: "horizontal" },
  { ship: createShip(3), coords: [4, 1], orientation: "vertical" },
  { ship: createShip(2), coords: [6, 6], orientation: "horizontal" },
];

const computerShipsConfig = [
  { ship: createShip(5), coords: [0, 0], orientation: "horizontal" },
  { ship: createShip(4), coords: [2, 3], orientation: "vertical" },
  { ship: createShip(3), coords: [6, 6], orientation: "horizontal" },
  { ship: createShip(3), coords: [8, 1], orientation: "horizontal" },
  { ship: createShip(2), coords: [7, 4], orientation: "horizontal" },
];

// Create gameboards with predetermined ship configurations
const playerGameboard = createGameboard(playerShipsConfig);
const computerGameboard = createGameboard(computerShipsConfig);
const player = createPlayer(computerGameboard);
const computer = createComputer(playerGameboard);

const playerBoard = document.getElementById("player-board");
const computerBoard = document.getElementById("computer-board");

const renderGameboard = (gameboard, boardElement) => {
  // Clear the board element
  const checker = boardElement;
  boardElement.innerHTML = "";
  // Render the gameboard on the board element
  gameboard.board.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      const cellElement = document.createElement("div");
      cellElement.classList.add("cell");

      if (cell && gameboard !== computerGameboard) {
        cellElement.classList.add("ship");
      }

      cellElement.addEventListener("click", () => {
        if (gameboard === computerGameboard) {
          player.attack([rowIndex, colIndex]);
          renderGameboard(computerGameboard, computerBoard);
          if (computerGameboard.allSunk()) {
            alert("You win!");
            // Reset the game or display a restart button
          } else {
            computerTurn();
          }
        }
      });

      boardElement.appendChild(cellElement);
    });
  });

  // Render missed attacks
  gameboard.missedAttacks.forEach((coords) => {
    const [row, col] = coords;
    const cellElement = boardElement.children[row * 10 + col];
    cellElement.classList.add("missed");
  });
  gameboard.attackedCells.forEach((coords) => {
    const [row, col] = coords;
    const cellElement = boardElement.children[row * 10 + col];
    cellElement.classList.remove("ship");
    cellElement.classList.add("ship-hit");
  });
};

const computerTurn = () => {
  const coords = computer.attack();
  renderGameboard(playerGameboard, playerBoard);
  if (playerGameboard.allSunk()) {
    alert("Computer wins!");
    // Reset the game or display a restart button
  }
};

// Render gameboards
renderGameboard(playerGameboard, playerBoard);
renderGameboard(computerGameboard, computerBoard);
