# Kelola Keuangan Landing Page

Landing page resmi untuk produk **Kelola Keuangan**. Halaman ini menampilkan fitur utama aplikasi keuangan pribadi, memperjelas value produk, dan dioptimasi untuk SEO + performa Lighthouse.

## Features

- [x] Hero section dengan value proposition yang jelas dan CTA utama.
- [x] Daftar lengkap fitur berdasarkan modul aplikasi: Transaksi, AI, Kantong, Hutang, Tanggungan, Kategori, Anggaran, Laporan, Setelan.
- [x] SEO on-page lengkap: title, description, canonical, Open Graph, Twitter Card, JSON-LD.
- [x] Teknis SEO: `robots.txt`, `sitemap.xml`, `manifest`.
- [x] Responsive design mobile-first dengan animasi ringan dan aksesibilitas dasar.

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite 5 |
| Styling | CSS custom (no heavy framework) |
| SEO Schema | JSON-LD (`SoftwareApplication`, `FAQPage`) |
| Deploy | Static hosting / Coolify / Nginx |

## Getting Started (Development)

### Prerequisites

- Node.js 20+
- npm 10+

### Setup

```bash
# 1. Masuk folder project
cd lp-kk

# 2. Copy env
cp .env.example .env

# 3. Install dependency
npm install

# 4. Jalankan dev server
npm run dev
```

### Environment Variables

| Variable | Description | Default |
|---|---|---|
| `VITE_APP_NAME` | Nama aplikasi | `Kelola Keuangan` |
| `VITE_APP_URL` | URL publik aplikasi | `https://kelola-keuangan.mudahdeal.com/` |

## Production Deployment

### Build

```bash
npm run build
```

Output build ada di folder `dist/`.

### Deploy ke GitHub Pages (Auto Deploy)

Project ini sudah disiapkan workflow GitHub Actions:

- `.github/workflows/deploy-pages.yml`
- `public/CNAME` (custom domain: `kk.mudahdeal.com`)

Langkah aktivasi:

1. Push semua perubahan ke GitHub repository.
2. Buka `Settings > Pages`.
3. Pada bagian `Build and deployment`, pilih `Source: GitHub Actions`.
4. Pastikan workflow `Deploy to GitHub Pages` berjalan sukses setelah push.
5. Di DNS domain, arahkan `kk.mudahdeal.com` ke GitHub Pages (record CNAME ke `<username>.github.io`).
6. Setelah propagasi DNS selesai, aktifkan `Enforce HTTPS` di halaman Pages.

### Deploy ke Coolify

1. Push source code ke repository Git.
2. Buat resource static/web app di Coolify.
3. Set command build: `npm install && npm run build`.
4. Publish folder `dist` sebagai static output.
5. Set domain ke `kk.mudahdeal.com`.

### Health Check

Landing page static tidak punya endpoint API. Untuk monitoring, gunakan:

- HTTP status halaman utama `/` harus `200`.
- Validasi SEO endpoint: `/robots.txt` dan `/sitemap.xml`.

## SEO Checklist Cepat

- [x] Satu `h1` di halaman.
- [x] Meta description deskriptif.
- [x] Canonical URL aktif.
- [x] Open Graph image tersedia.
- [x] Structured data valid (`SoftwareApplication`, `FAQPage`).
- [x] Tautan internal anchor untuk navigasi konten.

## License

MIT

