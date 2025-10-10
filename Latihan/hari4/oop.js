class Car {
  constructor(brand, factory) {
    (this.brand = brand),
      (this.factory = factory),
      (this.sound = "honk! honk!vroomcroom");
  }

  get getColor() {
    return (this._ = Red);
  }

  set setColor(c) {
    this._color = c;
  }

  present() {
    return "My factory is" + this.factory;
  }
}
// Instance dari class Car
var innovam = new Car("Innovam", "Toyotwo");
console.log(innovam);
console.log(innovam.present("John"));

innovam.color = "Red";
console.log(innovam);

console.log(innovam.hello());

// Getters dan Setters
class Cars {
  constructor(brand) {
    this._carsname + brand;
  }
  get carname() {
    return this._carsname;
  }
  set carname(x) {
    this._carsname = x;
  }
}

mycars = new Cars("Ford");
mycars.carsname = "Volvo"; // Memanggil setter, mengubah Ford menjadi Volvo
console.log(mycars.carsname); // Volvo
