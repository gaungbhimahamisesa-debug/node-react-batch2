var readBooks = require("./callback.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "Komik", timeSpent: 1000 },
];

// waktu awal 10 detik (1000 ms)
var time = 10000;

// fungsi untuk membaca buku satu per satu menggunakan callback
function bacaBuku(waktu, index) {
  if (index < books.length) {
    readBooks(waktu, books[index], function (sisaWaktu) {
      if (sisaWaktu > 0) {
        bacaBuku(sisaWaktu, index + 1); // lanjut baca buku berikutnya
      } else {
        console.log("Waktu habis, tidak sempat membaca buku berikutnya.");
      }
    });
  } else {
    console.log("Semua buku sudah dibaca!");
  }
}

// jalankan fungsi
bacaBuku(time, 0);
