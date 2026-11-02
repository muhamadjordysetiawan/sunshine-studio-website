# Fix EmailJS Template - "The recipients address is empty"

## Masalah:
Error: `The recipients address is empty` (Status 422)

## Penyebab:
Template email di EmailJS tidak memiliki field "To Email" yang diisi dengan benar.

## Solusi:

### 1. Buka EmailJS Dashboard
1. Login ke https://dashboard.emailjs.com/
2. Klik "Email Templates"
3. Pilih template "Order Confirmation"

### 2. Setup Field "To Email"
Di form template, pastikan:

**To Email * (Wajib):**
```
{{to_email}}
```

**BUKAN:**
- Jangan kosong
- Jangan pakai email statis
- Harus pakai variabel `{{to_email}}`

### 3. Setup Field Lainnya

**From Name:**
```
Sunshine Studio
```

**From Email *:**
✅ Centang "Use Default Email Address"

**Reply To:**
```
muhamadjordysetiawan3882@gmail.com
```

**Subject *:**
```
Konfirmasi Pembelian Tiket - {{ticket_type}}
```

**Content *:**
(Paste template HTML yang sudah dibuat sebelumnya)

### 4. Pastikan Variabel di Template
Di body template, pastikan semua variabel ada:
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

### 5. Save Template
Klik "Save" setelah semua field diisi dengan benar.

### 6. Test Template
1. Klik "Test" atau "Send Test Email"
2. Isi data test
3. Pastikan email terkirim

---

## Checklist:

- [ ] Field "To Email" diisi dengan `{{to_email}}`
- [ ] Field "From Email" sudah di-setup
- [ ] Subject sudah diisi
- [ ] Content template sudah lengkap
- [ ] Semua variabel sudah ada di template
- [ ] Template sudah di-save
- [ ] Test email berhasil

---

## Setelah Fix:

1. **Restart development server:**
   ```bash
   npm run dev
   ```

2. **Test form pembayaran lagi**
3. **Cek console** - seharusnya tidak ada error 422 lagi
4. **Cek email** - email seharusnya terkirim


