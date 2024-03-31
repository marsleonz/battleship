const createPlayer = (enemyGameboard) => {
  const attack = (coords) => {
    enemyGameboard.receiveAttack(coords);
  };

  return { attack };
};

const createComputer = (playerGameboard) => {
  const attackedCoords = [];

  const getRandomCoords = () => {
    let row, col;
    do {
      row = Math.floor(Math.random() * 10);
      col = Math.floor(Math.random() * 10);
    } while (
      attackedCoords.some((coords) => coords[0] === row && coords[1] === col)
    );
    return [row, col];
  };

  const attack = (coords) => {
    if (!coords) {
      coords = getRandomCoords();
      attackedCoords.push(coords);
    } else if (
      attackedCoords.some((c) => c[0] === coords[0] && c[1] === coords[1])
    ) {
      return; // Don't attack the same coordinate twice
    }
    playerGameboard.receiveAttack(coords);
    return coords;
  };

  return { attack };
};

module.exports = { createPlayer, createComputer };
