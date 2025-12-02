# Final Checklist - Setup Pembayaran

## ✅ File .env Sudah Lengkap!

Format file `.env` Anda sudah benar:
```env
VITE_EMAILJS_SERVICE_ID=jojo281204
VITE_EMAILJS_TEMPLATE_ID=template_uewxyyn
VITE_EMAILJS_PUBLIC_KEY=cnKCfhRqVlQoxeGGm
VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/AKfycbwR-PoV2ekBVDAYmBVK7N0mptes_M3OZAVXmawZ80XIHLa8kUSJgoHa1rZbZlS5PsKX/exec
```

---

## ✅ Checklist Sebelum Test:

### 1. Google Apps Script
- [ ] Script sudah di-copy ke Google Apps Script editor
- [ ] Folder ID sudah benar: `1rcdkicR_qU3kYPHI4QsaMa2jxPpZJ7vM`
- [ ] Spreadsheet ID sudah benar: `1clQP_naBAow-RcPdDuWjTieXIB-HmBPanxYhmbhnobI`
- [ ] Script sudah di-save
- [ ] Script sudah di-deploy sebagai Web App

**Link Google Apps Script:**
https://script.google.com/d/1rAkzRl57NSVUZInGpzifK3JDrJvjeEwQCY5DrqLE2vrlR-9eH5IAw5Xc/edit

**Cara cek:**
1. Buka link di atas
2. Pastikan script dari `google-apps-script.js` sudah ada di editor
3. Pastikan Folder ID dan Spreadsheet ID sudah benar
4. Klik "Save"
5. Jika belum deploy, klik "Deploy" > "New deployment" > "Web app"

### 2. Google Drive Folder
- [ ] Folder sudah di-share dengan "Anyone with the link"
- [ ] Folder ID: `1rcdkicR_qU3kYPHI4QsaMa2jxPpZJ7vM`

**Link Google Drive Folder:**
https://drive.google.com/drive/folders/1rcdkicR_qU3kYPHI4QsaMa2jxPpZJ7vM

### 3. Google Sheets
- [ ] Spreadsheet sudah di-share dengan email: `muhammadjordysetiawan3882@gmail.com` (Editor)
- [ ] Header sudah dibuat di baris pertama
- [ ] Spreadsheet ID: `1clQP_naBAow-RcPdDuWjTieXIB-HmBPanxYhmbhnobI`

**Link Google Sheets:**
https://docs.google.com/spreadsheets/d/1clQP_naBAow-RcPdDuWjTieXIB-HmBPanxYhmbhnobI/edit

### 4. EmailJS
- [x] Service ID sudah diisi: `jojo281204`
- [x] Template ID sudah diisi: `template_uewxyyn`
- [x] Public Key sudah diisi: `cnKCfhRqVlQoxeGGm`
- [ ] Template "Order Confirmation" sudah dibuat dengan benar

---

## 🚀 Langkah Selanjutnya:

### 1. Restart Development Server
```bash
npm run dev
```

### 2. Test Form Pembayaran
1. Buka http://localhost:5173
2. Navigasi ke halaman "Tickets"
3. Isi form:
   - Pilih tiket (Pre-Sale 1)
   - Pilih sesi pertunjukan
   - Isi nama, email, telepon
   - Pilih metode pembayaran
   - Upload bukti transfer (gambar)
4. Klik "Selesaikan Pembelian"

### 3. Verifikasi
Cek apakah:
- ✅ Email konfirmasi terkirim ke email yang diisi
- ✅ Foto bukti transfer muncul di Google Drive folder
- ✅ Data muncul di Google Sheets

---

## ⚠️ Troubleshooting:

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

---

## 🎉 Selesai!

Setelah semua checklist selesai, sistem pembayaran siap digunakan!


