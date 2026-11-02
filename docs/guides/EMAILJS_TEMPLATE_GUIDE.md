# Panduan Mengisi Template EmailJS - Order Confirmation

## Cara Mengisi Form di EmailJS Dashboard

### 1. To Email *
```
{{to_email}}
```
**Penjelasan:** Ini akan otomatis mengisi email pembeli dari form pembayaran.

### 2. From Name
```
Sunshine Studio
```
**Penjelasan:** Nama pengirim yang akan muncul di inbox pembeli.

### 3. From Email *
✅ Centang "Use Default Email Address" (gunakan email yang sudah di-setup di service)

### 4. Reply To
```
muhamadjordysetiawan3882@gmail.com
```
atau email yang ingin digunakan untuk reply.

### 5. Subject *
```
Konfirmasi Pembelian Tiket - {{ticket_type}}
```
**Penjelasan:** Subject email yang akan diterima pembeli.

### 6. Content * (Desktop)

Klik tombol "Edit Content" dan paste template HTML berikut:

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { 
      font-family: Arial, sans-serif; 
      line-height: 1.6; 
      color: #333; 
      margin: 0; 
      padding: 0; 
      background-color: #f4f4f4;
    }
    .container { 
      max-width: 600px; 
      margin: 0 auto; 
      background: white;
    }
    .header { 
      background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%); 
      color: #b3a27b; 
      padding: 30px 20px; 
      text-align: center; 
    }
    .header h1 {
      margin: 0;
      font-size: 28px;
      color: #b3a27b;
    }
    .header p {
      margin: 10px 0 0 0;
      font-size: 16px;
      color: #d4c5a0;
    }
    .content { 
      padding: 30px 20px; 
    }
    .info-box { 
      background: #f9f9f9; 
      padding: 20px; 
      margin: 20px 0; 
      border-left: 4px solid #b3a27b; 
      border-radius: 4px;
    }
    .info-box h3 {
      margin-top: 0;
      color: #000;
      font-size: 18px;
    }
    .footer { 
      text-align: center; 
      padding: 20px; 
      background: #f9f9f9;
      color: #666; 
      font-size: 12px; 
    }
    .highlight { 
      color: #b3a27b; 
      font-weight: bold; 
      font-size: 18px;
    }
    .warning-box {
      background: #fff3cd; 
      padding: 20px; 
      margin: 20px 0; 
      border-left: 4px solid #ffc107;
      border-radius: 4px;
    }
    .warning-box strong {
      color: #856404;
    }
    pre {
      white-space: pre-wrap; 
      font-family: Arial, sans-serif;
      background: white;
      padding: 10px;
      border-radius: 4px;
      margin: 10px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Sunshine Studio</h1>
      <p>World Of Fantasy 2.0 2026</p>
    </div>
    
    <div class="content">
      <h2 style="color: #000; margin-top: 0;">Terima Kasih Atas Pembelian Anda, {{to_name}}!</h2>
      
      <p>Kami telah menerima pesanan Anda. Berikut adalah detail pembelian:</p>
      
      <div class="info-box">
        <h3>📋 Detail Pembelian</h3>
        <p><strong>Nama:</strong> {{to_name}}</p>
        <p><strong>Email:</strong> {{to_email}}</p>
        <p><strong>Jenis Tiket:</strong> <span class="highlight">{{ticket_type}}</span></p>
        <p><strong>Jumlah:</strong> {{quantity}} tiket</p>
        <p><strong>Total Pembayaran:</strong> <span class="highlight">{{total}}</span></p>
      </div>
      
      <div class="info-box">
        <h3>🎭 Detail Pertunjukan</h3>
        <p><strong>Sesi:</strong> {{session}}</p>
        <p><strong>Waktu:</strong> {{session_time}}</p>
        <p><strong>Pertunjukan:</strong> {{show}}</p>
        <p><strong>Tanggal:</strong> 14 Februari 2026</p>
        <p><strong>Lokasi:</strong> Gedung Juang Kota Sukabumi</p>
      </div>
      
      <div class="info-box">
        <h3>💳 Informasi Pembayaran</h3>
        <p><strong>Metode Pembayaran:</strong> {{payment_method}}</p>
        <pre>{{payment_info}}</pre>
      </div>
      
      <div class="warning-box">
        <p><strong>⚠️ Penting:</strong></p>
        <p>Kami sedang memverifikasi pembayaran Anda. Tiket akan dikirimkan ke email ini dalam waktu 1x24 jam setelah verifikasi selesai.</p>
        <p>Jika ada pertanyaan, silakan hubungi kami di:</p>
        <p>
          Email: sunshinestudios@gmail.com<br>
          Telepon: +62 813-2104-6553<br>
          Instagram: @sunshinestudios.id
        </p>
      </div>
    </div>
    
    <div class="footer">
      <p><strong>Sunshine Studio</strong></p>
      <p>&copy; 2024 Sunshine Studio. All rights reserved.</p>
      <p>Follow us: @sunshinestudios.id</p>
    </div>
  </div>
</body>
</html>
```

### 7. Content (Mobile) - Opsional

Bisa copy template yang sama atau buat versi yang lebih sederhana untuk mobile.

### 8. Klik "Save"

Setelah semua field diisi, klik tombol "Save" di pojok kanan atas.

### 9. Copy Template ID

Setelah template tersimpan, Template ID akan muncul (contoh: `template_xyz789`). Copy ID ini untuk digunakan di file `.env`.

## Variabel yang Digunakan

Pastikan semua variabel berikut ada di template:
- `{{to_name}}` - Nama pembeli
- `{{to_email}}` - Email pembeli
- `{{ticket_type}}` - Jenis tiket (Pre-Sale 1, dll)
- `{{quantity}}` - Jumlah tiket
- `{{total}}` - Total harga (sudah dalam format Rupiah)
- `{{session}}` - Sesi yang dipilih (Sesi 1 - Rapunzel, dll)
- `{{session_time}}` - Waktu sesi (09.30 WIB, dll)
- `{{show}}` - Nama pertunjukan (Rapunzel/Aladdin)
- `{{payment_method}}` - Metode pembayaran (BCA/Dana)
- `{{payment_info}}` - Info rekening/nomor lengkap

## Tips

1. **Preview Template:** Gunakan fitur preview di EmailJS untuk melihat hasil sebelum save
2. **Test Email:** Kirim test email ke diri sendiri untuk memastikan format sudah benar
3. **Mobile View:** Pastikan template terlihat bagus di mobile dengan mengisi tab "Mobile" juga


