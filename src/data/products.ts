export type ProductCategory = "Software" | "IoT";

export interface ProductFeature {
  title: string;
  desc: string;
}

export interface Product {
  slug: string;
  num: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  description: string;
  longDescription: string;
  status: "Available" | "Beta" | "Coming Soon";
  image: string;
  gallery: string[];
  features: ProductFeature[];
  stack: string[];
  highlights: { value: string; label: string }[];
}

export const products: Product[] = [
  // ── Software ──────────────────────────────────────────────────────────
  {
    slug: "elite-pos",
    num: "01",
    name: "Elite POS",
    tagline: "All-in-one kasir untuk semua jenis usaha.",
    category: "Software",
    description:
      "Solusi point-of-sale lengkap untuk UMKM Indonesia — dari warung makan hingga chain minimarket. Satu aplikasi untuk semua transaksi, inventaris, dan laporan bisnis Anda.",
    longDescription:
      "Elite POS dirancang untuk memenuhi kebutuhan nyata bisnis Indonesia. Dengan antarmuka yang intuitif dan fitur yang komprehensif, Elite POS membantu pemilik usaha mengelola penjualan, stok, dan karyawan dari satu platform terpadu. Mendukung berbagai metode pembayaran termasuk QRIS, kartu, dan tunai.",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    ],
    features: [
      {
        title: "Multi-Payment Support",
        desc: "Terima pembayaran tunai, QRIS, kartu debit/kredit, dan transfer bank dalam satu antarmuka kasir.",
      },
      {
        title: "Real-time Inventory",
        desc: "Stok otomatis berkurang saat transaksi. Alert low stock, riwayat pergerakan barang, dan multi-gudang.",
      },
      {
        title: "Multi-Outlet",
        desc: "Kelola beberapa cabang dari satu dashboard. Laporan konsolidasi dan sinkronisasi stok antar outlet.",
      },
      {
        title: "Sales Analytics",
        desc: "Laporan penjualan harian, mingguan, dan bulanan. Analisis produk terlaris, peak hours, dan margin keuntungan.",
      },
      {
        title: "Employee Management",
        desc: "Manajemen shift, hak akses per role (kasir, supervisor, owner), dan tracking performa karyawan.",
      },
      {
        title: "Receipt & Print",
        desc: "Cetak struk ke printer thermal, kirim digital via WhatsApp atau email, dan kustomisasi template struk.",
      },
    ],
    stack: ["React Native", "Node.js", "PostgreSQL", "Redis", "Midtrans", "Socket.io"],
    highlights: [
      { value: "50+", label: "Active Businesses" },
      { value: "10k+", label: "Daily Transactions" },
      { value: "99.9%", label: "Uptime" },
    ],
  },
  {
    slug: "elite-vote",
    num: "02",
    name: "Elite Vote",
    tagline: "Sistem manajemen pemilu & pilkada yang aman dan transparan.",
    category: "Software",
    description:
      "Platform digital untuk mendukung pelaksanaan pemilihan umum dan pilkada — dari registrasi pemilih, manajemen TPS, hingga rekapitulasi suara secara real-time dengan audit trail lengkap.",
    longDescription:
      "Elite Vote dibangun dengan standar keamanan tinggi untuk memastikan integritas setiap proses pemilihan. Sistem ini mendukung alur kerja KPPS, PPK, hingga KPU dengan role-based access yang ketat, enkripsi data end-to-end, dan audit log yang tidak dapat dimanipulasi.",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "https://images.unsplash.com/photo-1494172961521-33799ddd43a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    ],
    features: [
      {
        title: "Registrasi & Verifikasi Pemilih",
        desc: "Import data DPT, verifikasi identitas digital, dan manajemen daftar pemilih per TPS secara terpusat.",
      },
      {
        title: "Real-time Vote Counting",
        desc: "Rekapitulasi suara berjenjang (TPS → Kecamatan → Kabupaten) dengan sinkronisasi data real-time.",
      },
      {
        title: "Audit Trail",
        desc: "Setiap aksi tercatat dengan timestamp, user, dan IP address. Data immutable untuk kebutuhan audit dan sengketa.",
      },
      {
        title: "Role-based Access",
        desc: "Hak akses terstruktur untuk KPPS, PPK, KPU, dan pemantau independen — sesuai hierarki organisasi pemilu.",
      },
      {
        title: "Dashboard Monitoring",
        desc: "Visualisasi hasil perolehan suara secara live, peta sebaran, dan progress pelaporan per wilayah.",
      },
      {
        title: "Laporan Resmi",
        desc: "Generate berita acara dan formulir C/DA/DB sesuai format resmi KPU secara otomatis.",
      },
    ],
    stack: ["Next.js", "PostgreSQL", "WebSocket", "Redis", "Docker", "Nginx"],
    highlights: [
      { value: "100%", label: "Audit Trail Coverage" },
      { value: "<2s", label: "Data Sync Latency" },
      { value: "E2E", label: "Encrypted" },
    ],
  },
  {
    slug: "mbg-pro-manage",
    num: "03",
    name: "MBG Pro Manage",
    tagline: "Sistem manajemen dapur Makan Bergizi Gratis.",
    category: "Software",
    description:
      "Platform khusus untuk mengelola operasional dapur program Makan Bergizi Gratis (MBG) — dari perencanaan menu, kalkulasi gizi, manajemen distribusi, hingga pelaporan ke satuan pelaksana.",
    longDescription:
      "MBG Pro Manage dibangun sesuai kebutuhan operasional program MBG pemerintah Indonesia. Sistem ini membantu dapur penerima program mengelola siklus produksi makanan secara efisien, memastikan standar gizi terpenuhi, dan menyediakan data yang dibutuhkan untuk pelaporan program.",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    ],
    features: [
      {
        title: "Perencanaan Menu & Gizi",
        desc: "Buat siklus menu mingguan/bulanan dengan kalkulasi nilai gizi otomatis sesuai standar AKG per kelompok penerima.",
      },
      {
        title: "Manajemen Bahan Baku",
        desc: "Tracking ketersediaan bahan, estimasi kebutuhan berdasarkan jumlah porsi, dan pencatatan penerimaan bahan dari supplier.",
      },
      {
        title: "Distribusi & Penerima",
        desc: "Kelola data penerima manfaat, jadwal distribusi, konfirmasi penerimaan, dan monitoring ketepatan sasaran.",
      },
      {
        title: "Laporan Program",
        desc: "Generate laporan harian, mingguan, dan bulanan sesuai format yang dibutuhkan satuan pelaksana MBG.",
      },
      {
        title: "Multi-Dapur",
        desc: "Satu platform untuk mengelola beberapa dapur sekaligus dengan laporan konsolidasi per wilayah.",
      },
      {
        title: "Quality Control",
        desc: "Checklist standar kebersihan, monitoring suhu penyimpanan, dan catatan insiden untuk memastikan keamanan pangan.",
      },
    ],
    stack: ["Next.js", "MySQL", "Node.js", "Chart.js", "REST API", "Docker"],
    highlights: [
      { value: "10k+", label: "Portions Tracked/Day" },
      { value: "Multi", label: "Dapur Support" },
      { value: "Gov", label: "Standard Compliant" },
    ],
  },
  {
    slug: "elite-karate",
    num: "04",
    name: "Elite Karate",
    tagline: "Sistem scoring karate digital — akurat, real-time, profesional.",
    category: "Software",
    description:
      "Platform manajemen pertandingan karate berbasis digital mirip Yabinya — untuk scoring real-time, manajemen bracket turnamen, panel juri, dan display board yang bisa ditampilkan ke layar besar.",
    longDescription:
      "Elite Karate dirancang untuk modernisasi penyelenggaraan pertandingan karate di Indonesia. Dari turnamen lokal hingga kejuaraan nasional, sistem ini memudahkan kerja wasit, memastikan akurasi skor, dan memberikan pengalaman menonton yang lebih baik dengan live display yang profesional.",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1555597673-b21d5c935865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1555597673-b21d5c935865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    ],
    features: [
      {
        title: "Real-time Scoring Board",
        desc: "Input skor dari perangkat wasit langsung terupdate di layar display dalam milidetik. Mendukung sistem poin Kata dan Kumite.",
      },
      {
        title: "Tournament Bracket",
        desc: "Generate bracket otomatis (single elimination, round robin, atau pool system) dengan manajemen undian dan seeding.",
      },
      {
        title: "Judge Panel Interface",
        desc: "Antarmuka khusus untuk tiap juri dengan input skor, flag, dan catatan — sinkronisasi real-time dengan sistem pusat.",
      },
      {
        title: "Multi-Category",
        desc: "Kelola semua kategori (usia, berat badan, gender) secara paralel dalam satu turnamen besar.",
      },
      {
        title: "Live Display Output",
        desc: "Output ke monitor/proyektor dengan tampilan profesional — timer, skor, nama atlet, bendera, dan animasi transisi.",
      },
      {
        title: "Statistics & Export",
        desc: "Statistik pertandingan lengkap, riwayat hasil, dan export ke PDF/Excel untuk dokumentasi dan medali.",
      },
    ],
    stack: ["React", "WebSocket", "Node.js", "PostgreSQL", "Socket.io", "Tailwind CSS"],
    highlights: [
      { value: "<50ms", label: "Score Latency" },
      { value: "Multi", label: "Category Support" },
      { value: "HD", label: "Display Output" },
    ],
  },

  // ── IoT ───────────────────────────────────────────────────────────────
  {
    slug: "fingerprint-rfid",
    num: "05",
    name: "Fingerprint + RFID",
    tagline: "Sistem absensi & akses kontrol biometrik yang andal.",
    category: "IoT",
    description:
      "Perangkat absensi dan kontrol akses berbasis sidik jari dan kartu RFID dengan integrasi dashboard web real-time. Cocok untuk kantor, sekolah, pabrik, dan fasilitas yang membutuhkan kontrol akses aman.",
    longDescription:
      "Perangkat kami menggabungkan sensor sidik jari kapasitif presisi tinggi dengan pembaca RFID 13.56MHz dalam satu unit kompak. Data kehadiran langsung tersinkronisasi ke cloud, dapat diakses dari dashboard web kapan saja dan dari mana saja.",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    ],
    features: [
      {
        title: "Dual Authentication",
        desc: "Dukung autentikasi sidik jari (kapasitif, FAR < 0.001%) dan kartu RFID 13.56MHz (MIFARE) secara bersamaan.",
      },
      {
        title: "Real-time Sync",
        desc: "Data kehadiran tersinkronisasi ke server via WiFi/Ethernet dalam <1 detik. Offline mode dengan buffer lokal saat koneksi putus.",
      },
      {
        title: "Web Dashboard",
        desc: "Monitor kehadiran real-time, laporan harian/bulanan, manajemen pengguna, dan export Excel/PDF dari browser.",
      },
      {
        title: "API Integration",
        desc: "REST API tersedia untuk integrasi dengan sistem HR, payroll, atau ERP yang sudah ada.",
      },
      {
        title: "Tamper Detection",
        desc: "Sensor fisik mendeteksi percobaan pelepasan paksa dan mengirim alert ke admin secara instan.",
      },
      {
        title: "Multi-device Management",
        desc: "Kelola ratusan perangkat dari satu dashboard. Sinkronisasi data pengguna ke semua perangkat sekaligus.",
      },
    ],
    stack: ["ESP32", "C++", "MQTT", "Node.js", "MariaDB", "React"],
    highlights: [
      { value: "<0.001%", label: "False Accept Rate" },
      { value: "<1s", label: "Sync Latency" },
      { value: "Offline", label: "Buffer Mode" },
    ],
  },
  {
    slug: "temperature-sensor",
    num: "06",
    name: "Sensor Suhu Ruangan",
    tagline: "Monitoring suhu & kelembaban ruangan secara real-time.",
    category: "IoT",
    description:
      "Perangkat IoT untuk monitoring suhu dan kelembaban ruangan secara real-time dengan alert otomatis, logging historis, dan dashboard yang dapat diakses dari mana saja.",
    longDescription:
      "Ideal untuk server room, gudang farmasi, cold storage, ruang produksi, atau fasilitas apapun yang memerlukan pemantauan kondisi lingkungan yang ketat. Perangkat kami menggunakan sensor presisi dengan akurasi ±0.5°C dan dapat mengelola hingga puluhan node sensor dalam satu jaringan.",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    ],
    features: [
      {
        title: "Presisi Tinggi",
        desc: "Sensor DHT22/SHT31 dengan akurasi suhu ±0.5°C dan kelembaban ±2% RH. Kalibrasi pabrik dan dapat dikalibrasi ulang.",
      },
      {
        title: "Alert Otomatis",
        desc: "Notifikasi via WhatsApp, email, atau SMS ketika suhu/kelembaban melewati threshold yang dikonfigurasi.",
      },
      {
        title: "Historical Logging",
        desc: "Data suhu dan kelembaban tersimpan setiap interval yang dapat dikonfigurasi (1 menit hingga 1 jam). Retensi data hingga 2 tahun.",
      },
      {
        title: "Multi-sensor Network",
        desc: "Hubungkan hingga 50 node sensor dalam satu jaringan dengan satu dashboard terpusat.",
      },
      {
        title: "Web & Mobile Dashboard",
        desc: "Visualisasi grafik real-time, heatmap ruangan, dan laporan kondisi lingkungan dari web atau smartphone.",
      },
      {
        title: "Low Power",
        desc: "Mode deep sleep untuk efisiensi daya. Dapat berjalan dengan baterai hingga 6 bulan pada mode sampling 5 menit.",
      },
    ],
    stack: ["ESP8266", "DHT22/SHT31", "MQTT", "Node.js", "InfluxDB", "Grafana"],
    highlights: [
      { value: "±0.5°C", label: "Accuracy" },
      { value: "50+", label: "Nodes per Network" },
      { value: "2yr", label: "Data Retention" },
    ],
  },
  {
    slug: "fish-feeder",
    num: "07",
    name: "Fish Feeder",
    tagline: "Pemberi makan ikan otomatis yang bisa dikontrol dari mana saja.",
    category: "IoT",
    description:
      "Perangkat pemberi makan ikan otomatis berbasis IoT dengan penjadwalan fleksibel, kontrol porsi, monitoring jarak jauh, dan notifikasi pintar — cocok untuk kolam, akuarium, dan tambak skala kecil.",
    longDescription:
      "Fish Feeder kami menggabungkan mekanisme dispensing presisi dengan konektivitas IoT untuk memberikan kontrol penuh atas pola makan ikan Anda. Baik saat di rumah, di kantor, atau berlibur, ikan Anda tetap mendapat makan tepat waktu dengan porsi yang tepat.",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "https://images.unsplash.com/photo-1498842812179-c81beecf902c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    ],
    features: [
      {
        title: "Jadwal Fleksibel",
        desc: "Set hingga 8 jadwal makan per hari dengan interval waktu dan porsi berbeda untuk setiap jadwal.",
      },
      {
        title: "Remote Control",
        desc: "Beri makan manual kapan saja dari smartphone via aplikasi mobile. Cocok untuk keadaan darurat atau pemberian makan ekstra.",
      },
      {
        title: "Kontrol Porsi",
        desc: "Motor servo presisi mengontrol jumlah pakan yang keluar. Kalibrasi per jenis pakan untuk akurasi optimal.",
      },
      {
        title: "Feed History",
        desc: "Log lengkap waktu dan jumlah pemberian makan. Pantau konsistensi jadwal dan konsumsi pakan per hari/minggu.",
      },
      {
        title: "Low Feed Alert",
        desc: "Sensor level pakan mendeteksi ketika persediaan menipis dan mengirim notifikasi sebelum habis.",
      },
      {
        title: "Backup Power",
        desc: "Baterai backup memastikan jadwal makan tetap berjalan meski listrik padam hingga 12 jam.",
      },
    ],
    stack: ["ESP32", "C++", "MQTT", "React Native", "Firebase", "Servo Motor"],
    highlights: [
      { value: "8x", label: "Schedules per Day" },
      { value: "12hr", label: "Backup Battery" },
      { value: "Remote", label: "Control Anywhere" },
    ],
  },
];

export const softwareProducts = products.filter((p) => p.category === "Software");
export const iotProducts = products.filter((p) => p.category === "IoT");
