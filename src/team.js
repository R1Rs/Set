import Character from "./character.js";

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(unit) {
    if (this.members.has(unit)) {
      throw new Error("Такой персонаж уже есть");
    } else {
      this.members.add(unit);
    }
  }

  addAll(...units) {
    this.members.add(units);
  }

  toArray() {
    return Array.from(this.members);
  }
}
