import Team from "../src/team.js";
import Character from "../src/character.js";

test("test number", () => {
  const petr = new Character("petr", "p", 20, 20);
  const petr2 = new Character("petr2", "p", 20, 20);
  const petr3 = new Character("petr3", "p", 20, 20);

  const teamTest = new Team();
  teamTest.add(petr);

  const received = teamTest.members.has(petr);
  const expected = true;

  teamTest.addAll(petr, petr2, petr3);
  const received1 = teamTest.members.size;
  const expected1 = 2;

  const received2 = teamTest.toArray();
  const expected2 = [];

  const received3 = teamTest.add(petr);
  const expected3 = console.error("Такой персонаж уже есть");


  expect(received).toEqual(expected);
  expect(received1).toEqual(expected1);
  expect(received2).toEqual(expected2);
  expect(received3).toEqual(expected3);
});
