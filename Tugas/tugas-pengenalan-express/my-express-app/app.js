// No. 01
// app.js
const express = require("express");
const app = express();
const port = 3000;

// Route GET /lingkaran-tabung/:jari/:tinggi
app.get("/lingkaran-tabung/:jari/:tinggi", (req, res) => {
  // Ambil parameter dari URL
  const jariJari = parseFloat(req.params.jari);
  const tinggi = parseFloat(req.params.tinggi);

  // Rumus
  const phi = 3.14;
  const luasAlas = phi * jariJari * jariJari;
  const kelilingAlas = 2 * phi * jariJari;
  const volumeTabung = luasAlas * tinggi;

  // Tampilkan hasil
  res.send(
    `jari-jari: ${jariJari}, tinggi: ${tinggi}, volume tabung: ${volumeTabung.toFixed(
      2
    )}, luas alas tabung: ${luasAlas.toFixed(
      2
    )}, keliling alas tabung: ${kelilingAlas.toFixed(2)}`
  );
});

// jalankan server di port 3000
app.listen(3000, () => {
  console.log("server berjalan di http://localhost:3000");
});

// No. 02
app.get("/data-orang", (req, res) => {
  let dataOrang = [
    { id: 1, name: "John", umur: 30, pekerjaan: "Penulis", jenisKelamin: "L" },
    {
      id: 4,
      name: "Benzema",
      umur: 34,
      pekerjaan: "EMAIN Bola",
      jenisKelamin: "L",
    },
    { id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jenisKelamin: "P" },
    {
      id: 9,
      name: "Shohei Ohtani",
      umur: 28,
      pekerjaan: "Pemain Baseball",
      jenisKelamin: "L",
    },
    {
      id: 11,
      name: "Maria Sharapova",
      umur: 35,
      pekerjaan: "Petenis",
      jenisKelamin: "P",
    },
  ];

  // Ambil parameter query dari URL
  const { umur, gender } = req.query;

  // Filter berdasarkan umur (>=)
  if (umur) {
    dataOrang = dataOrang.filter((orang) => orang.umur >= parseInt(umur));
  }

  // Filter berdasarkan gender
  if (gender) {
    dataOrang = dataOrang.filter(
      (orang) => orang.jenisKelamin.toLowerCase() === gender.toLowerCase()
    );
  }

  // Jika tidak ada hasil
  if (dataOrang.length === 0) {
    return res.send("Data tidak ditemukan sesuai filter.");
  }

  // Format hasil untuk ditampilkan
  const hasil = dataOrang
    .map(
      (orang, index) =>
        "${index + 1}. ${orang.name} - pekerjaan: ${orang.pekerjaan} - Umur: ${orang.umur} Tahun"
    )
    .join("<br>");

  res.send(hasil);
});

// Jalankan server
app.listen(port, () => {
  console.log("Server berjalan di http://localhost:$(port)");
});
