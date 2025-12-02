# Fix Google Sheets - Data Tidak Tersimpan

## Masalah:
Data tidak muncul di Google Sheets setelah submit form.

## Penyebab Kemungkinan:

1. **Google Apps Script belum di-copy** ke editor
2. **Script belum di-deploy** sebagai Web App
3. **CORS error** - Request tidak sampai ke Google Apps Script
4. **Script error** - Ada error di execution log
5. **Spreadsheet tidak di-share** dengan email Google Apps Script

---

## Langkah Troubleshooting:

### 1. Cek Google Apps Script

#### A. Pastikan Script Sudah Di-copy
1. Buka: https://script.google.com/d/1rAkzRl57NSVUZInGpzifK3JDrJvjeEwQCY5DrqLE2vrlR-9eH5IAw5Xc/edit
2. Pastikan script dari file `google-apps-script.js` sudah ada di editor
3. Pastikan Folder ID dan Spreadsheet ID sudah benar:
   - Folder ID: `1rcdkicR_qU3kYPHI4QsaMa2jxPpZJ7vM`
   - Spreadsheet ID: `1clQP_naBAow-RcPdDuWjTieXIB-HmBPanxYhmbhnobI`
4. Klik "Save"

#### B. Cek Execution Log
1. Di Google Apps Script, klik "Executions" di menu kiri
2. Lihat execution terakhir
3. Klik untuk melihat detail
4. Lihat apakah ada error

#### C. Redeploy Script
1. Klik "Deploy" > "Manage deployments"
2. Klik ikon "Edit" (pensil) di deployment yang ada
3. Klik "Deploy" untuk update
4. Atau buat deployment baru:
   - Klik "Deploy" > "New deployment"
   - Pilih "Web app"
   - Execute as: "Me"
   - Who has access: "Anyone"
   - Klik "Deploy"

### 2. Cek Spreadsheet Permissions

1. Buka: https://docs.google.com/spreadsheets/d/1clQP_naBAow-RcPdDuWjTieXIB-HmBPanxYhmbhnobI/edit
2. Klik "Share" di pojok kanan atas
3. Pastikan email `muhammadjordysetiawan3882@gmail.com` sudah ada
4. Set permission: "Editor"
5. Jika belum ada, tambahkan dan set "Editor"

### 3. Test Google Apps Script Manual

1. Buka Google Apps Script editor
2. Pilih function `doPost` di dropdown
3. Klik "Run" (tapi ini tidak akan bekerja karena butuh POST request)
4. Atau test dengan membuat function test:

```javascript
function testSaveToSheets() {
  const testData = {
    timestamp: new Date().toISOString(),
    name: 'Test User',
    email: 'test@email.com',
    phone: '081234567890',
    ticketType: 'Pre-Sale 1',
    quantity: 1,
    total: 45000,
    session: 'Sesi 1 - Rapunzel',
    sessionTime: '09.30 WIB',
    show: 'Rapunzel',
    paymentMethod: 'BCA'
  };
  
  const driveFileId = 'test_file_id';
  saveToSheets(testData, driveFileId);
}
```

5. Run function `testSaveToSheets`
6. Cek apakah data muncul di Sheets

### 4. Cek Browser Console

1. Buka website di browser
2. Tekan F12 untuk buka Developer Tools
3. Klik tab "Console"
4. Submit form pembayaran
5. Lihat apakah ada error:
   - CORS error
   - Network error
   - Google Apps Script error

### 5. Cek Network Tab

1. Di Developer Tools, klik tab "Network"
2. Submit form pembayaran
3. Cari request ke `script.google.com`
4. Klik request tersebut
5. Lihat:
   - Status code (harus 200)
   - Response (jika ada)
   - Error message (jika ada)

---

## Quick Fix:

### Option 1: Test dengan mode 'no-cors'
Karena kita pakai `mode: 'no-cors'`, response tidak bisa dibaca, tapi script tetap akan execute.

**Cek di Google Sheets:**
- Buka spreadsheet
- Lihat apakah ada data baru muncul (meskipun console tidak bisa baca response)

### Option 2: Cek Execution Log di Google Apps Script
1. Buka Google Apps Script
2. Klik "Executions"
3. Lihat execution terakhir setelah submit form
4. Lihat error message jika ada

### Option 3: Test dengan Postman atau curl
Test Google Apps Script URL langsung:

```bash
curl -X POST https://script.google.com/macros/s/AKfycbwR-PoV2ekBVDAYmBVK7N0mptes_M3OZAVXmawZ80XIHLa8kUSJgoHa1rZbZlS5PsKX/exec \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test",
    "email": "test@email.com",
    "phone": "081234567890",
    "ticketType": "Pre-Sale 1",
    "quantity": 1,
    "total": 45000,
    "session": "Sesi 1 - Rapunzel",
    "sessionTime": "09.30 WIB",
    "show": "Rapunzel",
    "paymentMethod": "BCA",
    "proofImage": "data:image/jpeg;base64,/9j/4AAQSkZJRg==",
    "timestamp": "2024-12-02T06:00:00.000Z"
  }'
```

---

## Setelah Fix:

1. **Test form pembayaran lagi**
2. **Cek Google Sheets** - data seharusnya muncul
3. **Cek Google Drive** - foto seharusnya terupload
4. **Cek Execution Log** - pastikan tidak ada error

---

## Checklist:

- [ ] Script sudah di-copy ke Google Apps Script
- [ ] Script sudah di-save
- [ ] Script sudah di-deploy sebagai Web App
- [ ] Spreadsheet sudah di-share dengan email Google Apps Script
- [ ] Execution log tidak ada error
- [ ] Test manual berhasil
- [ ] Data muncul di Google Sheets


