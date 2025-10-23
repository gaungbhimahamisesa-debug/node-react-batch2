import axios from "axios";
import { useEffect, useState } from "react";
import "./home.css";

function CRUDAxios() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("htpp://localhost:3000/api/movie")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1> CRUD AXIOS </h1>

      {/* <form action="/action_page.php" id="carform">
  <label for="fname">Firstname:</label>
  <input type="text" id="fname" name="fname">


<br>

<label for="cars">Choose a car:</label>
<select id="cars" name="carlist" form="carform">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>

  <input type="submit"></input>
  </form> */}

      <table>
        <thead>
          <tr>
            <th>no</th>
            <th>judul</th>
            <th>tahun</th>
            <th>kategori</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.year}</td>
                <td>{item.categoryById}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default CRUDAxios;
