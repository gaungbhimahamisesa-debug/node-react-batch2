var perkenalan = "Nama saya adalah";
var nama = ""; // Gaung Bhima Hamisesa
var kata1 = "saya";
var kata2 = "berharap";
var kata3 = "untuk";
var kata4 = "menjadi";
var kata5 = "seorang";
var kata6 = "software";
var kata7 = "engineer";
var kalimat =
  perkenalan +
  " " +
  nama +
  "." +
  kata1 +
  " " +
  kata2 +
  " " +
  kata3 +
  " " +
  kata4 +
  " " +
  kata5 +
  " " +
  kata6 +
  " " +
  kata7 +
  ".";
console.log(kalimat);

var abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var angka = "0123456789";
// 1. password1 = "TES123"
var password1 =
  abjad[19] + abjad[4] + abjad[18] + abjad[19] + angka[1] + angka[2] + angka[3];
console.log("password ke satu: " + password1);
// 2. password2 + "B3B3K"
var password2 = abjad[1] + angka[3] + abjad[1] + angka[3] + abjad[10];
console.log("password ke dua: " + password2);
// 3. password3 + "R4H4514"
var password3 =
  abjad[17] + angka[4] + abjad[7] + angka[4] + angka[5] + angka[1] + angka[4];
console.log("password ke tiga: " + password3);

var sentence2 = "wow Javascript is so cool";

var exampleFirstWord2 = sentence2.substring(0, 3); // "wow"
var secondWord2 = sentence2.substring(4, 14); //"JavaScript"
var thirdWord2 = sentence2.substring(15, 17); // "is"
var fourthWord2 = sentence2.substring(18, 20); // "so"
var fitjWord2 = sentence2.substring(21, 25); // "cool"

console.log("First Word: " + exampleFirstWord2); // First Word: wow
console.log("Second Word: " + secondWord2); // Second Word: JavaScript
console.log("Third Word: " + thirdWord2); // Third Word: is
console.log("Fourth Word: " + fourthWord2); // Fourth Word: so
console.log("Fifth Word: " + fifthWord2); // Fifth Word: cool
