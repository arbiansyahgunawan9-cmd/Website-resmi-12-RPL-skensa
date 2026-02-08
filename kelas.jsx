import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [activeTab, setActiveTab] = useState("ringkasan");
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [pengumuman, setPengumuman] = useState([]);
  const [kegiatan, setKegiatan] = useState([]);

  useEffect(() => {
    document.title = "XII RPL • SMK Negeri 1 Pandeglang";
  }, []);

  const filteredStudents = students.filter((s) =>
    (s.nama + s.nis).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="wrap">
  
      <header className="hero">
        <div className="hero-inner">
          <img src="logo_rpl.png" alt="Logo RPL" className="logo-small left-logo" />
          <div className="hero-title">
            <h1>SMK NEGERI 1 PANDEGLANG</h1>
            <p className="sub">
              Kelas <strong>XII RPL</strong> • Tahun Ajaran 2025/2026
            </p>
          </div>
          <img src="logo_sekolah.png" alt="Logo Sekolah" className="logo-small right-logo" />
        </div>

        <nav className="tabs" role="tablist">
          {[
            { id: "ringkasan", label: "Ringkasan" },
            { id: "siswa", label: "Siswa" },
            { id: "pengumuman", label: "Pengumuman" },
            { id: "kegiatan", label: "Kegiatan" },
          ].map((tab) => (
            <button
              key={tab.id}
              className={"tab " + (activeTab === tab.id ? "active" : "")}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </header>

      {/* MAIN AREA */}
      <main className="container">
        {/* LEFT COLUMN */}
        <section className="card left-col" id="ringkasan">
          <div className="ringkasan-top">
            <div className="wali-card">
              <div className="wali-photo">D</div>
              <div className="wali-info">
                <div className="role">Wali Kelas</div>
                <div className="name">Ibu Desi Atmayasari</div>
                <div className="muted">Wali Kelas XII RPL</div>
              </div>
            </div>

            <div className="foto-bersama">
              <img src="foto_bersama.jpg" alt="Foto Bersama" />
              <div className="caption">Foto kebersamaan kelas XII RPL</div>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat">
              <div className="num">{students.length}</div>
              <div className="label">Total Siswa</div>
            </div>
            <div className="stat">
              <div className="num">12</div>
              <div className="label">Mata Pelajaran</div>
            </div>
            <div className="stat">
              <div className="num">{pengumuman.length}</div>
              <div className="label">Pengumuman</div>
            </div>
            <div className="stat">
              <div className="num">{kegiatan.length}</div>
              <div className="label">Kegiatan</div>
            </div>
          </div>

          <h3 className="section-title">Struktur Kelas</h3>
          <div className="struktur-grid">
            <div className="struktur-card">
              <h3>Ketua Kelas</h3>
              <p>Nama Ketua</p>
            </div>
            <div className="struktur-card">
              <h3>Wakil</h3>
              <p>Nama Wakil</p>
            </div>
          </div>
        </section>

        {/* RIGHT COLUMN (TAB PANELS) */}
        <section className="card right-col">
          {activeTab === "ringkasan" && (
            <div className="tab-panel">
              <h3>Ringkasan</h3>
              <p className="lead">
                “Bersama membangun kenangan, meraih masa depan. Kelas XII RPL —
                fokus pada praktik, proyek, dan inovasi.”
              </p>
              <div className="mini-cards">
                <div className="mini">Aktif: <strong>Ya</strong></div>
                <div className="mini">Ekskul: <strong>-</strong></div>
                <div className="mini">Lab: <strong>Komputer RPL SKENSA</strong></div>
              </div>
            </div>
          )}

          {activeTab === "siswa" && (
            <div className="tab-panel">
              <div className="toolbar">
                <input
                  placeholder="Cari siswa, NIS atau nama..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button>Export CSV</button>
              </div>

              <div className="students-grid">
                {filteredStudents.map((s, i) => (
                  <div className="student-card" key={i}>
                    <img
                      src={s.foto}
                      alt={s.nama}
                      className="student-photo"
                    />
                    <div className="nama-siswa">{s.nama}</div>
                    <div className="nis-siswa">{s.nis}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "pengumuman" && (
            <div className="tab-panel">
              <h3>Pengumuman Terbaru</h3>
              <ul className="list">
                {pengumuman.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "kegiatan" && (
            <div className="tab-panel">
              <h3>Agenda Kegiatan</h3>
              <ul className="list">
                {kegiatan.map((k, i) => (
                  <li key={i}>{k}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </main>

      <footer className="footer">© 2025 SMK NEGERI 1 PANDEGLANG — XII RPL</footer>
    </div>
  );
}
