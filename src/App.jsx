const featureCards = [
  {
    code: "TR",
    title: "Transaksi Cepat",
    description:
      "Tambah, edit, filter, dan cari transaksi pemasukan maupun pengeluaran dengan rapi."
  },
  {
    code: "AI",
    title: "Asisten AI Keuangan",
    description:
      "Tanya kondisi keuanganmu, dapat ringkasan bulanan, dan insight otomatis dari datamu."
  },
  {
    code: "KT",
    title: "Kantong Multi Akun",
    description:
      "Pisahkan saldo dompet, bank, e-wallet, lalu transfer antar kantong dalam beberapa klik."
  },
  {
    code: "HP",
    title: "Hutang & Piutang",
    description:
      "Catat siapa berhutang, jatuh tempo, sisa tagihan, dan progress pembayaran."
  },
  {
    code: "TG",
    title: "Tanggungan Rutin",
    description:
      "Kelola biaya bulanan seperti listrik, wifi, cicilan motor, lengkap dengan status periode."
  },
  {
    code: "KG",
    title: "Kategori Fleksibel",
    description:
      "Buat kategori pemasukan dan pengeluaran sendiri agar pencatatan makin akurat."
  },
  {
    code: "AG",
    title: "Anggaran Bulanan",
    description:
      "Pantau progres anggaran per kategori dan lihat status aman, hampir, atau terlampaui."
  },
  {
    code: "LP",
    title: "Laporan Visual",
    description:
      "Lihat tren bulanan, donut kategori, serta insight pemasukan-pengeluaran per periode."
  },
  {
    code: "ST",
    title: "Setelan Lengkap",
    description:
      "Atur notifikasi harian, mata uang default, dan konfigurasi AI custom sesuai kebutuhan."
  }
];

const keyPoints = [
  "Satu dashboard untuk saldo, pemasukan, pengeluaran, dan tren 7 hari terakhir.",
  "Desain mobile-first, cepat dibuka, nyaman dipakai harian.",
  "Asisten AI langsung membaca data transaksi, anggaran, hutang, dan kantongmu."
];

const faqs = [
  {
    question: "Apakah bisa dipakai untuk kebutuhan pribadi dan keluarga?",
    answer:
      "Bisa. Struktur kategori, kantong, dan tanggungan dibuat fleksibel untuk personal maupun rumah tangga."
  },
  {
    question: "Bagaimana aplikasi membantu mengontrol pengeluaran?",
    answer:
      "Kamu bisa set anggaran per kategori, cek status pemakaian, lihat tren, lalu minta saran dari Asisten AI."
  },
  {
    question: "Apakah data laporan bisa dilihat per bulan dan tahun?",
    answer:
      "Ya. Modul Laporan mendukung filter bulan-tahun, tren bulanan, serta analisis kategori pemasukan dan pengeluaran."
  },
  {
    question: "Apakah aplikasi mendukung pencatatan dalam Rupiah Indonesia?",
    answer:
      "Ya. Kelola Keuangan mendukung pengaturan mata uang, termasuk Rupiah (IDR), sehingga cocok untuk pengguna Indonesia."
  },
  {
    question: "Bisakah transaksi, anggaran, dan hutang dikelola dalam satu aplikasi?",
    answer:
      "Bisa. Semua modul inti saling terhubung agar kamu bisa mencatat, memantau, dan mengevaluasi keuangan dari satu dashboard."
  }
];

const seoKeywords = [
  "aplikasi catat pengeluaran harian",
  "aplikasi keuangan pribadi Indonesia",
  "aplikasi anggaran bulanan",
  "aplikasi hutang piutang",
  "laporan keuangan pribadi",
  "asisten AI keuangan"
];

