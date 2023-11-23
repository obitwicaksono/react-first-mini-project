import "./App.css";
import { useState } from "react";
import ReuseableNav from "../src/components/reuseable-nav";

function App() {
  const [count, setCount] = useState(16);
  if (count <= 16) {
    return (
      <>
        <ReuseableNav />
        <section className="form">
          <h3>Sesuaikan dengan Umur Anda</h3>
          <h3 className="umur-anda">Umur Anda {count}</h3>
          <p>Batas minimal Umur adalah 16 Tahun</p>
          <p>Batas maksimal Umur adalah 28 Tahun</p>
          <div>
            <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              tambah umur
            </button>
            <button>kurang umur</button>
          </div>
        </section>
      </>
    );
  } else if (count >= 28) {
    return (
      <>
        <ReuseableNav />
        <section className="form">
          <h3>Sesuaikan dengan Umur Anda</h3>
          <h3 className="umur-anda">Umur Anda {count}</h3>
          <p>Batas minimal Umur adalah 16 Tahun</p>
          <p>Batas maksimal Umur adalah 28 Tahun</p>
          <div>
            <button>tambah umur</button>
            <button
              onClick={() => {
                setCount(count - 1);
              }}
            >
              kurang umur
            </button>
          </div>
        </section>
      </>
    );
  } else {
    return (
      <>
        <ReuseableNav />
        <section className="form">
          <h3>Sesuaikan dengan Umur Anda</h3>
          <h3 className="umur-anda">Umur Anda {count}</h3>
          <p>Batas minimal Umur adalah 16 Tahun</p>
          <p>Batas maksimal Umur adalah 28 Tahun</p>
          <div>
            <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              tambah umur
            </button>
            <button
              onClick={() => {
                setCount(count - 1);
              }}
            >
              kurang umur
            </button>
          </div>
        </section>
      </>
    );
  }
}

export default App;
