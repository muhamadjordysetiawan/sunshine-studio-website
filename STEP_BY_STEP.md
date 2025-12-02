# Panduan Lengkap Setup Pembayaran - Step by Step

## ✅ STEP 1: Setup Google Sheets

### 1.1 Buat Google Sheets Baru
1. Buka [Google Sheets](https://sheets.google.com/)
2. Klik "Blank" untuk membuat spreadsheet baru
3. Beri nama: "Data Pembelian Tiket Sunshine Studio"

### 1.2 Buat Header (CARA CEPAT!)

**Metode 1: Copy Paste (Paling Cepat)**
1. Copy teks berikut (semua dalam satu baris):
   ```
   Tanggal & Waktu	Nama	Email	Telepon	Tiket	Jumlah	Total	Sesi	Waktu Sesi	Pertunjukan	Metode Pembayaran	Link Bukti Transfer
   ```
2. Klik cell A1 di Google Sheets
3. Paste (Ctrl+V atau Cmd+V)
4. **Selesai!** Header otomatis terisi di semua kolom

**Metode 2: Manual (Jika copy paste tidak bekerja)**
1. Klik cell A1, ketik: `Tanggal & Waktu`
2. Tekan Tab, ketik: `Nama`
3. Tekan Tab, ketik: `Email`
4. Lanjutkan sampai kolom L: `Link Bukti Transfer`

**Metode 3: Import dari File CSV (PALING MUDAH!)**
1. Download file `header.csv` yang sudah saya buat di project ini
2. Di Google Sheets: **File** > **Import**
3. Klik tab **Upload**
4. Drag & drop file `header.csv` atau klik "Select a file from your device"
5. Pilih file `header.csv`
6. Di bagian "Import location", pilih:
   - **"Replace spreadsheet"** (jika sheet masih kosong)
   - ATAU **"Insert new sheet"** (jika sudah ada data)
7. Klik **"Import data"**
8. **Selesai!** Header otomatis terisi di semua kolom

### 1.3 Copy Spreadsheet ID
1. Lihat URL di browser, contoh:
   ```
   https://docs.google.com/spreadsheets/d/1ABC123xyz789.../edit
   ```
2. Copy bagian **Spreadsheet ID** (setelah `/d/` dan sebelum `/edit`):
   ```
   1ABC123xyz789...
   ```
3. **Simpan ID ini** - akan digunakan nanti

### 1.4 Share Spreadsheet
1. Klik tombol "Share" di pojok kanan atas
2. Tambahkan email: `muhammadjordysetiawan3882@gmail.com` (email Google Apps Script Anda)
3. Set permission: "Editor"
4. Klik "Send"

---

## ✅ STEP 2: Update Google Apps Script dengan Spreadsheet ID

### 2.1 Buka Google Apps Script
1. Buka [Google Apps Script](https://script.google.com/)
2. Buka project "Sunshine Studio Payment Handler" (atau nama project Anda)

### 2.2 Update Spreadsheet ID
1. Cari baris ini di script:
   ```javascript
   const SPREADSHEET_ID = 'YOUR_GOOGLE_SHEETS_ID';
   ```
2. Ganti `YOUR_GOOGLE_SHEETS_ID` dengan Spreadsheet ID yang sudah dicopy
3. Contoh:
   ```javascript
   const SPREADSHEET_ID = '1ABC123xyz789...';
   ```

### 2.3 Save Script
1. Klik "Save" (Ctrl+S atau Cmd+S)
2. Pastikan tidak ada error

---

## ✅ STEP 3: Redeploy Google Apps Script

### 3.1 Deploy Ulang
1. Klik "Deploy" > "Manage deployments"
2. Klik ikon "Edit" (pensil) di deployment yang sudah ada
3. Klik "Deploy" lagi (untuk update deployment dengan Spreadsheet ID baru)

**ATAU**

1. Klik "Deploy" > "New deployment"
2. Pilih type: "Web app"
3. Isi sama seperti sebelumnya:
   - **Execute as:** Me (email Anda)
   - **Who has access:** Anyone
4. Klik "Deploy"

### 3.2 Copy Web App URL
Setelah deployment, akan muncul URL seperti:
```
https://script.google.com/macros/s/AKfycby123456789/exec
```
**Copy URL ini** - akan digunakan di file `.env`

---

## ✅ STEP 4: Setup EmailJS (Jika Belum)

### 4.1 Dapatkan Credentials dari EmailJS
1. Login ke [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. **Service ID:**
   - Buka "Email Services"
   - Copy Service ID (contoh: `service_abc123`)
3. **Template ID:**
   - Buka "Email Templates"
   - Pilih template "Order Confirmation"
   - Copy Template ID (contoh: `template_xyz789`)
4. **Public Key:**
   - Buka "Account" > "General"
   - Copy Public Key (contoh: `abcdefghijklmnop`)

---

## ✅ STEP 5: Buat File .env

### 5.1 Buat File
1. Di VS Code atau editor, buat file baru
2. Simpan dengan nama: `.env` (dengan titik di depan)
3. Simpan di **root project** (sama level dengan `package.json`)

### 5.2 Isi File .env
Copy template berikut dan isi dengan nilai yang sebenarnya:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/AKfycby123456789/exec
```

**Ganti dengan nilai Anda:**
- `service_abc123` → Service ID dari EmailJS
- `template_xyz789` → Template ID dari EmailJS
- `abcdefghijklmnop` → Public Key dari EmailJS
- `https://script.google.com/...` → Web App URL dari Google Apps Script

### 5.3 Contoh File .env yang Lengkap
```env
VITE_EMAILJS_SERVICE_ID=service_gmail123
VITE_EMAILJS_TEMPLATE_ID=template_order456
VITE_EMAILJS_PUBLIC_KEY=user_abcdefghijklmnop123456
VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/AKfycbyXYZ789ABC/exec
```

---

## ✅ STEP 6: Test di Localhost

### 6.1 Restart Development Server
1. Stop server jika sedang running (Ctrl+C)
2. Start ulang:
   ```bash
   npm run dev
   ```

### 6.2 Test Form Pembayaran
1. Buka http://localhost:5173
2. Navigasi ke halaman "Tickets"
3. Isi form pembayaran:
   - Pilih tiket (Pre-Sale 1)
   - Pilih sesi
   - Isi nama, email, telepon
   - Pilih metode pembayaran
   - Upload bukti transfer (gambar)
4. Klik "Selesaikan Pembelian"

### 6.3 Verifikasi
Cek apakah:
- ✅ Email konfirmasi terkirim ke email yang diisi
- ✅ Foto bukti transfer muncul di Google Drive folder
- ✅ Data muncul di Google Sheets

---

## ✅ STEP 7: Deploy ke Production (Netlify/Vercel)

### 7.1 Jika Menggunakan Netlify
1. Login ke [Netlify Dashboard](https://app.netlify.com/)
2. Pilih site Anda
3. Klik "Site settings" > "Environment variables"
4. Tambahkan semua variable dari `.env`:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_GOOGLE_APPS_SCRIPT_URL`
5. Klik "Save"
6. Klik "Deploys" > "Trigger deploy" > "Clear cache and deploy site"

### 7.2 Jika Menggunakan Vercel
1. Login ke [Vercel Dashboard](https://vercel.com/)
2. Pilih project Anda
3. Klik "Settings" > "Environment Variables"
4. Tambahkan semua variable dari `.env`
5. Klik "Save"
6. Redeploy project

---

## 🎉 Selesai!

Setelah semua langkah selesai, sistem pembayaran akan:
- ✅ Mengirim email konfirmasi ke pembeli
- ✅ Upload foto bukti transfer ke Google Drive
- ✅ Menyimpan semua data ke Google Sheets

## ⚠️ Troubleshooting

### Email tidak terkirim?
- Cek EmailJS dashboard > "Logs" untuk melihat error
- Pastikan Service ID, Template ID, dan Public Key benar
- Pastikan template email sudah di-setup dengan benar

### Foto tidak terupload?
- Cek Google Drive folder sudah di-share dengan "Anyone with the link"
- Cek Google Apps Script execution log untuk error
- Pastikan Folder ID benar di script

### Data tidak tersimpan ke Sheets?
- Cek Spreadsheet ID benar di Google Apps Script
- Cek spreadsheet sudah di-share dengan email Google Apps Script
- Cek Google Apps Script execution log

### Error di browser console?
- Buka Developer Tools (F12)
- Cek tab "Console" untuk error
- Pastikan semua environment variables sudah diisi

