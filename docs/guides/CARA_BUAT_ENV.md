# Cara Membuat File .env Manual

## Metode 1: Di VS Code (Paling Mudah)

### Langkah-langkah:
1. **Buka VS Code** di folder project Anda
2. **Klik kanan** di folder root (sama level dengan `package.json`)
3. Pilih **"New File"**
4. Ketik nama file: `.env` (dengan titik di depan, tanpa ekstensi)
5. **Enter** untuk membuat file
6. Copy paste isi berikut:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=isi_service_id_dari_emailjs
VITE_EMAILJS_TEMPLATE_ID=isi_template_id_dari_emailjs
VITE_EMAILJS_PUBLIC_KEY=isi_public_key_dari_emailjs

# Google Apps Script Web App URL
VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/AKfycbwR-PoV2ekBVDAYmBVK7N0mptes_M3OZAVXmawZ80XIHLa8kUSJgoHa1rZbZlS5PsKX/exec
```

7. **Ganti** 3 baris EmailJS dengan nilai yang sebenarnya
8. **Save** (Ctrl+S atau Cmd+S)

---

## Metode 2: Di Terminal/Command Line

### Mac/Linux:
```bash
cd "/Users/jojo/Documents/Documents - Muhamad's Mac mini/cursor"
touch .env
```

Kemudian buka file `.env` dengan editor:
```bash
nano .env
```
atau
```bash
code .env
```

### Windows:
```cmd
cd "path\to\project"
type nul > .env
```

Kemudian buka dengan Notepad atau VS Code:
```cmd
notepad .env
```

---

## Metode 3: Di Text Editor (Notepad, TextEdit, dll)

### Langkah-langkah:
1. **Buka Text Editor** (Notepad di Windows, TextEdit di Mac)
2. **Copy paste** isi berikut:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=isi_service_id_dari_emailjs
VITE_EMAILJS_TEMPLATE_ID=isi_template_id_dari_emailjs
VITE_EMAILJS_PUBLIC_KEY=isi_public_key_dari_emailjs

# Google Apps Script Web App URL
VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/AKfycbwR-PoV2ekBVDAYmBVK7N0mptes_M3OZAVXmawZ80XIHLa8kUSJgoHa1rZbZlS5PsKX/exec
```

3. **Save As** dengan nama: `.env`
4. **PENTING:** 
   - Pilih "All Files" di "Save as type" (bukan "Text Document")
   - Pastikan nama file adalah `.env` (dengan titik di depan)
   - Simpan di **root project** (sama folder dengan `package.json`)

---

## Metode 4: Di VS Code dengan Command Palette

1. Tekan **Ctrl+Shift+P** (Windows) atau **Cmd+Shift+P** (Mac)
2. Ketik: `File: New File`
3. Enter
4. Ketik nama: `.env`
5. Enter
6. Copy paste isi file
7. Save

---

## ⚠️ Tips Penting:

### 1. Nama File Harus Benar
- ✅ Benar: `.env`
- ❌ Salah: `env`, `.env.txt`, `env.txt`

### 2. Lokasi File Harus Benar
File `.env` harus di **root project**, sama level dengan:
- `package.json`
- `vite.config.js`
- `index.html`

### 3. Format File
- Tidak perlu ekstensi
- Bisa pakai spasi atau tidak
- Setiap variable di baris baru

### 4. Isi File .env
Setelah file dibuat, ganti dengan nilai yang sebenarnya:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/AKfycbwR-PoV2ekBVDAYmBVK7N0mptes_M3OZAVXmawZ80XIHLa8kUSJgoHa1rZbZlS5PsKX/exec
```

---

## ✅ Verifikasi File Sudah Dibuat

### Di VS Code:
- File `.env` akan muncul di file explorer
- Jika tidak muncul, klik icon "Refresh" atau restart VS Code

### Di Terminal:
```bash
ls -la | grep .env
```
atau
```bash
cat .env
```

---

## 🎯 Setelah File .env Dibuat:

1. **Isi dengan credentials yang sebenarnya**
2. **Restart development server:**
   ```bash
   npm run dev
   ```
3. **Test form pembayaran**

---

## ❓ Troubleshooting

### File tidak muncul di VS Code?
- Klik icon "Refresh" di file explorer
- Atau restart VS Code

### File tidak terbaca?
- Pastikan nama file benar: `.env` (dengan titik)
- Pastikan lokasi di root project
- Restart development server

### Error "Cannot find module"?
- Pastikan file `.env` sudah dibuat
- Pastikan variable names benar (dimulai dengan `VITE_`)
- Restart development server


