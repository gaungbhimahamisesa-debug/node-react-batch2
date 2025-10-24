/**
 * 1. Tulislah sebuah function dengan nama introduce() yang memproses paramater yang dikirim menjadi sebuah kalimat
 */

function introduce(name, gender, job, age) {
  if (gender == "laki-laki") {
    return `Pak ${name} adalah seorang ${job} yang berusia ${age} tahun`;
  } else if (gender == "perempuan") {
    return `Bu ${name} adalah seorang ${job} yang berusia ${age} tahun`;
  }
}

var john = introduce("John", "laki-laki", "penulis", "30");
console.log(john);

var sarah = introduce("Sarah", "perempuan", "model", "28");
console.log(sarah);

console.log("-----------------------------------");

/**
 * 2. Buatlah function yang menerima parameter berupa string (gunakan var text dibawah sebagai parameter) yang mencari karakter atau huruf yang tidak berulang
 */
var text = "Super Bootcamp Fullstack Dev 2022";
function findUniqueWord(str) {
  str = str.toLowerCase().replaceAll(" ", "");
  var result = "";

  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      result += char;
    }
  }
  return result;
}

console.log(findUniqueWord(text));

console.log("-----------------------------------");

/**
 * 3.  buatlah function yang menghasilkan angka terbesar dan angka terkecil dari sebuah array yang berisi data intege
 */

function smallAndBig(angka) {
  const small = Math.min(...angka);
  const big = Math.max(...angka);

  console.log(
    `angka terbesar adalah ${big} dan angka terkecil adalah ${small}`
  );
}

var angka = [2, 3, 1, 9, 12, 8, 9, 7];
smallAndBig(angka);

console.log("-----------------------------------");

/**
 * 4. Buatlah function untuk menyusun karakter pada string secara alfabetis
 */

function arrangeString(str) {
  return str.split("").sort().join("");
}

console.log(arrangeString("similikiti")); // Output : iiiiiklmst
console.log(arrangeString("sanbercode")); // Output : abcdeenors
console.log(arrangeString("")); // Output : ""

console.log("-----------------------------------");

/**
 * 5.  mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan
 */

function palindrome(kata) {
  var word = kata.split("").reverse().join("");

  if (kata == word) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("katak")); // true
console.log(palindrome("blanket")); // false
console.log(palindrome("nababan")); // true
console.log(palindrome("haji ijah")); // true
console.log(palindrome("mister")); // false

console.log("-----------------------------------");

function angkaPalindrome(num) {
  num++;
  while (true) {
    let str = num.toString();
    let reversed = str.split("").reverse().join("");
    if (str === reversed) {
      return num;
    }
    num++;
  }
}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

console.log("-----------------------------------");

function cekPermutasi(str1, str2) {
  let clean1 = str1.replace(/\s/g, "").split("").sort().join("");
  let clean2 = str2.replace(/\s/g, "").split("").sort().join("");
  return clean1 === clean2;
}

console.log(cekPermutasi("abah", "baha")); // true
console.log(cekPermutasi("ondel", "delon")); // true
console.log(cekPermutasi("paul sernine", "arsene lupin")); // true
console.log(cekPermutasi("taco", "taca")); // false