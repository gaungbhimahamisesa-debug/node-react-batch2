const express = require("express");
const {
  createMahasiswa,
  updateMahasiswa,
  readMahasiswa,
  deleteMahasiswa,
} = require("../controllers/mahasiswaController");
const router = express.Router();

router.post("/mahasiswa", createMahasiswa);
router.put("/mahasiswa/:id", updateMahasiswa);
router.get("/mahasiswa", readMahasiswa);
router.delete("/mahasiswa/:id", deleteMahasiswa);
module.exports = router;
