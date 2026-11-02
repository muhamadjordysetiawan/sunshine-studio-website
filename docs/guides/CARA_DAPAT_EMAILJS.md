# Cara Mendapatkan EmailJS Credentials

## Langkah-langkah Mendapatkan Credentials:

### 1. Login ke EmailJS Dashboard
1. Buka [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)
2. Login dengan akun EmailJS Anda

---

## A. Service ID

### Cara Mendapatkan:
1. Setelah login, klik **"Email Services"** di menu kiri
2. Pilih service yang sudah dibuat (contoh: Gmail, Outlook, dll)
3. **Service ID** akan terlihat di bawah nama service
   - Format: `service_abc123` atau `service_xyz789`
4. **Copy Service ID** ini

### Lokasi di Dashboard:
```
Email Services > [Nama Service Anda] > Service ID
```

---

## B. Template ID

### Cara Mendapatkan:
1. Klik **"Email Templates"** di menu kiri
2. Pilih template **"Order Confirmation"** yang sudah dibuat
3. **Template ID** akan terlihat di bawah nama template
   - Format: `template_abc123` atau `template_xyz789`
4. **Copy Template ID** ini

### Lokasi di Dashboard:
```
Email Templates > Order Confirmation > Template ID
```

### Atau dari URL:
- Saat membuka template, lihat URL browser
- Format: `https://dashboard.emailjs.com/admin/template/[TEMPLATE_ID]/content`
- Copy bagian `[TEMPLATE_ID]` dari URL

---

## C. Public Key

### Cara Mendapatkan:
1. Klik **"Account"** di menu kiri (atau klik nama/avatar di pojok kanan atas)
2. Pilih **"General"** atau **"Account Settings"**
3. Scroll ke bawah, cari bagian **"Public Key"**
4. **Copy Public Key** ini
   - Format: `abcdefghijklmnop` atau `user_abcdefghijklmnop123456`

### Lokasi di Dashboard:
```
Account > General > Public Key
```

---

## Contoh Format Credentials:

### Service ID:
```
service_gmail123
```
atau
```
service_abc123xyz
```

### Template ID:
```
template_order456
```
atau
```
template_xyz789abc
```

### Public Key:
```
user_abcdefghijklmnop123456
```
atau
```
abcdefghijklmnop
```

---

## Setelah Mendapatkan Semua Credentials:

### 1. Buka File `.env`
Buka file `.env` yang sudah dibuat

### 2. Ganti dengan Nilai yang Sebenarnya:

**Sebelum:**
```env
VITE_EMAILJS_SERVICE_ID=isi_service_id_dari_emailjs
VITE_EMAILJS_TEMPLATE_ID=isi_template_id_dari_emailjs
VITE_EMAILJS_PUBLIC_KEY=isi_public_key_dari_emailjs
```

**Sesudah (contoh):**
```env
VITE_EMAILJS_SERVICE_ID=service_gmail123
VITE_EMAILJS_TEMPLATE_ID=template_order456
VITE_EMAILJS_PUBLIC_KEY=user_abcdefghijklmnop123456
```

### 3. Save File
Simpan file `.env`

### 4. Restart Server
```bash
npm run dev
```

---

## ⚠️ Tips:

1. **Jangan ada spasi** di sekitar tanda `=`
   - ✅ Benar: `VITE_EMAILJS_SERVICE_ID=service_abc123`
   - ❌ Salah: `VITE_EMAILJS_SERVICE_ID = service_abc123`

2. **Jangan pakai tanda kutip**
   - ✅ Benar: `VITE_EMAILJS_SERVICE_ID=service_abc123`
   - ❌ Salah: `VITE_EMAILJS_SERVICE_ID="service_abc123"`

3. **Copy paste langsung** dari EmailJS dashboard untuk menghindari typo

4. **Pastikan semua 3 credentials sudah diisi** sebelum test

---

## 📸 Visual Guide:

### Di EmailJS Dashboard:

**Service ID:**
```
Email Services
  └── [Nama Service]
      └── Service ID: service_abc123 ← Copy ini
```

**Template ID:**
```
Email Templates
  └── Order Confirmation
      └── Template ID: template_xyz789 ← Copy ini
```

**Public Key:**
```
Account
  └── General
      └── Public Key: user_abcdefghijklmnop ← Copy ini
```

---

## ✅ Checklist:

- [ ] Login ke EmailJS Dashboard
- [ ] Copy Service ID dari Email Services
- [ ] Copy Template ID dari Email Templates
- [ ] Copy Public Key dari Account > General
- [ ] Paste ke file `.env`
- [ ] Save file
- [ ] Restart server


