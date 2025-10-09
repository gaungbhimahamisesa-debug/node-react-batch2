function periksaDoker(nomerAntri, callback) {
  if (nomerAntri > 50) {
    callback(false);
  } else if (nomerAntri > 10) {
    callback(true);
  }
}

periksaDokter(65, function (check) {
  if (check) {
    console.log("sebentar lagi giliran saya");
  } else {
    console.log("saya jalan-jalan dulu");
  }
});
