// functionalProgramming.js

// First-class functions untuk luas dan keliling
const luasPersegi = (sisi) => sisi * sisi;
const kelilingPersegi = (sisi) => 4 * sisi;

const luasPersegiPanjang = (panjang, lebar) => panjang * lebar;
const kelilingPersegiPanjang = (panjang, lebar) => 2 * (panjang + lebar);

// Fungsi hitung yang menerima fungsi luas dan keliling sebagai parameter
function hitungBangunDatar(nama, hitungLuas, hitungKeliling, ...params) {
  console.log(`Bangun Datar: ${nama}`);
  console.log(`Luas: ${hitungLuas(...params)}`);
  console.log(`Keliling: ${hitungKeliling(...params)}`);
  console.log("---------------------------");
}

// Fungsi untuk menghitung persegi
function hitungPersegi(sisi) {
  hitungBangunDatar("Persegi", luasPersegi, kelilingPersegi, sisi);
}

// Fungsi untuk menghitung persegi panjang
function hitungPersegiPanjang(panjang, lebar) {
  hitungBangunDatar(
    "Persegi Panjang",
    luasPersegiPanjang,
    kelilingPersegiPanjang,
    panjang,
    lebar
  );
}

// Contoh pemanggilan
hitungPersegi(8);
hitungPersegiPanjang(12, 7);

// functionalProgramming.js

// --- First-class functions untuk bangun ruang ---

// Kubus
const volumeKubus = (sisi) => sisi ** 3;
const luasPermukaanKubus = (sisi) => 6 * sisi ** 2;

// Balok
const volumeBalok = (p, l, t) => p * l * t;
const luasPermukaanBalok = (p, l, t) => 2 * (p * l + p * t + l * t);

// Fungsi utama yang menerima fungsi volume dan luasPermukaan sebagai parameter
function hitungBangunRuang(nama, hitungVolume, hitungLuasPermukaan, ...params) {
  console.log(`Bangun Ruang: ${nama}`);
  console.log(`Volume: ${hitungVolume(...params)}`);
  console.log(`Luas Permukaan: ${hitungLuasPermukaan(...params)}`);
  console.log("---------------------------");
}

// Fungsi khusus untuk menghitung Kubus
function hitungKubus(sisi) {
  hitungBangunRuang("Kubus", volumeKubus, luasPermukaanKubus, sisi);
}

// Fungsi khusus untuk menghitung Balok
function hitungBalok(panjang, lebar, tinggi) {
  hitungBangunRuang(
    "Balok",
    volumeBalok,
    luasPermukaanBalok,
    panjang,
    lebar,
    tinggi
  );
}

// Contoh pemanggilan
hitungKubus(8);
hitungBalok(12, 7, 5);

// Data awal
var people = [
  { name: "John", job: "Programmer", gender: "male", age: 30 },
  { name: "Sarah", job: "Model", gender: "female", age: 27 },
  { name: "Jack", job: "Engineer", gender: "male", age: 25 },
  { name: "Ellie", job: "Designer", gender: "female", age: 35 },
  { name: "Danny", job: "Footballer", gender: "male", age: 30 },
];

// Fungsi untuk mengurutkan data berdasarkan umur
const sortByAge = (arr) => {
  return arr.sort((a, b) => a.age - b.age);
};

// Fungsi rekursif untuk menampilkan nama dengan nomor urut
const printNamesRecursive = (arr, index = 0) => {
  // Base case: jika index mencapai panjang array, hentikan rekursi
  if (index >= arr.length) return;

  // Cetak nama dengan nomor urut
  console.log(`${index + 1}. ${arr[index].name}`);

  // Panggil fungsi rekursif untuk elemen berikutnya
  printNamesRecursive(arr, index + 1);
};

// Urutkan data dan tampilkan hasil
const sortedPeople = sortByAge(people);
printNamesRecursive(sortedPeople);

var phones = [
  {
    name: "Samsung Galaxy A52",
    brand: "Samsung",
    year: 2021,
    colors: ["black", "white"],
  },
  {
    name: "Redmi Note 10 Pro",
    brand: "Xiaomi",
    year: 2021,
    colors: ["white", "blue"],
  },
  {
    name: "Redmi Note 9 Pro",
    brand: "Xiaomi",
    year: 2020,
    colors: ["white", "blue", "black"],
  },
  { name: "Iphone 12", brand: "Apple", year: 2020, colors: ["silver", "gold"] },
  {
    name: "Iphone 11",
    brand: "Apple",
    year: 2019,
    colors: ["gold", "black", "silver"],
  },
];

// 1. Filter yang punya warna 'black'
const filteredPhones = phones.filter((phone) => phone.colors.includes("black"));

// 2. Urutkan berdasarkan tahun (terkecil ke terbesar)
filteredPhones.sort((a, b) => a.year - b.year);

// 3. Tampilkan dengan recursive function
function tampilkanPhones(data, index = 0) {
  if (index >= data.length) return; // base case
  const phone = data[index];
  console.log(
    `${index + 1}. ${phone.name}, colors available : ${phone.colors.join(", ")}`
  );
  tampilkanPhones(data, index + 1); // recursive call
}

// 4. Panggil fungsi
tampilkanPhones(filteredPhones);
