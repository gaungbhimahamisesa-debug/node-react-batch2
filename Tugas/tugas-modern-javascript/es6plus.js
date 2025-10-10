// No.1
const luasLingkaran = (r) => {
  const phi = 3.14;
  return phi * r * r;
};

const kelilingLingkaran = (r) => {
  const phi = 3.14;
  return 2 * phi * r;
};

const introduce = (...params) => {
  const [nama, usia, gender, pekerjaan] = params;
  return `Pak ${
    nama.charAt(0).toUpperCase() + nama.slice(1)
  } adalah seorang ${pekerjaan} yang berusia ${usia} tahun`;
};

const perkenalanJohn = introduce("john", "30", "Laki-Laki", "penulis");

console.log(luasLingkaran(7));
console.log(kelilingLingkaran(7));
console.log(perkenalanJohn);

// No.2
(() => {
  const luasLingkaran = (r) => {
    const phi = 3.14;
    return phi * r * r;
  };

  const kelilingLingkaran = (r) => {
    const phi = 3.14;
    return 2 * phi * r;
  };

  const introduce = (...params) => {
    const [nama, usia, gender, pekerjaan] = params;
    const sapaan = (gender || "").toLowerCase() === "laki-laki" ? "pak" : "bu";
    return `${sapaan} ${String(
      nama
    ).toLowerCase()} adalah seorang ${pekerjaan} yang berusia ${usia} tahun`;
  };

  const perkenalanJohn = introduce("john", "30", "Laki-Laki", "penulis");
  console.log(perkenalanJohn);

  const perkenalanSarah = introduce("sarah", "28", "Perempuan", "guru");
  console.log(perkenalanSarah);

  const newFunction = (firstName, lastName) => ({
    firstName,
    lastName,
    fullName() {
      console.log(`${firstName} ${lastName}`);
    },
  });

  // No.3
})();

(() => {
  const luasLingkaran = (r) => {
    const phi = 3.14;
    return phi * r * r;
  };

  const kelilingLingkaran = (r) => {
    const phi = 3.14;
    return 2 * phi * r;
  };

  const introduce = (...params) => {
    const [nama, usia, gender, pekerjaan] = params;
    const sapaan = gender.toLowerCase() === "laki-laki" ? "pak" : "bu";
    return `${sapaan} ${nama.toLowerCase()} adalah seorang ${pekerjaan} yang berusia ${usia} tahun`;
  };

  const perkenalanJohn = introduce("john", "30", "Laki-Laki", "penulis");
  console.log(perkenalanJohn);

  const perkenalanSarah = introduce("sarah", "28", "Perempuan", "guru");
  console.log(perkenalanSarah);

  const newFunction = (firstName, lastName) => ({
    firstName,
    lastName,
    fullName() {
      console.log(`${firstName} ${lastName}`);
    },
  });

  console.log(newFunction("John", "Doe").firstName);
  console.log(newFunction("Richard", "Roe").lastName);
  newFunction("William", "Imoh").fullName();
})();

// No.4
let phone = {
  name: "Galaxy Note 20",
  brand: "Samsung",
  year: 2020,
  colors: ["Mystic Bronze", "Mystic White", "Mystic Black"],
};

const { brand: phoneBrand, name: phoneName, year, colors } = phone;
const [colorBronze, , colorBlack] = colors;

console.log(phoneBrand, phoneName, year, colorBlack, colorBronze);

//No.5
let warna = ["biru", "merah", "kuning", "hijau"];

let dataBukuTambahan = {
  penulis: "john doe",
  tahunTerbit: 2020,
};

let buku = {
  nama: "pemrograman dasar",
  jumlahHalaman: 172,
  warnaSampul: ["hitam"],
};

buku = {
  ...buku,
  ...dataBukuTambahan,
  warnaSampul: [...buku.warnaSampul],
};

console.log(buku);

// No.6
function addProducts(samsung, newProducts) {
  return {
    ...samsung,
    products: [...samsung.products, ...newProducts],
  };
}

let samsung = {
  name: "Samsung",
  products: [
    { name: "Samsung Galaxy Note 10", colors: ["black", "gold", "silver"] },
    { name: "Samsung Galaxy Note 10s", colors: ["blue", "silver"] },
    { name: "Samsung Galaxy Note 20s", colors: ["white", "black"] },
  ],
};

let newProducts = [
  { name: "Samsung Galaxy A52", colors: ["white", "black"] },
  { name: "Samsung Galaxy M52", colors: ["blue", "grey", "white"] },
];

samsung = addProducts(samsung, newProducts);

console.log(JSON.stringify(samsung.products, null, 2));

// No.7
const konversiObject = ([nama, domisili, umur]) => ({ nama, domisili, umur });

let data = ["Bondra", "Medan", 25];
console.log(konversiObject(data));

// No. 8
const graduate = (...students) => {
  const allStudents = [].concat(...students);
  const result = {};

  allStudents.forEach(({ name, class: className }) => {
    if (!result[className]) result[className] = [];
    result[className].push(name);
  });

  return result;
};

const data1 = [
  { name: "Ahmad", class: "adonis" },
  { name: "Regi", class: "laravel" },
  { name: "Bondra", class: "adonis" },
  { name: "Iqbal", class: "vuejs" },
  { name: "Putri", class: "laravel" },
];

const data2 = [
  { name: "Yogi", class: "react" },
  { name: "Fikri", class: "agile" },
  { name: "Arief", class: "agile" },
];

console.log(graduate(data1));
console.log(graduate(data2));
