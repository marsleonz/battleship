// player.test.js

import createGameboard from "./gameboard";
import { createPlayer, createComputer } from "./player";
describe("Player", () => {
  let player;
  let enemyGameboard;

  beforeEach(() => {
    enemyGameboard = createGameboard();
    player = createPlayer(enemyGameboard);
  });

  test("can attack enemy gameboard", () => {
    player.attack([0, 0]);
    expect(enemyGameboard.missedAttacks).toContainEqual([0, 0]);
  });
});

describe("Computer", () => {
  let computer;
  let playerGameboard;

  beforeEach(() => {
    playerGameboard = createGameboard();
    computer = createComputer(playerGameboard);
  });

  test("can attack player gameboard", () => {
    computer.attack();
    expect(playerGameboard.missedAttacks.length).toBe(1);
  });

  test("does not attack the same coordinate twice", () => {
    const attackedCoords = computer.attack();
    console.log("att", attackedCoords);
    computer.attack(attackedCoords);
    expect(playerGameboard.missedAttacks.length).toBe(1);
  });
});
