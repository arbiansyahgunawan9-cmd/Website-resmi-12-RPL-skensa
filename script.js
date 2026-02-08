const DATA = {
  staff: {
    kepalaSekolah: 'Drs. Muhammad Juwayni',
    wakilKepala: 'Solahudin',
    waliKelas: 'Desi Atmayasari',
    ketua: 'Miftah Fauzi',
    wakilKetua: 'Septya ramadhani atmaja',
    sekretaris: 'Kay queena giftarin/Pajri',
    bendahara: 'Resa/Ahmad Ibnu'
  },
  students: [
    { name: 'Ahmad ibnu', photo: 'ahmad_ibnu.jpg' },
    { name: 'Adli luthfan', photo: 'adli_luthfan.jpg' },
    { name: 'Ahmad fadli tamam', photo: 'ahmad_fadli.jpg' },
    { name: 'Ahmad ruyani', photo: 'ahmad_ruyani.jpg' },
    { name: 'Ali al kausar', photo: 'ali_kausar.jpg' },
    { name: 'Bintang mahaputera', photo: 'bintang.jpg' },
    { name: 'Dika sastra wijaya', photo: 'dika.jpg' },
    { name: 'Farel dewangga sandi', photo: 'farel.jpg' },
    { name: 'Firmansyah', photo: 'firmansyah.jpg' },
    { name: 'Hafidz anshari', photo: 'hafidz.jpg' },
    { name: 'Halimatusyadiah', photo: 'halima.jpg' },
    { name: 'Holis huriyah', photo: 'holis.jpg' },
    { name: 'Kamilah dewi', photo: 'kamilah.jpg' },
    { name: 'Kay queena giftarin', photo: 'kay.jpg' },
    { name: 'M Dirly pratama', photo: 'dirly.jpg' },
    { name: 'Maesti indria heriyawati', photo: 'maesti.jpg' },
    { name: 'M. Miftah fauzi', photo: 'miftah.jpg' },
    { name: 'M. Nuryusuf muzaqki', photo: 'nuryusuf.jpg' },
    { name: 'M. Rafael ribasistazart', photo: 'rafael.jpg' },
    { name: 'M. Arbiansyah gunawan', photo: 'arbi.jpg' },
    { name: 'M. Rakha auliya rahman', photo: 'rakha.jpg' },
    { name: 'Pajri', photo: 'pajri.jpg' },
    { name: 'Putra rizki maulana', photo: 'putra.jpg' },
    { name: 'Radit fahrizki', photo: 'radit.jpg' },
    { name: 'Rasya putra paleni', photo: 'rasya.jpg' },
    { name: 'Resa', photo: 'resa.jpg' },
    { name: 'Ridho firmansyah', photo: 'ridho.jpg' },
    { name: 'Risa febrianti', photo: 'risa.jpg' },
    { name: 'Septya ramadhani atmaja', photo: 'septya.jpg' },
    { name: 'Safitri', photo: 'safitri.jpg' },
    { name: 'Siti nurhana', photo: 'siti.jpg' },
    { name: 'Sulthon fawaz fadhullah', photo: 'sulthon.jpg' },
    { name: 'Yunsa alpi sahrin', photo: 'yunsa.jpg' }
  ],

  // mapel untuk angka statistik "8"
  mapel: [
    { kode: "BIN", nama: "Bahasa Indonesia", sub: "Kelas XII RPL" },
    { kode: "PP",  nama: "Pendidikan Pancasila", sub: "Kelas XII RPL" },
    { kode: "INF", nama: "Informatika", sub: "Kejuruan RPL" },
    { kode: "PKK", nama: "Produk Kreatif & Kewirausahaan", sub: "PPLG" },
    { kode: "RPL", nama: "Kejuruan RPL / Digital Branding", sub: "Mapel Pilihan" },
    { kode: "PAI", nama: "PAI & Budi Pekerti", sub: "Kelas XII RPL" },
    { kode: "BIG", nama: "Bahasa Inggris", sub: "Kelas XII RPL" },
    { kode: "MTK", nama: "Matematika", sub: "Kelas XII RPL" }
  ],

  pengumuman: [
    { title: 'Nothing.' },
    { title: 'Nothing.' }
  ],
  kegiatan: [
    { title: 'Nothing.' },
    { title: 'Nothing.' }
  ]
};

