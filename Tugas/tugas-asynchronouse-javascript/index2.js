var readBooksPromise = require("./promise.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
];

var totalTime = 10000; // 10 detik

// Fungsi rekursif menggunakan Promise
function bacaBukuPromise(waktu, index) {
  if (index < books.length) {
    readBooksPromise(waktu, books[index])
      .then(function (sisaWaktu) {
        // Lanjut membaca buku berikutnya
        bacaBukuPromise(sisaWaktu, index + 1);
      })
      .catch(function () {
        console.log("Waktu habis, tidak bisa membaca buku berikutnya.");
      });
  } else {
    console.log("Semua buku sudah dibaca!");
  }
}

// Jalankan fungsi mulai dari buku pertama
bacaBukuPromise(totalTime, 0);
