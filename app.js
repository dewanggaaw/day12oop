//function untuk return object, huruf awalnya kapital, function NamaObject
//nama, umur, gender, nationality

class Human {
  constructor(nama, umur, jenisKel) {
    this.name = nama;
    this.age = umur; //keyObject.parameter = value
    this.gender = jenisKel;

    this.getName = function () {
      console.log("Nama saya: ", this.name);
    };
    this.setGender();
  }
  setGender() {
    if (this.gender === "L") {
      this.gender = "Lakik";
    } else if (this.gender === "P") {
      this.gender = "Perempuan";
    }
  }
}

const Angga = new Human("Angga", 17, "L");
console.log(Angga);
Angga.getName(); //manggil method
