for (var angka = 1; angka < 10; angka++) {
  console.log("literasi ke-" + angka);
}

var jumlah = 0;
for (var deret = 5; deret > 0; deret--) {
  jumlah += deret;
  console.log("jumlah saat ini: " + jumlah);
}

console.log("jumlah terakhir: " + jumlah);

//cara 1
while ([kondisi]) {
  [proses];
}

//cara 2
do {
  [proses];
} while ([kondisi]);

var flag = 1;
while (flag < 10) {
  console.log("Iterasi ke-" + flag);
  flag++;
}

var flag = 9;
do {
  console.log("Iterasi ke-" + flag);
  flag--;
} while (flag > 0);

var flag = 1;
while (flag < 10) {
  console.log("Iterasi ke-" + flag);
}
