# Debug Request ke Google Apps Script

## Masalah:
`e` (event parameter) masih `undefined` di Google Apps Script, berarti request tidak sampai.

## Kemungkinan Penyebab:

1. **Request tidak terkirim dari frontend**
2. **URL Google Apps Script salah**
3. **Deployment belum di-update**
4. **CORS blocking request**

## Langkah Debugging:

### 1. Cek Request di Browser Console

1. Buka website di browser
2. Tekan F12 untuk buka Developer Tools
3. Klik tab "Network"
4. Submit form pembayaran
5. Cari request ke `script.google.com`
6. Klik request tersebut
7. Lihat:
   - **Request URL** - apakah benar?
   - **Request Method** - harus POST
   - **Request Headers** - Content-Type harus benar
   - **Request Payload** - apakah data terkirim?
   - **Response** - apa yang dikembalikan?

### 2. Cek URL Google Apps Script

Pastikan URL di file `.env` benar:
```
VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/AKfycbwQkUCANTay8HJ2wuAMngxHsWQbAAE9dZyup2gyrVCS7tI3lJLpoyVgD_ifh4XcFVid/exec
```

### 3. Test URL Langsung di Browser

Buka URL Google Apps Script di browser:
```
https://script.google.com/macros/s/AKfycbwQkUCANTay8HJ2wuAMngxHsWQbAAE9dZyup2gyrVCS7tI3lJLpoyVgD_ifh4XcFVid/exec
```

Seharusnya muncul error "Script function not found: doGet" - ini normal.

### 4. Test dengan curl (Terminal)

Test request langsung dari terminal:

```bash
curl -X POST "https://script.google.com/macros/s/AKfycbwQkUCANTay8HJ2wuAMngxHsWQbAAE9dZyup2gyrVCS7tI3lJLpoyVgD_ifh4XcFVid/exec" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "data={\"name\":\"Test\",\"email\":\"test@email.com\"}"
```

Lihat apakah ada response atau error.

### 5. Cek Deployment di Google Apps Script

1. Buka Google Apps Script
2. Klik "Deploy" > "Manage deployments"
3. Pastikan deployment aktif
4. Copy Web App URL yang benar
5. Pastikan URL sama dengan yang di `.env`

### 6. Cek Execution Log

1. Di Google Apps Script, klik "Executions"
2. Lihat execution terakhir
3. Jika `e` masih `undefined`, berarti request tidak sampai
4. Cek apakah ada request di Network tab browser

---

## Solusi Alternatif:

Jika request masih tidak sampai, coba:

### Option 1: Gunakan doGet dengan Query Parameters

Ubah Google Apps Script untuk menerima GET request dengan query parameters.

### Option 2: Gunakan Google Apps Script API

Gunakan Google Apps Script API langsung dari backend.

### Option 3: Gunakan Service Worker

Gunakan service worker untuk proxy request.

---

## Setelah Debug:

1. **Cek Network tab** - apakah request terkirim?
2. **Cek URL** - apakah benar?
3. **Cek Deployment** - apakah aktif?
4. **Cek Execution Log** - apakah `e` masih undefined?

Jika request tidak terlihat di Network tab, berarti ada masalah di frontend.
Jika request terlihat tapi `e` masih undefined, berarti ada masalah di Google Apps Script.