const galleryImages = [
  { src: "/images/features/home.png", alt: "Dashboard aplikasi keuangan pribadi dengan ringkasan saldo dan tren." },
  { src: "/images/features/transaksi.png", alt: "Halaman transaksi pemasukan dan pengeluaran dengan filter data." },
  { src: "/images/features/ai.png", alt: "Asisten AI untuk analisis keuangan berdasarkan data pengguna." },
  { src: "/images/features/kantong.png", alt: "Manajemen kantong Dompet, Bank, dan E-Wallet dalam satu aplikasi." },
  { src: "/images/features/hutang-piutang.png", alt: "Fitur hutang piutang dengan status jatuh tempo dan pembayaran." },
  { src: "/images/features/tanggungan.png", alt: "Tanggungan rutin bulanan seperti listrik, wifi, dan cicilan." },
  { src: "/images/features/kategori.png", alt: "Pengelolaan kategori pemasukan dan kategori pengeluaran." },
  { src: "/images/features/anggaran.png", alt: "Pengaturan anggaran bulanan per kategori beserta progres pemakaian." },
  { src: "/images/features/laporan.png", alt: "Laporan keuangan bulanan dengan grafik tren pemasukan pengeluaran." },
  { src: "/images/features/setelan.png", alt: "Setelan notifikasi, mata uang, dan konfigurasi AI aplikasi." }
];

