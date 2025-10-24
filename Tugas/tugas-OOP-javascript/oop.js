/**
 * 1. Terdapat sebuah class Animal yang memiliki sebuah constructor name, default property legs= 4 dan cold_blooded = false.
 */
//a. Buatlah class Animal yang menerima satu parameter constructor berupa name. Secara default class Animal akan memiliki property yaitu legs (jumlah kaki) yang bernilai 4 dan cold_blooded bernilai false.

class Animal {
  constructor(name, legs = 4, cold_blooded = false) {
    this.name = name;
    this.legs = legs;
    this.cold_blooded = cold_blooded;
  }
}

var sheep = new Animal("shaun");

console.log(sheep.name); // "shaun"
console.log(sheep.legs); // 4
console.log(sheep.cold_blooded); // false
sheep.legs = 3;
console.log(sheep.legs);

console.log("-----------------------------------");

//b. Buatlah class Frog dan class Ape yang merupakan inheritance dari class Animal. Perhatikan bahwa Ape (Kera) merupakan hewan berkaki 2, hingga dia tidak menurunkan sifat jumlah kaki 4 dari class Animal. class Ape memiliki function yell() yang menampilkan “Auooo” dan class Frog memiliki function jump() yang akan menampilkan “hop hop”.
class Ape extends Animal {
  constructor(name) {
    super(name);
  }

  yell() {
    console.log("Auooo");
  }
}

var sungokong = new Ape("kera sakti");
sungokong.yell(); // "Auooo"
sungokong.legs = 2;
console.log(sungokong.name);
console.log(sungokong.legs);
console.log(sungokong.cold_blooded);

console.log("-----------------------------------");

class Frog extends Animal {
  constructor(name) {
    super(name);
  }

  jump() {
    console.log("hop hop");
  }
}

var kodok = new Frog("buduk");
kodok.jump(); // "hop hop"
console.log(kodok.name);
console.log(kodok.legs);
console.log(kodok.cold_blooded);

console.log("-----------------------------------");

/**
 *  2. Terdapat sebuah class dengan nama Clock yang ditulis seperti penulisan pada function, ubahlah fungsi tersebut menjadi class dan pastikan fungsi tersebut tetap berjalan dengan baik. Jalankan fungsi di terminal/console Anda untuk melihat hasilnya
 */

class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    var output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(this.render.bind(this), 1000);
  }
}

var clock = new Clock({ template: "h:m:s" });
clock.start();