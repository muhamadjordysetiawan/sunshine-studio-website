# Quick Setup Checklist

## ✅ Status Setup

### 1. EmailJS
- [ ] Service ID sudah didapat
- [ ] Template "Order Confirmation" sudah dibuat
- [ ] Template ID sudah didapat
- [ ] Public Key sudah didapat

### 2. Google Apps Script
- [x] Script sudah di-copy ke Google Apps Script
- [x] Folder ID sudah diupdate: `1rcdkicR_qU3kYPHI4QsaMa2jxPpZJ7vM`
- [ ] Spreadsheet ID sudah didapat (jika belum, buat Google Sheets dulu)
- [x] Script sudah di-deploy sebagai Web App
- [ ] Web App URL sudah dicopy

### 3. Google Drive
- [x] Folder sudah dibuat
- [ ] Folder sudah di-share dengan "Anyone with the link"

### 4. Google Sheets
- [ ] Spreadsheet sudah dibuat
- [ ] Header sudah dibuat (Tanggal & Waktu, Nama, Email, dll)
- [ ] Spreadsheet ID sudah dicopy
- [ ] Spreadsheet sudah di-share dengan akun Google Apps Script

### 5. Environment Variables
- [ ] File `.env` sudah dibuat
- [ ] Semua credentials sudah diisi

## 🚀 Langkah Selanjutnya

### Jika Web App URL sudah didapat:
1. Buat file `.env` di root project
2. Isi dengan semua credentials (lihat `ENV_SETUP.md`)
3. Restart server: `npm run dev`
4. Test form pembayaran

### Jika Google Sheets belum setup:
1. Buat Google Sheets baru
2. Buat header di baris pertama
3. Copy Spreadsheet ID
4. Update `google-apps-script.js` dengan Spreadsheet ID
5. Redeploy Google Apps Script

## 📝 Yang Perlu Dikirimkan

Jika ada yang belum, kirimkan:
- **Web App URL** dari Google Apps Script (setelah deployment)
- **Spreadsheet ID** dari Google Sheets (jika sudah dibuat)

Saya akan bantu update script dan file `.env`-nya.