// ===== JADWAL KBM (sesuai kertas) =====
const JADWAL_ROWS = [
  {
    no: 1,
    jam: "07.00 - 07.45",
    senin: "UPACARA",
    selasa: "Selasih",
    rabu_jam: "07.00 - 07.45",
    rabu: "Pendidikan Pancasila",
    kamis: "Produk Kreatif dan Kewirausahaan PPLG / Mapel Pilihan digital Branding dan mapel Pilihan TKJ",
    jumat_jam: "07.00 - 07.45",
    jumat: "JUM'ATAN"
  },
  {
    no: 2,
    jam: "07.45 - 08.30",
    senin: "Kejuruan RPL/Digital Branding (Mapel Pilihan Kuliner) / PKK",
    selasa: "Bahasa Indonesia",
    rabu_jam: "07.45 - 08.25",
    rabu: "Pendidikan Pancasila",
    kamis: "Produk Kreatif dan Kewirausahaan PPLG / Mapel Pilihan digital Branding dan mapel Pilihan TKJ",
    jumat_jam: "07.45 - 08.30",
    jumat: "Kejuruan RPL/Digital Branding (Mapel Pilihan Kuliner) / PKK"
  },
  {
    no: 3,
    jam: "08.30 - 09.10",
    senin: "Kejuruan RPL/Digital Branding (Mapel Pilihan Kuliner) / PKK",
    selasa: "Bahasa Indonesia",
    rabu_jam: "08.25 - 09.05",
    rabu: "Informatika / Kejuruan RPL / Mapel Pilihan TKJ",
    kamis: "Produk Kreatif dan Kewirausahaan PPLG / Mapel Pilihan digital Branding dan mapel Pilihan TKJ",
    jumat_jam: "08.30 - 09.10",
    jumat: "Kejuruan RPL/Digital Branding (Mapel Pilihan Kuliner) / PKK"
  },
  {
    no: 4,
    jam: "09.25 - 10.05",
    senin: "Kejuruan RPL/Digital Branding (Mapel Pilihan Kuliner) / PKK",
    selasa: "Bahasa Indonesia",
    rabu_jam: "09.20 - 10.00",
    rabu: "Informatika / Kejuruan RPL / Mapel Pilihan TKJ",
    kamis: "Dasar-dasar Seni Pertunjukan / Kejuruan TAT / Muatan Lokal (Beduk) / Mulok (Sunda Banten)",
    jumat_jam: "09.25 - 10.05",
    jumat: "Pendidikan Agama Islam dan Budi Pekerti"
  },
  {
    no: 5,
    jam: "10.05 - 10.45",
    senin: "Informatika / Mapel Pilihan RPL / Mapel Pilihan Bisnis Ritel (Digital Branding)",
    selasa: "Informatika / Kejuruan RPL / PKK",
    rabu_jam: "10.00 - 10.40",
    rabu: "Informatika / Kejuruan RPL / Mapel Pilihan TKJ",
    kamis: "Dasar-dasar Seni Pertunjukan / Kejuruan TAT / Muatan Lokal (Beduk) / Mulok (Sunda Banten)",
    jumat_jam: "10.05 - 10.45",
    jumat: "Pendidikan Agama Islam dan Budi Pekerti"
  },
  {
    no: 6,
    jam: "10.45 - 11.25",
    senin: "Informatika / Mapel Pilihan RPL / Mapel Pilihan Bisnis Ritel (Digital Branding)",
    selasa: "Informatika / Kejuruan RPL / PKK",
    rabu_jam: "10.40 - 11.20",
    rabu: "Informatika / Kejuruan RPL / Mapel Pilihan TKJ",
    kamis: "Pendidikan Agama Islam dan Budi Pekerti",
    jumat_jam: "",
    jumat: "—"
  },
  {
    no: 7,
    jam: "11.25 - 12.05",
    senin: "Informatika / Mapel Pilihan RPL / Mapel Pilihan Bisnis Ritel (Digital Branding)",
    selasa: "Informatika / Kejuruan RPL / PKK",
    rabu_jam: "11.20 - 12.00",
    rabu: "Informatika / Kejuruan RPL / Mapel Pilihan TKJ",
    kamis: "Informatika / Kejuruan RPL / Mapel Pilihan TKJ",
    jumat_jam: "",
    jumat: "—"
  },
  {
    no: 8,
    jam: "12.35 - 13.15",
    senin: "Mapel Pilihan RPL / Mapel Pilihan Bisnis Ritel (Digital Branding)",
    selasa: "Informatika / Kejuruan RPL / PKK",
    rabu_jam: "12.30 - 13.10",
    rabu: "Informatika / Kejuruan RPL / Mapel Pilihan TKJ",
    kamis: "Informatika / Kejuruan RPL / Mapel Pilihan TKJ",
    jumat_jam: "",
    jumat: "—"
  },
  {
    no: 9,
    jam: "13.15 - 13.55",
    senin: "Bahasa Inggris",
    selasa: "Informatika / Kejuruan RPL / PKK",
    rabu_jam: "13.10 - 13.50",
    rabu: "Produk Kreatif dan Kewirausahaan PPLG / Mapel Pilihan digital Branding dan mapel Pilihan TKJ",
    kamis: "Matematika",
    jumat_jam: "",
    jumat: "—"
  },
  {
    no: 10,
    jam: "13.55 - 14.35",
    senin: "Bahasa Inggris",
    selasa: "Informatika / Kejuruan RPL / PKK",
    rabu_jam: "13.50 - 14.30",
    rabu: "Produk Kreatif dan Kewirausahaan PPLG / Mapel Pilihan digital Branding dan mapel Pilihan TKJ",
    kamis: "Matematika",
    jumat_jam: "",
    jumat: "—"
  },
  {
    no: 11,
    jam: "14.35 - 15.15",
    senin: "Bahasa Inggris",
    selasa: "Informatika / Kejuruan RPL / PKK",
    rabu_jam: "14.30 - 15.10",
    rabu: "Produk Kreatif dan Kewirausahaan PPLG / Mapel Pilihan digital Branding dan mapel Pilihan TKJ",
    kamis: "Matematika",
    jumat_jam: "",
    jumat: "—"
  },
  {
    no: 12,
    jam: "15.15 - 15.55",
    senin: "Bahasa Inggris",
    selasa: "Informatika / Kejuruan RPL / PKK",
    rabu_jam: "",
    rabu: "—",
    kamis: "—",
    jumat_jam: "",
    jumat: "—"
  },
];

