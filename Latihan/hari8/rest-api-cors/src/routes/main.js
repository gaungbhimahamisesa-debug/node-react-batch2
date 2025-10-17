const express = require("express");
const {
  createMovie,
  readMovieById,
} = require("../controllers/movieController");
const { readMovie } = require("../controllers/movieController");
const { updateMovie } = require("../controllers/movieController");
const { deleteMovie } = require("../controllers/movieController");
const { basicAuth } = require("../middleware/basicAuth");
const {
  createCategory,
  readCategory,
  updateCategory,
} = require("../controllers/categoryController");

const router = express.Router();

router.post("/movie", basicAuth, createMovie);
router.get("/movie", readMovie);
router.get("/movie", readMovieById);
router.put("/..movie", basicAuth, updateMovie);
router.delete("/..movie", basicAuth, deleteMovie);
router.get("/category", readCategory);
router.post("/category", createCategory);
router.put("/category/:id", updateCategory);
module.exports = router;
