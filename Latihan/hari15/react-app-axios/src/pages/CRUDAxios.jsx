// import { useEffect, useState } from "react";
// import "../CRUDAxios.css";
// import axios from "axios";

// function CRUDAxios() {
//   const [data, setData] = useState([]);
//   const [dataCategory, setDataCategory] = useState([]);
//   const [title, setTitle] = useState([]);
//   const [year, setYear] = useState("");
//   const [id, setId] = useState("");
//   const [categoryId] = useState("");

//   useEffect(() => {
//     fetchData();
//     fetchDataMovie();
//     fetchDataCategory();
//   }, []);

//   const fetchDataMovie = () => {
//     axios
//       .get("htpp://localhost:3000/api/movie")
//       .then((response) => {
//         setData(response.data.info);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

// const handleTitleChange = (event) => {
//   setTitle(event.target.value);
//   console.log(title);
// };

// const handleYearChange = (event) => {
//   setYear(event.target.value);
//   console.log(year);
// };

// const handleCategoryIdChange = (event) => {
//   setCategoryId(event.target.value);
//   console.log(categoryId);
// };

// const handleSubmit =async (event) => {
//   event.preventDefault();
//   try {
//     let posting = await axios.post("http://localhost:3000/api/movie", {
//       title: (title),
//       year: Number(year),
//       categoryId: Number(categoryId)
//     });
//     console.log(posting);
//     fetchDataMovie();
//     fetchDataCategory();
//   } catch (err) {
//     alert(err);
//   }
// };

//   const handleUpdate = async(id) => {
//       try {
//     let update = await axios.put("http://localhost:3000/api/movie/$(id)", {
//       title: (title),
//       year: Number(year),
//       categoryId: Number(categoryId)
//     });
//     console.log('Item Updated Successfully:', update.data);
//     fetchDataMovie();
//     fetchDataCategory();
//   } catch (err) {
//     alert(err);
//   }
// }

// const handleDelete = async(id) => {
//       try {
//     let response = await axios.delete('http://localhost:3000/api/movie/$(id)')
//     console.log('Item Deleted Successfully:', response.data);
//     fetchDataMovie();
//     fetchDataCategory();
//   } catch (err) {
//     alert(err);
//   }
// }

// const handleDelete = async(id) => {
//   try {
//     axios.get('http://localhost:3000/api/movie/$(id)'). then ((response) => {
//         let result = response.data.info
//         console.log(result)
//         setTitle[result.title]
//         setYear[result.year]
//         setCategoryId[result.categoryId]
//       })}catch(err) {
//           console.log(err)
//     }
// }

//   return (
//     <>
//       <h1> CRUD AXIOS </h1>
//     <fieldset className="fieldset bg-base-300 border-300 rounded-box-w-90 border p-4">
//       <form onSubmit={handleSubmit}>
//         <label className="label" for="title">Movie Title</label>
//         <input className="input"
//           type="text"
//           id="title"
//           name="title"
//           onChange="{handleTitleChange}
//           value=(title)
//           placeholder="Movies"></input>

//         <label className="label" for="year">year</label>
//         <input className="input"
//           type="text"
//           id="year"
//           name="year"
//           onChange="{handleYearChange}
//           placeholder="Movies Released date"></input>

//         <label for="category">Category</label>
//         <select value=(categoryId) className="select select neutral" id="category" name="category" onChange={handleCategoryChange}>
//                 {dataCategory.map((item.index) => {
//                       return (
//                         <option key={index} value={item.id}> {item.name} </option>
//                       )
//                       })}
//         </select>
                      

//   <input type="submit"></input>
//   </form> */}

//         <input type="submit" value="submit" className='btn btn-info' />
//       </form>

//       <div className="overflow-x-auto">
//       <table className-='table table-zebra'>
//         <thead>
//           <tr>
//             <th>no</th>
//             <th>judul</th>
//             <th>tahun</th>
//             <th>kategori</th>
//           </tr>
//         </thead>

//         <tbody>
//           {data.map((item, index) => {
//             return (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>{item.title}</td>
//                 <td>{item.year}</td>
//                 <td>{item.categoryById}</td>
//                 <td><input type="submit" value="Ubah" className='btn btn-warning' onClick={()handleEdit./></td>
//                 <td><input type="submit" value="Ubah"className='btn btn-error'/></td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       </div>
//     </>
//   );
// }

// export default CRUDAxios;
