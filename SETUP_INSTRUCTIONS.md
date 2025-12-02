# Setup Instructions untuk Fitur Pembayaran

## 1. Setup EmailJS (Email Konfirmasi)

### Langkah-langkah:

1. **Daftar di EmailJS**
   - Kunjungi [https://www.emailjs.com/](https://www.emailjs.com/)
   - Buat akun gratis (free plan cukup untuk kebutuhan ini)

2. **Buat Email Service**
   - Setelah login, klik "Add New Service"
   - Pilih provider email (Gmail, Outlook, dll)
   - Ikuti instruksi untuk connect email Anda
   - **Service ID** akan muncul setelah service dibuat (contoh: `service_abc123`)
   - Service ID ini adalah ID unik untuk layanan email Anda

3. **Buat Email Template**
   - Klik "Email Templates" > "Create New Template"
   - Buat template dengan variabel berikut:
     - `{{to_name}}` - Nama pembeli
     - `{{to_email}}` - Email pembeli
     - `{{ticket_type}}` - Jenis tiket (Pre-Sale 1, dll)
     - `{{quantity}}` - Jumlah tiket
     - `{{total}}` - Total harga
     - `{{session}}` - Sesi yang dipilih
     - `{{session_time}}` - Waktu sesi
     - `{{show}}` - Nama pertunjukan (Rapunzel/Aladdin)
     - `{{payment_method}}` - Metode pembayaran
     - `{{payment_info}}` - Info rekening/nomor
   - **Template ID** akan muncul setelah template dibuat (contoh: `template_xyz789`)

4. **Dapatkan Public Key**
   - Klik "Account" > "General"
   - Copy **Public Key** (contoh: `abcdefghijklmnop`)

5. **Tambahkan ke file `.env`**:
   ```
   VITE_EMAILJS_SERVICE_ID=service_abc123
   VITE_EMAILJS_TEMPLATE_ID=template_xyz789
   VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
   ```

### Contoh Email Template "Order Confirmation":

**Subject:**
```
Konfirmasi Pembelian Tiket - {{ticket_type}}
```

**Body (HTML atau Plain Text):**

**Versi HTML (Recommended):**
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%); color: #b3a27b; padding: 20px; text-align: center; }
    .content { background: #f9f9f9; padding: 30px; }
    .info-box { background: white; padding: 20px; margin: 20px 0; border-left: 4px solid #b3a27b; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
    .highlight { color: #b3a27b; font-weight: bold; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Sunshine Studio</h1>
      <p>World Of Fantasy 2.0 2026</p>
    </div>
    
    <div class="content">
      <h2>Terima Kasih Atas Pembelian Anda, {{to_name}}!</h2>
      
      <p>Kami telah menerima pesanan Anda. Berikut adalah detail pembelian:</p>
      
      <div class="info-box">
        <h3>Detail Pembelian</h3>
        <p><strong>Nama:</strong> {{to_name}}</p>
        <p><strong>Email:</strong> {{to_email}}</p>
        <p><strong>Jenis Tiket:</strong> <span class="highlight">{{ticket_type}}</span></p>
        <p><strong>Jumlah:</strong> {{quantity}} tiket</p>
        <p><strong>Total Pembayaran:</strong> <span class="highlight">{{total}}</span></p>
      </div>
      
      <div class="info-box">
        <h3>Detail Pertunjukan</h3>
        <p><strong>Sesi:</strong> {{session}}</p>
        <p><strong>Waktu:</strong> {{session_time}}</p>
        <p><strong>Pertunjukan:</strong> {{show}}</p>
        <p><strong>Tanggal:</strong> 14 Februari 2026</p>
        <p><strong>Lokasi:</strong> Gedung Juang Kota Sukabumi</p>
      </div>
      
      <div class="info-box">
        <h3>Informasi Pembayaran</h3>
        <p><strong>Metode Pembayaran:</strong> {{payment_method}}</p>
        <pre style="white-space: pre-wrap; font-family: Arial, sans-serif;">{{payment_info}}</pre>
      </div>
      
      <div class="info-box" style="background: #fff3cd; border-left-color: #ffc107;">
        <p><strong>⚠️ Penting:</strong></p>
        <p>Kami sedang memverifikasi pembayaran Anda. Tiket akan dikirimkan ke email ini dalam waktu 1x24 jam setelah verifikasi selesai.</p>
        <p>Jika ada pertanyaan, silakan hubungi kami di:</p>
        <p>Email: sunshinestudios@gmail.com<br>
        Telepon: +62 813-2104-6553</p>
      </div>
    </div>
    
    <div class="footer">
      <p>&copy; 2024 Sunshine Studio. All rights reserved.</p>
      <p>Follow us: @sunshinestudios.id</p>
    </div>
  </div>
</body>
</html>
```

**Versi Plain Text (Alternatif):**
```
Terima Kasih Atas Pembelian Anda, {{to_name}}!

Kami telah menerima pesanan Anda. Berikut adalah detail pembelian:

═══════════════════════════════════════
DETAIL PEMBELIAN
═══════════════════════════════════════
Nama: {{to_name}}
Email: {{to_email}}
Jenis Tiket: {{ticket_type}}
Jumlah: {{quantity}} tiket
Total Pembayaran: {{total}}

═══════════════════════════════════════
DETAIL PERTUNJUKAN
═══════════════════════════════════════
Sesi: {{session}}
Waktu: {{session_time}}
Pertunjukan: {{show}}
Tanggal: 14 Februari 2026
Lokasi: Gedung Juang Kota Sukabumi

═══════════════════════════════════════
INFORMASI PEMBAYARAN
═══════════════════════════════════════
Metode Pembayaran: {{payment_method}}

{{payment_info}}

═══════════════════════════════════════
PENTING
═══════════════════════════════════════
Kami sedang memverifikasi pembayaran Anda. 
Tiket akan dikirimkan ke email ini dalam waktu 1x24 jam setelah verifikasi selesai.

Jika ada pertanyaan, silakan hubungi kami:
Email: sunshinestudios@gmail.com
Telepon: +62 813-2104-6553

Terima kasih!
Sunshine Studio
@sunshinestudios.id
```

### Cara Menggunakan Template di EmailJS:

1. Login ke EmailJS Dashboard
2. Klik "Email Templates" > "Create New Template"
3. Beri nama: "Order Confirmation"
4. Pilih service yang sudah dibuat
5. Copy template HTML atau Plain Text di atas
6. Paste ke editor template
7. Pastikan semua variabel `{{variable_name}}` sudah benar
8. Klik "Save"
9. Copy Template ID yang muncul

## 2. Setup Google Apps Script (Google Drive & Sheets)

1. Buka [Google Apps Script](https://script.google.com/)
2. Buat project baru
3. Copy isi file `google-apps-script.js` ke editor
4. Ganti `YOUR_GOOGLE_DRIVE_FOLDER_ID` dengan ID folder Google Drive Anda
5. Ganti `YOUR_GOOGLE_SHEETS_ID` dengan ID Google Sheets Anda
6. Deploy sebagai Web App:
   - Klik "Deploy" > "New deployment"
   - Pilih type: "Web app"
   - Execute as: "Me"
   - Who has access: "Anyone"
   - Copy Web App URL
7. Tambahkan URL ke file `.env`:
   ```
   VITE_GOOGLE_APPS_SCRIPT_URL=your_web_app_url
   ```

## 3. Setup Google Drive Folder

1. Buat folder di Google Drive untuk menyimpan bukti transfer
2. Klik kanan folder > "Get link" > "Anyone with the link"
3. Copy Folder ID dari URL (setelah `/folders/`)
4. Gunakan ID ini di Google Apps Script

## 4. Setup Google Sheets

1. Buat Google Sheets baru
2. Buat header di baris pertama:
   - Tanggal & Waktu
   - Nama
   - Email
   - Telepon
   - Tiket
   - Jumlah
   - Total
   - Sesi
   - Waktu Sesi
   - Pertunjukan
   - Metode Pembayaran
   - Link Bukti Transfer
3. Copy Spreadsheet ID dari URL (setelah `/d/` dan sebelum `/edit`)
4. Gunakan ID ini di Google Apps Script

## 5. Environment Variables

Buat file `.env` di root project:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_GOOGLE_APPS_SCRIPT_URL=your_web_app_url
```

## 6. Deploy ke Netlify/Vercel

Tambahkan environment variables di dashboard hosting Anda:
- Netlify: Site settings > Environment variables
- Vercel: Project settings > Environment variables

## Catatan

- Pastikan Google Apps Script Web App sudah di-deploy dengan akses "Anyone"
- Pastikan Google Drive folder dan Google Sheets sudah di-share dengan service account atau public
- Test semua fitur sebelum production