// ===== Helpers =====
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

function initialsOf(name){
  if(!name) return 'UK';
  return name.split(' ').map(s => s[0] || '').slice(0,2).join('').toUpperCase();
}

function makeSVGAvatar(initials, w=200, h=200, bg1='#0ea5e9', bg2='#0674d4') {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 ${w} ${h}'>
    <defs><linearGradient id='g' x1='0' x2='1'><stop offset='0' stop-color='${bg1}'/><stop offset='1' stop-color='${bg2}'/></linearGradient></defs>
    <rect width='100%' height='100%' rx='24' fill='url(#g)'/>
    <text x='50%' y='55%' font-family='Arial, Helvetica, sans-serif' font-size='52' fill='white' font-weight='700'
      text-anchor='middle' alignment-baseline='middle'>${initials}</text>
  </svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str).replace(/[&<>"']/g, (m) =>
    ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])
  );
}

// ===== TAB SYSTEM (SATU SAJA) =====
function openTab(tabName) {
  // tombol active
  $$('.tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });

  // sembunyikan semua panel
  $$('.tab-panel').forEach(panel => panel.setAttribute('hidden', ''));

  // tampilkan panel yang dipilih
  const activePanel = document.getElementById(`panel-${tabName}`);
  if (activePanel) activePanel.removeAttribute('hidden');
}

// ===== Render / Init =====
function init() {
  const y = $('#year');
  if (y) y.textContent = new Date().getFullYear();

  renderStats();
  renderStruktur();
  renderStudents(DATA.students);
  renderPengumuman();
  renderKegiatan();
  renderJadwal();       // ✅ isi jadwal tabel

  setupSearch();
  setupExport();
  setupTabs();
  setupStatsShortcuts();
  setupStars();
  setupLightbox();

  // default tab
  openTab('ringkasan');
}

// ===== Tabs click =====
function setupTabs(){
  const tabs = $$('.tab');
  tabs.forEach(btn => {
    btn.addEventListener('click', () => openTab(btn.dataset.tab));
  });
}

// klik stat kiri untuk pindah tab (kalau id ada)
function setupStatsShortcuts(){
  const goMapel = $('#goMapel');
  if (goMapel) goMapel.addEventListener('click', () => openTab('mapel'));

  const goSiswa = $('#goSiswa');
  if (goSiswa) goSiswa.addEventListener('click', () => openTab('siswa'));

  const goPengumuman = $('#goPengumuman');
  if (goPengumuman) goPengumuman.addEventListener('click', () => openTab('pengumuman'));

  const goKegiatan = $('#goKegiatan');
  if (goKegiatan) goKegiatan.addEventListener('click', () => openTab('kegiatan'));
}

// ===== Stats =====
function renderStats(){
  const ts = $('#total-siswa');
  if (ts) ts.textContent = DATA.students.length;

  const tm = $('#total-mapel');
  if (tm) tm.textContent = DATA.mapel.length;

  const tp = $('#total-pengumuman');
  if (tp) tp.textContent = DATA.pengumuman.length;

  const tk = $('#total-kegiatan');
  if (tk) tk.textContent = DATA.kegiatan.length;
}

// ===== Struktur =====
function renderStruktur(){
  const container = $('#struktur-grid');
  if(!container) return;

  const keys = [
    {role:'Kepala Sekolah', name: DATA.staff.kepalaSekolah},
    {role:'Wakil Kepala', name: DATA.staff.wakilKepala},
    {role:'Wali Kelas', name: DATA.staff.waliKelas},
    {role:'Ketua Kelas', name: DATA.staff.ketua},
    {role:'Wakil Ketua', name: DATA.staff.wakilKetua},
    {role:'Sekretaris', name: DATA.staff.sekretaris},
    {role:'Bendahara', name: DATA.staff.bendahara}
  ];

  container.innerHTML = '';
  keys.forEach(k => {
    const el = document.createElement('div');
    el.className = 'struktur-card';
    el.innerHTML = `<h3>${escapeHtml(k.role)}</h3><p>${escapeHtml(k.name)}</p>`;
    container.appendChild(el);
  });
}

// ===== Students =====
function renderStudents(list){
  const grid = $('#studentsGrid');
  if(!grid) return;

  grid.innerHTML = '';

  list.forEach((s, idx) => {
    const card = document.createElement('div');
    card.className = 'student-card';

    const img = document.createElement('img');
    img.className = 'student-photo';
    img.alt = s.name || `Siswa ${idx+1}`;
    img.src = s.photo || '';
    img.onerror = function(){
      this.onerror = null;
      this.src = makeSVGAvatar(initialsOf(s.name), 200, 200);
    };

    const nameEl = document.createElement('div');
    nameEl.className = 'nama-siswa';
    nameEl.textContent = s.name || `Siswa ${idx+1}`;

    const nisEl = document.createElement('div');
    nisEl.className = 'nis-siswa';
    nisEl.textContent = `NIS: ${1000 + idx} • RPL`;

    card.appendChild(img);
    card.appendChild(nameEl);
    card.appendChild(nisEl);

    grid.appendChild(card);
  });
}

// ===== Search =====
function setupSearch(){
  const input = $('#search');
  if(!input) return;

  input.addEventListener('input', (e) => {
    const q = (e.target.value || '').toLowerCase().trim();
    const filtered = DATA.students.filter((s, i) => {
      const nis = String(1000 + i);
      return (s.name && s.name.toLowerCase().includes(q)) || nis.includes(q);
    });
    renderStudents(filtered);
  });
}

// ===== Pengumuman & Kegiatan =====
function renderPengumuman(){
  const ul = $('#pengumuman-list');
  if(!ul) return;

  ul.innerHTML = '';
  DATA.pengumuman.forEach(p => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${escapeHtml(p.title)}</strong>`;
    ul.appendChild(li);
  });
}

function renderKegiatan(){
  const ul = $('#kegiatan-list');
  if(!ul) return;

  ul.innerHTML = '';
  DATA.kegiatan.forEach(k => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${escapeHtml(k.title)}</strong>`;
    ul.appendChild(li);
  });
}

