# File .env Sudah Dibuat!

## ✅ Yang Sudah Diisi:
- **Google Apps Script URL:** ✅ Sudah ditambahkan

## ⚠️ Yang Masih Perlu Diisi:

Buka file `.env` dan ganti dengan nilai yang sebenarnya:

### 1. EmailJS Service ID
```
VITE_EMAILJS_SERVICE_ID=isi_service_id_dari_emailjs
```
Dari EmailJS Dashboard > Email Services > Copy Service ID

### 2. EmailJS Template ID
```
VITE_EMAILJS_TEMPLATE_ID=isi_template_id_dari_emailjs
```
Dari EmailJS Dashboard > Email Templates > Copy Template ID

### 3. EmailJS Public Key
```
VITE_EMAILJS_PUBLIC_KEY=isi_public_key_dari_emailjs
```
Dari EmailJS Dashboard > Account > General > Copy Public Key

## 📝 Contoh File .env yang Lengkap:

```env
VITE_EMAILJS_SERVICE_ID=service_gmail123
VITE_EMAILJS_TEMPLATE_ID=template_order456
VITE_EMAILJS_PUBLIC_KEY=user_abcdefghijklmnop123456
VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/AKfycbwR-PoV2ekBVDAYmBVK7N0mptes_M3OZAVXmawZ80XIHLa8kUSJgoHa1rZbZlS5PsKX/exec
```

## ⚠️ Catatan Penting:

1. **Error "doGet not found" itu NORMAL** - Kita pakai `doPost`, bukan `doGet`
2. **Pastikan script sudah di-copy ke Google Apps Script:**
   - Buka: https://script.google.com/d/1rAkzRl57NSVUZInGpzifK3JDrJvjeEwQCY5DrqLE2vrlR-9eH5IAw5Xc/edit
   - Copy semua isi file `google-apps-script.js`
   - Paste ke editor Google Apps Script
   - Klik "Save"
   - Redeploy jika perlu

3. **Setelah semua credentials diisi:**
   - Restart development server: `npm run dev`
   - Test form pembayaran
   - Cek email, Google Drive, dan Google Sheets


