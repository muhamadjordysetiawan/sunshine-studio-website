# Setup File .env

## Langkah-langkah:

### 1. Buat File `.env` di Root Project
Buat file baru bernama `.env` (tanpa ekstensi) di folder root project (sama level dengan `package.json`)

### 2. Copy Template Berikut ke File `.env`

```
VITE_EMAILJS_SERVICE_ID=isi_service_id_dari_emailjs
VITE_EMAILJS_TEMPLATE_ID=isi_template_id_dari_emailjs
VITE_EMAILJS_PUBLIC_KEY=isi_public_key_dari_emailjs
VITE_GOOGLE_APPS_SCRIPT_URL=isi_web_app_url_dari_google_apps_script
```

### 3. Isi dengan Nilai yang Sebenarnya

#### A. EmailJS Credentials
Dari EmailJS Dashboard:
- **Service ID**: Buka "Email Services" > Copy Service ID (contoh: `service_abc123`)
- **Template ID**: Buka "Email Templates" > Copy Template ID (contoh: `template_xyz789`)
- **Public Key**: Buka "Account" > "General" > Copy Public Key (contoh: `abcdefghijklmnop`)

#### B. Google Apps Script Web App URL
Setelah deployment di Google Apps Script:
- Copy **Web App URL** yang muncul (contoh: `https://script.google.com/macros/s/AKfycby.../exec`)

### 4. Contoh File `.env` yang Lengkap

```
VITE_EMAILJS_SERVICE_ID=service_abc123xyz
VITE_EMAILJS_TEMPLATE_ID=template_xyz789abc
VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnop123456
VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/AKfycby123456789/exec
```

### 5. Restart Development Server

Setelah file `.env` dibuat, restart server:
```bash
npm run dev
```

### 6. Test

1. Buka http://localhost:5173
2. Test form pembayaran
3. Cek:
   - ✅ Email konfirmasi terkirim
   - ✅ Foto muncul di Google Drive folder
   - ✅ Data muncul di Google Sheets

## ⚠️ Catatan Penting

- File `.env` JANGAN di-commit ke Git (sudah ada di `.gitignore`)
- Jangan share file `.env` ke publik
- Untuk production (Netlify/Vercel), tambahkan environment variables di dashboard hosting


