var filterCarsPromise = require("./promise3.js");

// 1️⃣ Menggunakan Promise (mobil berwarna hitam tahun 2019)
filterCarsPromise("black", 2019)
  .then(function (result) {
    console.log("Mobil berwarna hitam tahun 2019 ditemukan:");
    console.log(result);
  })
  .catch(function (error) {
    console.log(error.message);
  });

// 2️⃣ Menggunakan Promise (mobil berwarna silver tahun 2017)
filterCarsPromise("silver", 2017)
  .then(function (result) {
    console.log("Mobil berwarna silver tahun 2017 ditemukan:");
    console.log(result);
  })
  .catch(function (error) {
    console.log(error.message);
  });

// 3️⃣ Menggunakan async/await (mobil berwarna abu-abu tahun 2019)
async function cariMobilAbuAbu2019() {
  try {
    const hasil = await filterCarsPromise("grey", 2019);
    console.log("Mobil berwarna abu-abu tahun 2019 ditemukan:");
    console.log(hasil);
  } catch (error) {
    console.log(error.message);
  }
}
cariMobilAbuAbu2019();

// 4️⃣ Menggunakan async/await (mobil berwarna abu-abu tahun 2018)
async function cariMobilAbuAbu2018() {
  try {
    const hasil = await filterCarsPromise("grey", 2018);
    console.log("Mobil berwarna abu-abu tahun 2018 ditemukan:");
    console.log(hasil);
  } catch (error) {
    console.log(error.message);
  }
}
cariMobilAbuAbu2018();

// 5️⃣ Menggunakan async/await (mobil berwarna hitam tahun 2020)
async function cariMobilHitam2020() {
  try {
    const hasil = await filterCarsPromise("black", 2020);
    console.log("Mobil berwarna hitam tahun 2020 ditemukan:");
    console.log(hasil);
  } catch (error) {
    console.log(error.message);
  }
}
cariMobilHitam2020();