// ===== Export CSV =====
function setupExport(){
  const btn = $('#exportCSV');
  if(!btn) return;

  btn.addEventListener('click', () => {
    const rows = DATA.students.map((s, i) => [1000 + i, s.name, 'RPL']);
    const escapeCell = (v) => `"${String(v).replace(/"/g, '""')}"`;
    const csv = ['NIS,Name,Jurusan', ...rows.map(r => r.map(escapeCell).join(','))].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'students_xii_rpl.csv';
    document.body.appendChild(a);
    a.click();
    a.remove();

    URL.revokeObjectURL(url);
  });
}

// ===== Jadwal (panel mapel) =====
function renderJadwal(){
  const table = document.getElementById('jadwalTable');
  if(!table) return;

  table.innerHTML = `
    <thead>
      <tr>
        <th>No</th>
        <th>Jam</th>
        <th>Senin</th>
        <th>Selasa</th>
        <th>Jam (Rabu)</th>
        <th>Rabu</th>
        <th>Kamis</th>
        <th>Jam (Jumat)</th>
        <th>Jumat</th>
      </tr>
    </thead>
    <tbody>
      ${JADWAL_ROWS.map(r => `
        <tr>
          <td>${r.no}</td>
          <td>${escapeHtml(r.jam)}</td>
          <td>${escapeHtml(r.senin)}</td>
          <td>${escapeHtml(r.selasa)}</td>
          <td>${escapeHtml(r.rabu_jam || "—")}</td>
          <td>${escapeHtml(r.rabu)}</td>
          <td>${escapeHtml(r.kamis)}</td>
          <td>${escapeHtml(r.jumat_jam || "—")}</td>
          <td>${escapeHtml(r.jumat)}</td>
        </tr>
      `).join('')}
    </tbody>
  `;
}

// ===== Stars =====
function setupStars(){
  const starField = document.querySelector('.star-field');
  if(!starField) return;

  starField.innerHTML = '';
  for (let i = 0; i < 40; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.animationDuration = 2 + Math.random() * 3 + 's';
    star.style.animationDelay = Math.random() * 5 + 's';
    starField.appendChild(star);
  }
}

// ===== Lightbox ringkasan =====
function setupLightbox(){
  document.querySelectorAll(".foto-item").forEach(item => {
    item.addEventListener("click", () => {
      const src = item.dataset.full;
      if(!src) return;

      const overlay = document.createElement("div");
      overlay.className = "lightbox";
      overlay.innerHTML = `<img src="${src}" alt="Foto">`;
      overlay.addEventListener("click", () => overlay.remove());

      document.body.appendChild(overlay);
    });
  });
}

// ===== Start =====
document.addEventListener('DOMContentLoaded', init);
