// LOOPING PERTAMA (Menghitung maju menggunakan while)
console.log("LOOPING PERTAMA");
var i = 2; // Mulai dari 2
while (i <= 20) {
  // LanjutkAN selama i <= 20
  console.log(i + " - I love coding");
  i += 2; // Tambah 2 setiap literasi
}

// LOOPING KEDUA (Menghitung mundur menggunakan do-while)
console.log("LOOPING KEDIA");
var j = 20; // Mulai dari 20
do {
  console.log(j + " - I will become a MERN Stack  developer");
  j -= 2; // Kurangi 2 setiap iterasi
} while (j >= 2); // Lanjutkan selama j >= 2

// Perulangan untuk angka 1 sampai 20
for (var i = 1; i <= 20; i++) {
  // Cek apakah angka ganjil atau genap
  if (i % 2 === 0) {
    console.log(i + " - Angka Genap");
  } else {
    console.log(i + " - Angka Ganjil");
  }
}

// Perulangan untuk angka 1 sampai 20
for (var i = 1; i <= 20; i++) {
  // Cek apakah angka adalah kelipatan 3
  if (i % 3 === 0) {
    //Jika kelipatan 3 dan ganjil
    if (i % 2 !== 0) {
      console.log(i + " - I Love Coding");
    }
    // Jika kelipatan 3 dan genap
    else {
      console.log(i + " - ToT");
    }
  }
  // Jika bukan kelipatan 3, cek ganjil atau genap
  else {
    if (i % 2 === 0) {
      console.log(i + " - Berkualitas");
    } else {
      console.log(i + " - Santai");
    }
  }
}

// Perulangan  untuk membuat segitiga dengan tinggi 7
for (var i = 1; i <= 7; i++) {
  // Buat String dengan i buah tanda pagar
  var pagar = "#".repeat(i);
  console.log(pagar);
}

//Deklarasi variabel
var sentence = "Fullstack Developer";

// Perulangan untuk memeriksa setiap karakter
for (var i = 0; i < sentence.length; i++) {
  var char = sentence[i].toLowerCase(); // Ubah ke huruf kecil untuk mempermudah pengecekan
  // Cek apakah karakter bukan vokal
  if (
    char !== "a" &&
    char !== "e" &&
    char !== "i" &&
    char !== "o" &&
    char !== "u"
  ) {
    console.log(sentence[i]); //Cetak karakter asli (bukan huruf kecil)
  }
}
