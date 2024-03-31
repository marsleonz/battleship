import createShip from "./ship";
describe("Ship", () => {
  test("can create a ship with a length", () => {
    const ship = createShip(4);
    expect(ship.length).toBe(4);
  });

  test("has the correct initial hits", () => {
    const ship = createShip(4);
    expect(ship.hits).toBe(0);
  });
  test("can record hits", () => {
    const ship = createShip(4);
    ship.hit();
    expect(ship.hits).toBe(1);
    ship.hit();
    expect(ship.hits).toBe(2);
  });

  test("isSunk() returns true when all positions are hit", () => {
    const ship = createShip(4);
    for (let i = 0; i < 4; i++) {
      ship.hit();
    }
    expect(ship.isSunk()).toBe(true);
  });

  test("isSunk() returns false when not all positions are hit", () => {
    const ship = createShip(4);
    for (let i = 0; i < 3; i++) {
      ship.hit();
    }
    expect(ship.isSunk()).toBe(false);
  });
});
