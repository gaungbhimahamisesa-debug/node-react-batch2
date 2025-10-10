var filterBooksPromise = require("./promise2.js");

filterBooksPromise(true, 50)
  .then(function (result) {
    console.log("Buku berwarna dengan 50 halaman sitemukan:");
    console.log(result);
  })
  .catch(function (error) {
    console.log(error.message);
  });

async function cariBukuNonWarna() {
  try {
    const hasil = await filterBooksPromise(false, 250);
    console.log("Buku berwarna dengan 250 halaman ditemukan:");
    console.log(hasil);
  } catch (error) {
    console.log(error.message);
  }
}
cariBukuNonWarna();

async function cariBukuWarnaHalamanSedikit() {
  try {
    const hasil = await filterBooksPromise(true, 20);
    console.log("Buku berwarna dengan 30 halaman ditemukan:");
    console.log(hasil);
  } catch (error) {
    console.log(error.message);
  }
}
cariBukuWarnaHalamanSedikit();
