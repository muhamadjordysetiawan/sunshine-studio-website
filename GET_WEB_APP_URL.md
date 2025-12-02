# Cara Mendapatkan Web App URL dari Google Apps Script

## Langkah-langkah:

### 1. Buka Project Google Apps Script
Link project Anda: https://script.google.com/home/projects/1rAkzRl57NSVUZInGpzifK3JDrJvjeEwQCY5DrqLE2vrlR-9eH5IAw5Xc/edit

### 2. Pastikan Script Sudah Di-copy
- Pastikan script dari file `google-apps-script.js` sudah di-copy ke editor
- Pastikan Folder ID dan Spreadsheet ID sudah benar
- Klik "Save" jika ada perubahan

### 3. Deploy sebagai Web App

#### A. Jika Belum Pernah Deploy:
1. Klik tombol **"Deploy"** di pojok kanan atas
2. Pilih **"New deployment"**
3. Klik ikon **"Select type"** (gear icon)
4. Pilih **"Web app"**
5. Isi form:
   - **Description:** `Payment Handler - Sunshine Studio`
   - **Execute as:** `Me (muhammadjordysetiawan3882@gmail.com)`
   - **Who has access:** `Anyone`
6. Klik **"Deploy"**
7. **Authorize** jika diminta:
   - Klik "Authorize access"
   - Pilih akun Google Anda
   - Klik "Advanced" > "Go to [project name] (unsafe)"
   - Klik "Allow"
8. **Copy Web App URL** yang muncul

#### B. Jika Sudah Pernah Deploy:
1. Klik **"Deploy"** > **"Manage deployments"**
2. Klik ikon **"Edit"** (pensil) di deployment yang ada
3. Klik **"Deploy"** untuk update
4. **Copy Web App URL** yang muncul

### 4. Format Web App URL
URL akan terlihat seperti ini:
```
https://script.google.com/macros/s/AKfycby123456789/exec
```

### 5. Gunakan Web App URL
Copy URL ini dan tambahkan ke file `.env`:
```env
VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/AKfycby123456789/exec
```

## ⚠️ Catatan Penting

- **Web App URL** berbeda dengan **Project URL**
- Project URL: `https://script.google.com/home/projects/.../edit` (untuk edit)
- Web App URL: `https://script.google.com/macros/s/.../exec` (untuk dipanggil dari website)

- Setiap kali update script, perlu **redeploy** untuk perubahan berlaku
- Web App URL tidak berubah setelah redeploy (kecuali buat deployment baru)

## 🎯 Langkah Selanjutnya

Setelah dapat Web App URL:
1. Tambahkan ke file `.env`
2. Tambahkan EmailJS credentials ke `.env`
3. Restart development server
4. Test form pembayaran


