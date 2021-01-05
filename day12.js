function aboutMe(nama, umur, gender, nationality, opacity) {
  this.nama = nama;
  this.gender = gender;
  this.nationality = nationality;
  this.opacity = opacity;

  this.getName = function () {
    console.log("Nama saya:", this.nama);
  };
}

const angga = new aboutMe("Angga", 17, "Lakik", "Indonesia", "Solid");
console.log(angga);
angga.getName();
