# Troubleshooting Email Tidak Terkirim

## Langkah-langkah Debugging:

### 1. Cek Browser Console
1. Buka website di browser
2. Tekan **F12** atau **Cmd+Option+I** (Mac) untuk buka Developer Tools
3. Klik tab **"Console"**
4. Submit form pembayaran
5. Lihat apakah ada error atau log

**Yang harus muncul:**
- `EmailJS Config:` dengan service ID, template ID, dan public key
- `Sending email with params:` dengan data email
- `Email sent successfully:` jika berhasil
- Atau error message jika gagal

### 2. Cek Format Service ID

**Service ID Anda:** `jojo281204`

**Format yang benar biasanya:**
- `service_abc123` (dengan prefix `service_`)
- Atau bisa juga hanya ID saja

**Cara cek:**
1. Buka EmailJS Dashboard: https://dashboard.emailjs.com/
2. Klik "Email Services"
3. Lihat Service ID yang sebenarnya
4. Pastikan formatnya sama dengan yang di `.env`

### 3. Cek EmailJS Dashboard

#### A. Cek Service
1. Login ke EmailJS Dashboard
2. Klik "Email Services"
3. Pastikan service sudah aktif dan terhubung dengan email provider
4. Copy Service ID yang benar

#### B. Cek Template
1. Klik "Email Templates"
2. Pilih template "Order Confirmation"
3. Pastikan template sudah di-setup dengan benar
4. Pastikan semua variabel sudah ada:
   - `{{to_name}}`
   - `{{to_email}}`
   - `{{ticket_type}}`
   - `{{quantity}}`
   - `{{total}}`
   - `{{session}}`
   - `{{session_time}}`
   - `{{show}}`
   - `{{payment_method}}`
   - `{{payment_info}}`

#### C. Cek Logs
1. Klik "Logs" di menu kiri
2. Lihat apakah ada email yang dikirim
3. Lihat status (Success/Failed)
4. Lihat error message jika ada

### 4. Cek File .env

Pastikan file `.env` sudah benar:
```env
VITE_EMAILJS_SERVICE_ID=jojo281204
VITE_EMAILJS_TEMPLATE_ID=template_uewxyyn
VITE_EMAILJS_PUBLIC_KEY=cnKCfhRqVlQoxeGGm
```

**Tips:**
- Jangan ada spasi di sekitar tanda `=`
- Jangan pakai tanda kutip
- Pastikan tidak ada karakter aneh

### 5. Restart Server

Setelah update file `.env`, **WAJIB restart server:**
```bash
# Stop server (Ctrl+C)
# Lalu start lagi:
npm run dev
```

### 6. Cek EmailJS Service Connection

1. Buka EmailJS Dashboard
2. Klik "Email Services"
3. Pastikan service sudah terhubung dengan email provider (Gmail, Outlook, dll)
4. Jika belum, ikuti instruksi untuk connect

### 7. Test EmailJS Manual

Bisa test langsung dari EmailJS Dashboard:
1. Buka template "Order Confirmation"
2. Klik "Test" atau "Send Test Email"
3. Isi data test
4. Lihat apakah email terkirim

---

## Error yang Sering Terjadi:

### Error: "Service not found"
- **Penyebab:** Service ID salah atau service belum dibuat
- **Solusi:** Cek Service ID di EmailJS Dashboard, pastikan benar

### Error: "Template not found"
- **Penyebab:** Template ID salah atau template belum dibuat
- **Solusi:** Cek Template ID di EmailJS Dashboard, pastikan benar

### Error: "Invalid public key"
- **Penyebab:** Public Key salah
- **Solusi:** Copy Public Key lagi dari Account > General

### Error: "Rate limit exceeded"
- **Penyebab:** Terlalu banyak email dikirim (free plan terbatas)
- **Solusi:** Tunggu beberapa saat atau upgrade plan

### Email tidak terkirim tapi tidak ada error
- **Penyebab:** Email masuk ke spam atau template salah
- **Solusi:** 
  - Cek folder spam
  - Cek template email di EmailJS Dashboard
  - Pastikan variabel di template sudah benar

---

## Quick Fix Checklist:

- [ ] Restart development server setelah update `.env`
- [ ] Cek browser console untuk error
- [ ] Cek EmailJS Dashboard > Logs
- [ ] Verifikasi Service ID, Template ID, dan Public Key benar
- [ ] Pastikan template email sudah di-setup dengan benar
- [ ] Cek folder spam di email
- [ ] Test email dari EmailJS Dashboard

---

## Setelah Fix:

1. **Clear browser cache** (Ctrl+Shift+Delete atau Cmd+Shift+Delete)
2. **Restart server:** `npm run dev`
3. **Test lagi** form pembayaran
4. **Cek console** untuk log
5. **Cek EmailJS Logs** untuk status email


