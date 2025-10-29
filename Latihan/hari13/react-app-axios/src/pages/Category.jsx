import axios from "axios";
import { useEffect, useState } from "react";

function Category() {
  // const initialInput = {title:"",year:0,categoryId:null, id:null}
  const [dataCategory, setDataCategory] = useState([]);
  // const [input, setInput] = useState({initialInput})
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    fetchDataCategory();
  }, []);

  const fetchDataCategory = async () => {
    await axios
      .get("http://localhost:3000/api/category")
      .then((response) => {
        let result = response.data.info;
        setDataCategory(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const handleChange = (event) => {
  //     let {name, value} = event.target
  //     setInput({...input, [name]:value})
  // }

  // const handelSubmit = async (event) =>{
  //     event.preventDefault()
  //     try{
  //         await axios.post('http://localhost:3000/api/movie', {title: input.title, year:Number(input.year), categoryId:Number(input.categoryId)})
  //         fetchDataMovie()
  //         fetchDataCategory()
  //         console.log(input)
  //         setInput({...input})
  //     }catch(err){
  //         alert(err)
  //     }
  // }

  const handleNameChange = (event) => {
    setName(event.target.value);
    console.log(name);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let txtSimpan = "Apa Anda yakin Menyimpan Data???";
      let txtUpdate = "Apa Anda yakin Memperbaharui Data???";

      if (id) {
        if (confirm(txtUpdate)) {
          await axios.put(`http://localhost:3000/api/category/${id}`, {
            name,
          });
        }
      } else {
        if (confirm(txtSimpan)) {
          await axios.post("http://localhost:3000/api/category", {
            name,
          });
        }
      }
      fetchDataCategory();
      hapusData();
    } catch (err) {
      alert(err);
    }
  };

  const hapusData = () => {
    setName("");
    setId("");
  };

  const handleEdit = async (id) => {
    try {
      axios.get(`http://localhost:3000/api/category/${id}`).then((response) => {
        let result = response.data.info;
        console.log(result);
        setName(result.name);
        setId(result.id);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteData = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:3000/api/category/${id}`)
        fetchDataCategory()
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <>
      <h1>CATEGORIES</h1>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <label for="tile" className="label">
              CategoryName
            </label>
            <input
              className="input"
              type="text"
              id="name"
              name="name"
              onChange={handleNameChange}
              value={name}
              placeholder="Movie Title.."
            />

            <input
              type="submit"
              value="Submit"
              className="btn btn-neutral mt-4"
            />
          </form>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Nomor</th>
              <th>Nama</th>

              <th colSpan="2">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {dataCategory.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>

                  <td>
                    <input
                      type="submit"
                      value="Ubah"
                      className="btn btn-warning"
                      onClick={() => handleEdit(item.id)}
                    />
                  </td>
                  <td>
                    <input
                      type="submit"
                      value="Hapus"
                      className="btn btn-error"
                      onClick={() => deleteData(item.id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Category;
