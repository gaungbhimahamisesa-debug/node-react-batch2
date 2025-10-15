const express = require("express");
const app = express();
const port = 3000;

let movies = [
  { id: 1, title: "Spider-Man", year: 2002 },
  { id: 2, title: "John Wick", year: 2014 },
  { id: 3, title: "The Avengers", year: 2012 },
  { id: 4, title: "Logan", year: 2017 },
];

const getMovies = (req, res) => {
  let (title) = req.query 
  let (id) = req.query
  let result = "";

  if(title === undefined)

  movies.forEach((item, index) => {
    if(item.title.toLowerCase().includes(title)){
    result += "${index+1}. ${item.title}</br>";
  }
  });

  res.send(mresult);
};

const getMoviesByID = (req, res) => {
  let (id) = req.params

  console.log(id)

  let result = movies.find(movies => movies.id === Number(id))
  res.send ('$(result.title)')
}

//ROOT
app.get("/", (req, res) => {
  res.send("Hello Tot!");
});

//ROOT MOVIE
app.get("/", (req, res) => {
  res.send("Nonton apa Tot");
});

//ROUTE
app.get("/tot", (req, res) => {
  res.send("Skibidi!");
});

//ROUTE MOVIES
app.get("/cuk", getMovies);

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
