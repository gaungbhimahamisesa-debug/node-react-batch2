// ===== CLASS ANIMAL =====
class Animal {
  constructor(name) {
    this._name = name;
    this._legs = 4;
    this._cold_blooded = false;
  }

  // Getter dan Setter untuk name
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  // Getter dan Setter untuk legs
  get legs() {
    return this._legs;
  }

  set legs(value) {
    this._legs = value;
  }

  // Getter dan Setter untuk cold_blooded
  get cold_blooded() {
    return this._cold_blooded;
  }

  set cold_blooded(value) {
    this._cold_blooded = value;
  }
}

// ===== CONTOH PENGGUNAAN CLASS ANIMAL =====
var sheep = new Animal("shaun");
console.log(sheep.name); // "shaun"
console.log(sheep.legs); // 4
console.log(sheep.cold_blooded); // false
sheep.legs = 3;
console.log(sheep.legs); // 3

// ===== CLASS APE (TURUNAN DARI ANIMAL) =====
class Ape extends Animal {
  constructor(name) {
    super(name);
    this._legs = 2; // Ape memiliki 2 kaki
  }

  yell() {
    console.log("Auooo");
  }
}

// ===== CLASS FROG (TURUNAN DARI ANIMAL) =====
class Frog extends Animal {
  constructor(name) {
    super(name);
  }

  jump() {
    console.log("hop hop");
  }
}

// ===== CONTOH PENGGUNAAN CLASS APE =====
var sungokong = new Ape("kera sakti");
sungokong.yell(); // "Auooo"
console.log(sungokong.name); // "kera sakti"
console.log(sungokong.legs); // 2
console.log(sungokong.cold_blooded); // false

// ===== CONTOH PENGGUNAAN CLASS FROG =====
var kodok = new Frog("buduk");
kodok.jump(); // "hop hop"
console.log(kodok.name); // "buduk"
console.log(kodok.legs); // 4
console.log(kodok.cold_blooded); // false
