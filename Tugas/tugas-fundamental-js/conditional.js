var sentence =
  "Saya Sangat Senang Sekali Belajar Programming dan Saya Juga Senang Belajar Javascript";

// Calculate the length of the string
var length = sentence.length;

// Categorize based on length
var category;
if (length < 10) {
  category = "pendek";
} else if (length >= 10 && length <= 30) {
  category = "sedang";
} else {
  category = "panjang";
}

//Output the result
console.log("Length: " + length); // For verification
console.log("Category: " + category);

// Variable for nilai
var nilai = 75;

//Determine the index based on nilai
var indeks;
if (nilai >= 80) {
  indeks = "A";
} else if (nilai >= 70 && nilai < 80) {
  indeks = "B";
} else if (nilai >= 60 && nilai < 70) {
  indeks = "C";
} else if (nilai >= 50 && nilai < 60) {
  indeks = "D";
} else {
  indeks = "D";
}

// Variables for tanggal and bulan
var tanggal = 17;
var bulan = 8;

// Output the result
console.log("Nilai: " + nilai);
console.log("Indeks: " + indeks);
console.log("Tanggal: " + tanggal);
console.log("Bulan: " + bulan);

// Deklarasi variabel untuk tanggal lahir
var tanggal = 30; // tanggal lahir
var bulan = 6; // bulan juni
var tahun = 1998; // tahun lahir

// Variabel untuk menyimpan nama bulan
var namaBulan;

// Switch case untuk menentukan nama bulan berdasarkan nilai bulan
switch (bulan) {
  case 1:
    namaBulan = "Januari";
    break;
  case 2:
    namaBulan = "Februari";
    break;
  case 3:
    namaBulan = "Maret";
    break;
  case 4:
    namaBulan = "April";
    break;
  case 5:
    namaBulan = "Mei";
    break;
  case 6:
    namaBulan = "Juni";
    break;
  case 7:
    namaBulan = "Juli";
    break;
  case 8:
    namaBulan = "Agustus";
    break;
  case 9:
    namaBulan = "September";
    break;
  case 10:
    namaBulan = "Oktober";
    break;
  case 11:
    namaBulan = "November";
    break;
  case 12:
    namaBulan = "Desember";
    break;
  default:
    namaBulan = "Bulan tidak Valid";
    break;
}

// Menampilkan tanggal lahir dalam format: tanggal namaBulan tahun
console.log(tanggal + " " + namaBulan + " " + tahun);
