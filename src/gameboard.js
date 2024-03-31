const createGameboard = (shipsConfig) => {
  const board = Array.from({ length: 10 }, () => Array(10).fill(null));
  const missedAttacks = [];
  const ships = [];

  const placeShip = (ship, coords, orientation) => {
    const [row, col] = coords;
    const length = ship.length;

    if (
      row < 0 ||
      row >= 10 ||
      col < 0 ||
      col >= 10 ||
      (orientation === "horizontal" && col + length > 10) ||
      (orientation === "vertical" && row + length > 10)
    ) {
      // Invalid placement, do not place the ship
      return;
    }

    if (orientation === "horizontal") {
      for (let i = 0; i < length; i++) {
        if (board[row][col + i] !== null) {
          // There's already a ship in this position, do not place the ship
          return;
        }
      }
      for (let i = 0; i < length; i++) {
        board[row][col + i] = ship;
      }
    } else {
      for (let i = 0; i < length; i++) {
        if (board[row + i][col] !== null) {
          // There's already a ship in this position, do not place the ship
          return;
        }
      }
      for (let i = 0; i < length; i++) {
        board[row + i][col] = ship;
      }
    }
    ships.push(ship);
  };

  shipsConfig.forEach(({ ship, coords, orientation }) => {
    placeShip(ship, coords, orientation);
  });
  const receiveAttack = (coords) => {
    const [row, col] = coords;
    const ship = board[row][col];

    if (ship) {
      ship.hit();
    } else {
      missedAttacks.push(coords);
    }
  };

  const allSunk = () => {
    return ships.every((ship) => ship.isSunk());
  };

  return { board, placeShip, missedAttacks, receiveAttack, allSunk };
};

export default createGameboard;
