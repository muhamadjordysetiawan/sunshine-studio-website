// Google Apps Script - Versi Sederhana (Hanya Save ke Sheets)
// Copy script ini ke Google Apps Script (script.google.com)

function doPost(e) {
  const output = ContentService.createTextOutput();
  
  try {
    // Get data from request
    let requestData;
    if (e && e.postData && e.postData.contents) {
      requestData = e.postData.contents;
    } else if (e && e.parameter && e.parameter.data) {
      requestData = e.parameter.data;
    } else {
      throw new Error('No data found in request');
    }
    
    const data = JSON.parse(requestData);
    
    // Simpan data ke Google Sheets
    saveToSheets(data);
    
    output.setContent(JSON.stringify({
      success: true,
      message: 'Data berhasil disimpan'
    }));
  } catch (error) {
    output.setContent(JSON.stringify({
      success: false,
      error: error.toString()
    }));
  }
  
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}

function saveToSheets(data) {
  // Spreadsheet ID untuk menyimpan data pembelian
  const SPREADSHEET_ID = '1clQP_naBAow-RcPdDuWjTieXIB-HmBPanxYhmbhnobI';
  const SHEET_NAME = 'Sheet1';
  
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
  
  // Jika sheet kosong, tambahkan header
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'Tanggal & Waktu',
      'Nama',
      'Email',
      'Telepon',
      'Tiket',
      'Jumlah',
      'Total',
      'Sesi',
      'Waktu Sesi',
      'Pertunjukan',
      'Metode Pembayaran',
      'Catatan'
    ]);
  }
  
  // Format total dengan titik sebagai pemisah ribuan
  const formattedTotal = `Rp ${data.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
  
  // Append data
  sheet.appendRow([
    data.timestamp || new Date().toISOString(),
    data.name || '',
    data.email || '',
    data.phone || '',
    data.ticketType || '',
    data.quantity || 0,
    formattedTotal,
    data.session || '',
    data.sessionTime || '',
    data.show || '',
    data.paymentMethod || '',
    'Bukti transfer: ' + (data.proofImage ? 'Ada' : 'Tidak ada')
  ]);
}


