# Langkah Selanjutnya Setelah EmailJS

## ✅ Checklist Setup

### 1. EmailJS (Sudah Selesai)
- [x] Service ID sudah didapat
- [x] Template "Order Confirmation" sudah dibuat
- [x] Template ID sudah didapat
- [x] Public Key sudah didapat

### 2. Setup Google Apps Script (Langkah Selanjutnya)

#### A. Buat Google Apps Script Project
1. Buka [Google Apps Script](https://script.google.com/)
2. Klik "New Project"
3. Beri nama project: "Sunshine Studio Payment Handler"
4. Hapus semua kode default (function myFunction)

#### B. Copy Script
1. Buka file `google-apps-script.js` di project ini
2. Copy semua isinya
3. Paste ke Google Apps Script editor

#### C. Setup Google Drive Folder
1. Buka [Google Drive](https://drive.google.com/)
2. Buat folder baru: "Bukti Transfer Tiket"
3. Klik kanan folder > "Get link"
4. Set ke "Anyone with the link" (Viewer)
5. Copy **Folder ID** dari URL:
   - URL contoh: `https://drive.google.com/drive/folders/1ABC123xyz...`
   - Folder ID: `1ABC123xyz...` (bagian setelah `/folders/`)
6. Ganti di script: `YOUR_GOOGLE_DRIVE_FOLDER_ID` dengan Folder ID yang sudah dicopy

#### D. Setup Google Sheets
1. Buka [Google Sheets](https://sheets.google.com/)
2. Buat spreadsheet baru: "Data Pembelian Tiket"
3. Di baris pertama, buat header:
   ```
   Tanggal & Waktu | Nama | Email | Telepon | Tiket | Jumlah | Total | Sesi | Waktu Sesi | Pertunjukan | Metode Pembayaran | Link Bukti Transfer
   ```
4. Copy **Spreadsheet ID** dari URL:
   - URL contoh: `https://docs.google.com/spreadsheets/d/1XYZ789abc.../edit`
   - Spreadsheet ID: `1XYZ789abc...` (bagian setelah `/d/` dan sebelum `/edit`)
5. Ganti di script: `YOUR_GOOGLE_SHEETS_ID` dengan Spreadsheet ID yang sudah dicopy
6. Share spreadsheet dengan email yang sama dengan Google Apps Script (atau set ke "Anyone with the link" untuk Editor)

#### E. Deploy Google Apps Script
1. Di Google Apps Script, klik "Deploy" > "New deployment"
2. Klik ikon "Select type" > pilih "Web app"
3. Isi:
   - **Description:** Payment Handler for Sunshine Studio
   - **Execute as:** Me (your-email@gmail.com)
   - **Who has access:** Anyone
4. Klik "Deploy"
5. **PENTING:** Authorize akses saat diminta:
   - Klik "Authorize access"
   - Pilih akun Google Anda
   - Klik "Advanced" > "Go to [project name] (unsafe)"
   - Klik "Allow"
6. Copy **Web App URL** yang muncul (contoh: `https://script.google.com/macros/s/AKfycby.../exec`)

### 3. Setup Environment Variables

#### A. Buat File `.env` di Root Project
Buat file baru bernama `.env` di folder root project (sama level dengan `package.json`)

#### B. Isi File `.env`
```
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/AKfycby.../exec
```

**Ganti dengan nilai yang sebenarnya:**
- `service_abc123` → Service ID dari EmailJS
- `template_xyz789` → Template ID dari EmailJS
- `abcdefghijklmnop` → Public Key dari EmailJS
- `https://script.google.com/...` → Web App URL dari Google Apps Script

### 4. Test di Localhost

1. Restart development server:
   ```bash
   npm run dev
   ```
2. Buka http://localhost:5173
3. Test form pembayaran:
   - Isi semua field
   - Upload bukti transfer
   - Submit
4. Cek:
   - ✅ Email konfirmasi terkirim ke email yang diisi
   - ✅ Foto muncul di Google Drive folder
   - ✅ Data muncul di Google Sheets

### 5. Deploy ke Production (Netlify/Vercel)

#### Jika menggunakan Netlify:
1. Login ke [Netlify Dashboard](https://app.netlify.com/)
2. Pilih site Anda
3. Klik "Site settings" > "Environment variables"
4. Tambahkan semua variable dari `.env`:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_GOOGLE_APPS_SCRIPT_URL`
5. Redeploy site

#### Jika menggunakan Vercel:
1. Login ke [Vercel Dashboard](https://vercel.com/)
2. Pilih project Anda
3. Klik "Settings" > "Environment Variables"
4. Tambahkan semua variable dari `.env`
5. Redeploy project

## ⚠️ Catatan Penting

1. **File `.env` JANGAN di-commit ke Git**
   - Sudah ada di `.gitignore`
   - Hanya untuk development lokal

2. **Environment Variables di Production**
   - Harus ditambahkan manual di dashboard hosting
   - Jangan hardcode di code

3. **Google Apps Script Permissions**
   - Pastikan Web App di-deploy dengan akses "Anyone"
   - Pastikan Google Drive folder dan Sheets sudah di-share dengan benar

4. **Test Sebelum Production**
   - Test semua fitur di localhost dulu
   - Pastikan email terkirim
   - Pastikan foto terupload
   - Pastikan data tersimpan

## 🎉 Selesai!

Setelah semua langkah selesai, sistem pembayaran akan:
- ✅ Mengirim email konfirmasi ke pembeli
- ✅ Upload foto bukti transfer ke Google Drive
- ✅ Menyimpan semua data ke Google Sheets

Jika ada masalah, cek:
- Console browser untuk error
- Google Apps Script execution log
- EmailJS dashboard untuk email status


