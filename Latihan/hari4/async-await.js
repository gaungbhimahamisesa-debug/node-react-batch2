function doAsync() {
  return new Promise(function (resolve, reject) {
    var check = true;
    if (check) {
      resolve("berhasil");
    } else {
      reject("gagal");
    }
  });
}

async function hello() {
  var result = await doAsync();
  console.log(result);
}

hello();