const appUrl = import.meta.env.VITE_APP_URL || "https://kelola-keuangan.mudahdeal.com/";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Lewati ke konten utama
      </a>

      <header className="site-header" id="top">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="Kelola Keuangan Home">
            <span className="brand-mark" aria-hidden="true">
              <img className="brand-logo" src="/logo.webp" alt="" width="40" height="40" />
            </span>
            <span className="brand-name">Kelola Keuangan</span>
          </a>

          <nav className="site-nav" aria-label="Navigasi utama">
            <a href="#fitur">Fitur</a>
            <a href="#manfaat">Manfaat</a>
            <a href="#galeri">Preview</a>
            <a href="#alasan">Keunggulan</a>
            <a href="#faq">FAQ</a>
          </nav>

          <a
            className="btn btn-sm btn-outline"
            href={appUrl}
            target="_blank"
            rel="noreferrer"
          >
            Coba Aplikasi
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow">Aplikasi Keuangan Pribadi + AI</p>
              <h1>Catat Uang Harian, Dapat Insight, dan Ambil Keputusan Lebih Tenang</h1>
              <p className="lead">
                Kelola transaksi, kantong, hutang-piutang, tanggungan, kategori, anggaran, sampai
                laporan bulanan dalam satu aplikasi yang ringan dan jelas.
              </p>

              <div className="hero-actions">
                <a
                  className="btn btn-primary"
                  href={appUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Mulai Gratis
                </a>
                <a className="btn btn-secondary" href="#fitur">
                  Lihat Semua Fitur
                </a>
              </div>

              <ul className="point-list">
                {keyPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>

            <figure className="hero-visual reveal">
              <img
                src="/hero-graph.svg"
                alt="Contoh ringkasan saldo, pemasukan, dan pengeluaran di Kelola Keuangan"
                width="660"
                height="460"
                loading="eager"
                fetchPriority="high"
              />
            </figure>
          </div>
        </section>

        <section className="seo-content" id="manfaat">
          <div className="container seo-wrap">
            <p className="eyebrow">Aplikasi Keuangan Indonesia</p>
            <h2>Aplikasi Catat Pengeluaran dan Anggaran untuk Pengguna Indonesia</h2>
            <p className="section-lead">
              Kelola Keuangan membantu kamu mencatat pemasukan dan pengeluaran harian, menyusun anggaran
              bulanan, memantau hutang-piutang, dan membaca laporan keuangan personal dalam satu aplikasi.
              Cocok untuk pengguna yang ingin kontrol arus kas rumah tangga maupun keuangan pribadi.
            </p>
            <p className="section-lead">
              Dibanding pencatatan manual di spreadsheet, aplikasi ini memberi alur yang lebih praktis:
              transaksi tercatat real-time, kategori bisa disesuaikan, progres anggaran terlihat cepat,
              serta insight otomatis dari Asisten AI untuk membantu keputusan finansial.
            </p>
            <div className="keyword-chips" aria-label="Topik utama halaman">
              {seoKeywords.map((keyword) => (
                <span className="chip" key={keyword}>
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="features" id="fitur">
          <div className="container">
            <p className="eyebrow">Fitur Lengkap</p>
            <h2>Semua Menu Inti Keuangan dalam Satu Tempat</h2>
            <p className="section-lead">
              Fitur di bawah dirancang dari alur nyata pengguna: catat dulu, analisis cepat, lalu
              ambil keputusan.
            </p>

            <div className="feature-grid">
              {featureCards.map((item, index) => (
                <article
                  className="feature-card reveal"
                  key={item.title}
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <span className="feature-code" aria-hidden="true">
                    {item.code}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="showcase" id="galeri">
          <div className="container">
            <h2 className="sr-only">Galeri Screenshot Kelola Keuangan</h2>
            <div className="gallery-grid" role="list" aria-label="Galeri screenshot aplikasi Kelola Keuangan">
              {galleryImages.map((item, index) => (
                <figure
                  className="gallery-item reveal"
                  key={item.src}
                  style={{ animationDelay: `${index * 45}ms` }}
                >
                  <a
                    className="gallery-link"
                    href={item.src}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Lihat screenshot penuh ${index + 1}`}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      width="430"
                      height="932"
                      sizes="(max-width: 420px) 88vw, (max-width: 900px) 46vw, (max-width: 1280px) 30vw, 22vw"
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="advantage" id="alasan">
          <div className="container advantage-grid">
            <article className="panel reveal">
              <p className="eyebrow">Kenapa Banyak yang Cocok</p>
              <h2>Praktis untuk Dipakai Harian, Kuat untuk Analisis Bulanan</h2>
              <p>
                Kamu tidak perlu pindah-pindah aplikasi. Dari transaksi harian sampai evaluasi
                bulanan, semua data tersambung.
              </p>
              <ol className="step-list">
                <li>
                  <strong>Catat:</strong> tambah transaksi, hutang-piutang, dan tanggungan rutin.
                </li>
                <li>
                  <strong>Pantau:</strong> cek saldo kantong, progres anggaran, dan tren kategori.
                </li>
                <li>
                  <strong>Optimalkan:</strong> pakai Asisten AI untuk insight dan rekomendasi aksi.
                </li>
              </ol>
            </article>

            <article className="panel panel-highlight reveal">
              <p className="badge">Asisten AI Beta</p>
              <h3>Tanya Seperti Ngobrol, Dapat Jawaban Berbasis Data Kamu</h3>
              <ul className="chat-list">
                <li>Analisis keuangan saya bulan ini</li>
                <li>Bagaimana cara mengurangi pengeluaran?</li>
                <li>Berapa total hutang saya saat ini?</li>
                <li>Tips menabung dari penghasilan saya</li>
              </ul>
              <p className="small">
                Cocok untuk pengguna yang ingin keputusan cepat tanpa membuka banyak laporan manual.
              </p>
            </article>
          </div>
        </section>

        <section className="faq" id="faq">
          <div className="container">
            <p className="eyebrow">Pertanyaan Umum</p>
            <h2>FAQ Kelola Keuangan</h2>
            <div className="faq-list">
              {faqs.map((item) => (
                <details key={item.question} className="faq-item">
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <p>
            <strong>Kelola Keuangan</strong> by DealTech - PT MUDAHDEAL DIGITAL GRUP
          </p>
          <a
            className="btn btn-sm btn-primary"
            href={appUrl}
            target="_blank"
            rel="noreferrer"
          >
            Buka Aplikasi
          </a>
        </div>
        <p className="copyright">© 2026 DealTech — PT MUDAHDEAL DIGITAL GRUP</p>
      </footer>
    </>
  );
}

