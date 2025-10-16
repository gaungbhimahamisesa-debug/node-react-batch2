const express = require("express");
const { createMovie } = require("../controllers/movieController");
const { readMovie, readMovieById } = require("../controllers/movieController");
const { updateMovie } = require("../controllers/movieController");
const { deleteMovie } = require("../controllers/movieController");
const { basicAuth } = require("../middleware/basicAuth");
const { validation } = require("../middleware/validation");

const router = express.Router();

router.post("/movie", basicAuth, validationBodyMovies, createMovie);
router.get("/movie", readMovie);
router.get("/movie", readMoviesByID);
router.put("/..movie", basicAuth, updateMovie);
router.delete("/..movie", basicAuth, deleteMovie);

module.exports = router;
