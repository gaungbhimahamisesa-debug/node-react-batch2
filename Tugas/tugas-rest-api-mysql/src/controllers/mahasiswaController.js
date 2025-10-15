const { connectionPool } = require("../config/db");

function nilaiIndeks(nilai) {
  if (nilai >= 80) {
    return "A";
  } else if (nilai >= 70 && nilai < 80) {
    return "B";
  } else if (nilai >= 60 && nilai < 70) {
    return "C";
  } else if (nilai >= 50 && nilai < 60) {
    return "D";
  } else {
    return "E";
  }
}

const createMahasiswa = (req, res) => {
  let { nama, mata_kuliah, nilai } = req.body;

  let queryText = `INSERT INTO nilai_mahasiswa (nama, mata_kuliah, nilai, indeks_nilai, created_at, updated_at) VALUES("${nama}", "${mata_kuliah}",${nilai},"${nilaiIndeks(
    nilai
  )}", now(), now())`;

  connectionPool.query(queryText, (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });

  res.json({ message: "Movie Was Succesfully Created", status: "success" });
};

const readMahasiswa = (req, res) => {
  let queryText = `SELECT * FROM nilai_mahasiswa`;

  connectionPool.query(queryText, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        message: "Terjadi kesalahan saat mengambil data mahasiswa",
        error: err,
      });
    }

    // Jika berhasil, kirim data hasil SELECT ke client
    res.status(200).json({
      message: "Data mahasiswa berhasil diambil",
      data: results,
    });
  });
};

const updateMahasiswa = (req, res) => {
  let { nama, mata_kuliah, nilai } = req.body;
  let { id } = req.params;
  let queryText = `
  UPDATE nilai_mahasiswa 
  SET 
    nama = "${nama}",
    mata_kuliah = "${mata_kuliah}",
    nilai = ${nilai},
    indeks_nilai = "${nilaiIndeks(nilai)}",
    updated_at = NOW()
  WHERE id = ${id}
`;

  connectionPool.query(queryText, (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });

  res.json({ message: "Movie Was Succesfully Updated", status: "success" });
};

const deleteMahasiswa = (req, res) => {
  const { id } = req.params;

  // Query SQL untuk hapus data berdasarkan ID
  const queryText = `DELETE FROM nilai_mahasiswa WHERE id = ${id}`;

  connectionPool.query(queryText, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        message: "Terjadi kesalahan saat menghapus data",
        error: err,
      });
    }

    // Jika tidak ada data dengan id tersebut
    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: `Data dengan id ${id} tidak ditemukan`,
        status: "failed",
      });
    }

    // Jika berhasil dihapus
    res.status(200).json({
      message: "Data mahasiswa berhasil dihapus",
      status: "success",
    });
  });
};

module.exports = {
  createMahasiswa,
  updateMahasiswa,
  readMahasiswa,
  deleteMahasiswa,
};
