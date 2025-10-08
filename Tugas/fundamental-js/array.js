// Deklarasi array
var dataPeserta = ["john", "laki-laki", "30", "programmer"];
// Membuat string output sesuai format
var output =
  " Halo, nama saya " +
  dataPeserta[0] +
  ". saya " +
  dataPeserta[1] +
  " berumur " +
  dataPeserta[2] +
  " bekerja sebagai seorang " +
  dataPeserta[3];
// Menampilkan output
console.log(output);

// Deklarasi variabel sayuran sebagai array kosong
var sayuran = [];

// Menambahkan data sayuran ke array menggunakan push()
sayuran.push("Kangkung");
sayuran.push("Bayam");
sayuran.push("Buncis");
sayuran.push("Kubis");
sayuran.push("Timun");
sayuran.push("Seledri");
sayuran.push("Tauge");

// Menampilkan array sayuran
console.log(sayuran);

// Deklarasi variabel sayuran dan mengisi data
var sayuran = [
  "Kangkung",
  "Bayam",
  "Buncis",
  "Kubis",
  "Timun",
  "Seledri",
  "Tauge",
];
// Mengurutkan array berdasarkan alfabet
sayuran.sort();
// Menampilkan array dengan perulangan for dan nomor urut
for (var i = 0; i < sayuran.length; i++) {
  console.log(i + 1 + " - " + sayuran[i]);
}

var word = "car";
var result = [];

for (var i = 0; i < word.length; i++) {
  for (var j = i + 1; j <= word.length; j++) {
    result.push(word.substring(i, j));
  }
}

console.log(result);

// Deklarasi variabel
var numbers = [4, 5, 1, 4, 6, 8, 9, 21];

// Inisialisasi variabel untuk menyimpan jumlah
var sum = 0;

// Perulangan untuk menjumlahkan setiap elemen
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

// Menampilkan hasil
console.log(sum);

// Deklarasi variabel
var kumpulanAngka = [
  [1, 3, 5, 7, 8, 9],
  [4, 5, 6, 2, 3, 1],
  [6, 7, 8, 1, 3, 5],
];

// Array untuk menyimpan hasil penjumlahan
var hasil = [];

// Iterasi setiap sub-array
for (var i = 0; i < kumpulanAngka.length; i++) {
  var sum = 0;
  // Menjumlahkan elemen dalam sub-array
  for (var j = 0; j < kumpulanAngka[i].length; j++) {
    sum += kumpulanAngka[i][j];
  }
  // Menyimpan hasil penjumlahan ke array hasil
  hasil.push(sum);
}

// Menampilkan hasil
console.log(hasil);
