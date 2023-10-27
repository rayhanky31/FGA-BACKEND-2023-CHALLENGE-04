# Sistem Perbankan Dasar

## Overview
Proyek Sistem Perbankan Dasar ini dibangun menggunakan Express.js dan Prisma.js. Sistem ini memungkinkan pengguna untuk membuat akun, melakukan transaksi, dan melihat daftar akun dan transaksi.

## Instalasi
1. Pastikan Anda telah menginstal Node.js dan npm di komputer Anda.
2. Clone atau unduh repositori proyek.
3. Buka terminal dan navigasikan ke folder proyek.
4. Jalankan perintah `npm install` untuk menginstal semua dependensi yang diperlukan.

## Konfigurasi Database
1. Konfigurasikan Prisma untuk menghubungkan proyek Anda ke database sesuai dengan skema yang telah didefinisikan.
2. Pastikan skema Prisma sesuai dengan hubungan antara entitas yang dijelaskan dalam ERD, seperti pengguna, akun bank, profil, dan transaksi.

## Endpoint API
Berikut adalah daftar endpoint yang tersedia:

### Pengguna (Users)
- **POST /api/v1/users**: Membuat pengguna baru beserta profilnya.
- **GET /api/v1/users**: Menampilkan daftar pengguna.
- **GET /api/v1/users/:userId**: Menampilkan informasi detail tentang seorang pengguna, termasuk profilnya.

### Akun Bank (Bank Accounts)
- **POST /api/v1/accounts**: Membuat akun baru untuk pengguna yang sudah didaftarkan.
- **GET /api/v1/accounts**: Menampilkan daftar akun.
- **GET /api/v1/accounts/:accountId**: Menampilkan informasi detail tentang akun.

### Transaksi (Transactions)
- **POST /api/v1/transactions**: Mengirimkan uang dari satu akun ke akun lainnya (tentukan body permintaan).
- **GET /api/v1/transactions**: Menampilkan daftar transaksi.
- **GET /api/v1/transactions/:transactionId**: Menampilkan informasi detail tentang transaksi, termasuk pengirim dan penerimanya.

## Menjalankan Aplikasi
1. Mulai aplikasi dengan menjalankan `npm start` atau perintah yang telah Anda konfigurasi dalam `package.json`.

## Kontribusi
Silakan berkontribusi untuk pengembangan lebih lanjut proyek ini dengan membuat permintaan penarikan (pull request) atau melaporkan masalah (issues).

## Lisensi
By Rayhan Kurnia YUsda
