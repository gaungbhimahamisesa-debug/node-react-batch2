import { useState } from "react";
import "./App.css";

function App() {
  const [bundles, setBundles] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleAddBundle = (e) => {
    e.preventDefault();
    if (!name || !description || !price) {
      alert("Semua field wajib diisi!");
      return;
    }
    const newBundle = {
      id: Date.now(),
      name,
      description,
      price: parseInt(price),
    };
    setBundles([...bundles, newBundle]);
    setName("");
    setDescription("");
    setPrice("");
  };

  const handleDelete = (id) => {
    setBundles(bundles.filter((b) => b.id !== id));
  };

  return (
    <div className="container">
      <header className="header">
        <h1>🔥 D’CELUP SEMPOL AYAM 🔥</h1>
        <p className="tagline">“Nikmat Gurihnya Sempol Ayam & Ikan dalam Setiap Celupan!”</p>
      </header>

      <section className="form-section">
        <h2>📦 Tambah Paket Bundling</h2>
        <form onSubmit={handleAddBundle} className="bundle-form">
          <input
            type="text"
            placeholder="Nama Paket (contoh: Paket A)"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Deskripsi (contoh: 10 Sempol + Saus Pedas)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            placeholder="Harga (contoh: 15000)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button type="submit">Tambah Paket</button>
        </form>
      </section>

      <section className="list-section">
        <h2>🧾 Daftar Paket Bundling</h2>
        {bundles.length === 0 ? (
          <p>Belum ada paket bundling yang dibuat.</p>
        ) : (
          <div className="bundle-list">
            {bundles.map((bundle) => (
              <div className="bundle-card" key={bundle.id}>
                <h3>{bundle.name}</h3>
                <p>{bundle.description}</p>
                <p className="price">Rp {bundle.price.toLocaleString()}</p>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(bundle.id)}
                >
                  Hapus
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
