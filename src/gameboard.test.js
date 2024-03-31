// gameboard.test.js
import createGameboard from "./gameboard";
import createShip from "./ship";

describe("Gameboard", () => {
  let gameboard;

  beforeEach(() => {
    gameboard = createGameboard();
  });

  test("can place a ship on the board", () => {
    const ship = createShip(3);
    gameboard.placeShip(ship, [0, 0], "horizontal");
    expect(gameboard.board[0][0]).toBe(ship);
    expect(gameboard.board[0][1]).toBe(ship);
    expect(gameboard.board[0][2]).toBe(ship);
  });

  test("can record a missed attack", () => {
    gameboard.receiveAttack([0, 0]);
    expect(gameboard.missedAttacks).toContainEqual([0, 0]);
  });

  test("can record a hit on a ship", () => {
    const ship = createShip(3);
    gameboard.placeShip(ship, [0, 0], "horizontal");
    gameboard.receiveAttack([0, 0]);
    expect(ship.hits).toBe(1);
  });

  test("can report if all ships are sunk", () => {
    const ship1 = createShip(3);
    const ship2 = createShip(4);
    gameboard.placeShip(ship1, [0, 0], "horizontal");
    gameboard.placeShip(ship2, [2, 2], "vertical");

    expect(gameboard.allSunk()).toBe(false);

    for (let i = 0; i < 3; i++) {
      gameboard.receiveAttack([0, i]);
    }
    expect(gameboard.allSunk()).toBe(false);

    for (let i = 0; i < 4; i++) {
      gameboard.receiveAttack([2 + i, 2]);
    }
    expect(gameboard.allSunk()).toBe(true);
  });
});
