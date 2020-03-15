export default class Character {
  constructor(name, type, attack, defence) {
    this.name = name;
    this.type = type;
    this.attack = attack;
    this.defence = defence;
    this.level = 1;
    this.health = 100;
    this.power = false;
    this.attackValue = 0;
  }
}
