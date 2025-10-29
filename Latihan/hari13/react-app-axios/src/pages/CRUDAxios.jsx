import axios from "axios";
import { useEffect, useState } from "react";

function CRUDaxios() {
  // const initialInput = {title:"",year:0,categoryId:null, id:null}
  const [dataMovie, setDataMovie] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);
  // const [input, setInput] = useState({initialInput})
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [id, setId] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const [perPage, setPerPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    fetchDataMovie();
    fetchDataCategory();
  }, []);

  const fetchDataMovie = async () => {
    await axios
      .get("http://localhost:3000/api/movie")
      .then((response) => {
        setDataMovie(response.data.movies);
        console.log(response.data.movies);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    console.log(title);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
    console.log(year);
  };

  const handleCategoryIdChange = (event) => {
    setCategoryId(event.target.value);
    console.log(categoryId);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let txtSimpan = "Apa Anda yakin Menyimpan Data???";
      let txtUpdate = "Apa Anda yakin Memperbaharui Data???";

      if (id) {
        if (confirm(txtUpdate)) {
          await axios.put(`http://localhost:3000/api/movie/${id}`, {
            title: title,
            year: Number(year),
            categoryId: Number(categoryId),
          });
        }
      } else {
        if (confirm(txtSimpan)) {
          await axios.post("http://localhost:3000/api/movie", {
            title: title,
            year: Number(year),
            categoryId: Number(categoryId || dataCategory[0]?.id),
          });
        }
      }
      fetchDataMovie();
      fetchDataCategory();
      hapusData();
    } catch (err) {
      alert(err);
    }
  };

  const hapusData = () => {
    setTitle("");
    setYear("");
    setCategoryId("");
    setId("");
  };

  const handleEdit = async (id) => {
    try {
      axios.get(`http://localhost:3000/api/movie/${id}`).then((response) => {
        let result = response.data.info;
        console.log(result);
        setTitle(result.title);
        setYear(result.year);
        setCategoryId(result.categoryId);
        setId(result.id);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteData = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/movie/${id}`
      );
      fetchDataMovie();
      fetchDataCategory();
    } catch (error) {
      console.log(error);
    }
  };

  const totalPage = Math.ceil(dataMovie.length / pageSize);
  const startindex = (perPage - 1) * pageSize;
  const endIndex = startindex + pageSize;
  const paginatedData = dataMovie.slice(startindex, endIndex);

  const handlePrevPage = () => {
    if (perPage > 1) {
      setPerPage(perPage - 1);
    }
  };

  const handleNextPage = () => {
    if (perPage < totalPage) {
      setPerPage(perPage + 1);
    }
  };

  return (
    <>
      <h1>MOVIES</h1>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <label for="tile" className="label">
              Movie Title
            </label>
            <input
              className="input"
              type="text"
              id="title"
              name="title"
              onChange={handleTitleChange}
              value={title}
              placeholder="Movie Title.."
            />

            <label for="year" className="label">
              Realeased Year
            </label>
            <input
              className="input"
              type="number"
              id="year"
              name="year"
              onChange={handleYearChange}
              value={year}
              placeholder="Movie Release Date.."
              min="1980"
              max="2025"
            />

            <label for="categoryId" className="label">
              Category
            </label>
            <select
              value={categoryId}
              className="select select-neutral"
              id="categoryId"
              name="categoryId"
              onChange={handleCategoryIdChange}
            >
              {dataCategory.map((item, index) => {
                return (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
            </select>

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
              <th>Judul</th>
              <th>Tahun</th>
              <th>Kategori</th>
              <th colSpan="2">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{startindex + index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.year}</td>
                  <td>{item.category?.name}</td>
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
        <div className="space-x-5">
          <button className="btn btn-secondary btn-sm" onClick={handlePrevPage}>
            Prev
          </button>
          <button className="btn btn-secondary btn-sm" onClick={handleNextPage}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default CRUDaxios;
