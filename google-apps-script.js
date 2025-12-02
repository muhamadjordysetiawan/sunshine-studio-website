// Google Apps Script - Versi Sederhana (Hanya Save ke Sheets)
// Copy script ini ke Google Apps Script (script.google.com)

function doPost(e) {
  return processRequest(e);
}

function doGet(e) {
  // Handle GET request as fallback
  console.log('=== doGet called ===');
  console.log('e exists:', !!e);
  if (e && e.parameter) {
    console.log('e.parameter keys:', Object.keys(e.parameter));
  }
  return processRequest(e);
}

function processRequest(e) {
  const output = ContentService.createTextOutput();
  
  try {
    console.log('=== processRequest START ===');
    console.log('e exists:', !!e);
    console.log('e type:', typeof e);
    
    if (!e) {
      console.error('e is undefined!');
      throw new Error('Event parameter is undefined');
    }
    
    console.log('e.postData exists:', !!(e.postData));
    console.log('e.parameter exists:', !!(e.parameter));
    
    // Get data from request
    let requestData;
    console.log('=== Parsing request data ===');
    console.log('e.postData exists:', !!(e.postData));
    console.log('e.postData.type:', e.postData ? e.postData.type : 'N/A');
    console.log('e.parameter exists:', !!(e.parameter));
    console.log('e.parameter keys:', e.parameter ? Object.keys(e.parameter) : []);
    
    if (e.postData && e.postData.contents) {
      console.log('Using postData.contents');
      console.log('postData.type:', e.postData.type);
      requestData = e.postData.contents;
      console.log('postData.contents length:', requestData.length);
    } else if (e.parameter && e.parameter.data) {
      console.log('Using parameter.data (FormData)');
      try {
        // FormData sends data as 'data' parameter
        requestData = e.parameter.data;
        console.log('parameter.data length:', requestData.length);
        console.log('parameter.data preview:', requestData.substring(0, 200));
        // Try to decode if URL-encoded
        try {
          requestData = decodeURIComponent(requestData);
          console.log('Decoded data length:', requestData.length);
        } catch (decodeError) {
          console.log('Not URL-encoded, using raw data');
        }
      } catch (error) {
        console.error('Error getting parameter.data:', error);
        requestData = e.parameter.data;
      }
    } else if (e.parameter) {
      // Try to get all parameters as JSON
      console.log('Using e.parameter directly');
      console.log('Parameter keys:', Object.keys(e.parameter));
      // If parameter has 'data' key, use it (might be URL-encoded)
      if (e.parameter.data) {
        try {
          requestData = decodeURIComponent(e.parameter.data);
        } catch (e) {
          requestData = e.parameter.data;
        }
      } else {
        // Use all parameters as data
        requestData = JSON.stringify(e.parameter);
      }
    } else {
      console.error('No data found!');
      console.error('e.postData:', e.postData);
      console.error('e.parameter:', e.parameter);
      throw new Error('No data found in request');
    }
    
    console.log('Request data length:', requestData ? requestData.length : 0);
    console.log('Request data preview:', requestData ? requestData.substring(0, 200) : 'empty');
    
    let data;
    try {
      // Try parsing as JSON
      data = JSON.parse(requestData);
      console.log('Data parsed successfully');
      console.log('Data type:', typeof data);
      console.log('Data keys:', Object.keys(data));
      console.log('Full data:', JSON.stringify(data));
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      console.error('Request data:', requestData);
      // Try to parse as URL-encoded string
      try {
        const decoded = decodeURIComponent(requestData);
        data = JSON.parse(decoded);
        console.log('Parsed after decodeURIComponent');
      } catch (e2) {
        throw new Error('Failed to parse JSON: ' + parseError.message);
      }
    }
    
    // Validate required fields
    if (!data || typeof data !== 'object') {
      console.error('Invalid data format. Data:', data);
      throw new Error('Invalid data format');
    }
    
    // Log all data fields
    console.log('Data fields:');
    console.log('- name:', data.name);
    console.log('- email:', data.email);
    console.log('- phone:', data.phone);
    console.log('- ticketType:', data.ticketType);
    console.log('- quantity:', data.quantity);
    console.log('- total:', data.total, '(type:', typeof data.total, ')');
    console.log('- session:', data.session);
    console.log('- sessionTime:', data.sessionTime);
    console.log('- show:', data.show);
    console.log('- paymentMethod:', data.paymentMethod);
    console.log('- proofImage exists:', !!(data.proofImage));
    console.log('- proofImage type:', typeof data.proofImage);
    console.log('- proofImage length:', data.proofImage ? data.proofImage.length : 0);
    console.log('- proofImage preview:', data.proofImage ? data.proofImage.substring(0, 100) + '...' : 'null/undefined');
    
    // Simpan data ke Google Sheets
    console.log('Calling saveToSheets...');
    console.log('Data before calling saveToSheets:', JSON.stringify(data));
    console.log('Data type before calling saveToSheets:', typeof data);
    console.log('Data is undefined?', data === undefined);
    console.log('Data is null?', data === null);
    
    // Final validation before calling saveToSheets
    if (data === undefined || data === null) {
      console.error('Data is undefined or null before calling saveToSheets');
      throw new Error('Data is undefined or null before calling saveToSheets');
    }
    
    if (typeof data !== 'object') {
      console.error('Data is not an object before calling saveToSheets. Type:', typeof data);
      throw new Error('Data is not an object before calling saveToSheets');
    }
    
    // Call saveToSheets with explicit data check
    console.log('About to call saveToSheets with data:', Object.keys(data));
    const result = saveToSheets(data);
    console.log('saveToSheets completed! Result:', result);
    
    output.setContent(JSON.stringify({
      success: true,
      message: 'Data berhasil disimpan'
    }));
  } catch (error) {
    console.error('ERROR in processRequest:', error);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    output.setContent(JSON.stringify({
      success: false,
      error: error.toString(),
      message: error.message
    }));
  }
  
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}

function saveToSheets(data) {
  console.log('=== saveToSheets START ===');
  console.log('saveToSheets called with arguments.length:', arguments.length);
  console.log('arguments:', JSON.stringify(Array.from(arguments)));
  console.log('saveToSheets received data:', data);
  console.log('data type:', typeof data);
  console.log('data is undefined:', data === undefined);
  console.log('data is null:', data === null);
  
  // Validate data parameter - check if data is provided
  if (arguments.length === 0) {
    console.error('No arguments provided to saveToSheets');
    console.error('Stack trace:', new Error().stack);
    throw new Error('saveToSheets called without any arguments');
  }
  
  if (data === undefined || data === null) {
    console.error('Data parameter is undefined or null');
    console.error('arguments[0]:', arguments[0]);
    console.error('Stack trace:', new Error().stack);
    throw new Error('Data parameter is required but was undefined or null');
  }
  
  // Validate data is an object
  if (typeof data !== 'object') {
    console.error('Invalid data parameter type in saveToSheets:', typeof data, data);
    throw new Error('Data parameter must be an object, got: ' + typeof data);
  }
  
  // Spreadsheet ID untuk menyimpan data pembelian
  const SPREADSHEET_ID = '1clQP_naBAow-RcPdDuWjTieXIB-HmBPanxYhmbhnobI';
  const SHEET_NAME = 'Sheet1';
  
  try {
    console.log('Opening spreadsheet:', SPREADSHEET_ID);
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    console.log('Spreadsheet opened:', spreadsheet.getName());
    
    console.log('Getting sheet:', SHEET_NAME);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    // Jika Sheet1 tidak ditemukan, gunakan sheet pertama
    if (!sheet) {
      console.log('Sheet "' + SHEET_NAME + '" not found, using first sheet');
      sheet = spreadsheet.getSheets()[0];
      if (!sheet) {
        throw new Error('No sheets found in spreadsheet!');
      }
      console.log('Using first sheet:', sheet.getName());
    } else {
      console.log('Sheet found:', sheet.getName());
    }
    console.log('Current last row:', sheet.getLastRow());
    
    // Jika sheet kosong, tambahkan header
    if (sheet.getLastRow() === 0) {
      console.log('Sheet is empty, adding header...');
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
        'Bukti Transfer'
      ]);
      console.log('Header added. New last row:', sheet.getLastRow());
      
      // Set column width untuk kolom Bukti Transfer (kolom M, index 12)
      sheet.setColumnWidth(13, 200); // Lebar kolom 200 pixels untuk foto
    }
    
    // Double check data is valid before accessing properties
    if (!data || typeof data !== 'object') {
      console.error('Data is invalid in saveToSheets at row preparation:', data);
      throw new Error('Data is invalid at row preparation stage');
    }
    
    // Format total dengan titik sebagai pemisah ribuan
    let formattedTotal = 'Rp 0';
    if (data && data.total !== undefined && data.total !== null) {
      const totalValue = typeof data.total === 'number' ? data.total : parseInt(data.total) || 0;
      formattedTotal = `Rp ${totalValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
    }
    
    // Prepare row data with validation (safe access) - tanpa kolom Bukti Transfer (akan diinsert sebagai gambar)
    const rowData = [
      (data && data.timestamp) ? data.timestamp : new Date().toISOString(),
      (data && data.name) ? data.name : '',
      (data && data.email) ? data.email : '',
      (data && data.phone) ? data.phone : '',
      (data && data.ticketType) ? data.ticketType : '',
      (data && data.quantity) ? data.quantity : 0,
      formattedTotal,
      (data && data.session) ? data.session : '',
      (data && data.sessionTime) ? data.sessionTime : '',
      (data && data.show) ? data.show : '',
      (data && data.paymentMethod) ? data.paymentMethod : '',
      '' // Kolom Bukti Transfer akan diisi dengan gambar
    ];
    
    console.log('Row data prepared:', rowData);
    
    console.log('Appending row data:', rowData);
    sheet.appendRow(rowData);
    const newRowNumber = sheet.getLastRow();
    console.log('Row appended! New row number:', newRowNumber);
    
    // Insert gambar bukti transfer jika ada
    console.log('=== Checking proofImage ===');
    console.log('data exists:', !!data);
    console.log('data.proofImage exists:', !!(data && data.proofImage));
    console.log('data.proofImage value:', data && data.proofImage ? 'has value' : 'no value');
    console.log('data.proofImage type:', data && data.proofImage ? typeof data.proofImage : 'N/A');
    console.log('data.proofImage length:', data && data.proofImage ? data.proofImage.length : 0);
    
    if (data && data.proofImage && typeof data.proofImage === 'string' && data.proofImage.trim() !== '') {
      try {
        console.log('=== Starting image insert ===');
        console.log('Image data length:', data.proofImage.length);
        console.log('Image data starts with:', data.proofImage.substring(0, 50));
        
        // Convert base64 to blob
        const base64Data = data.proofImage;
        // Remove data URL prefix if present (data:image/png;base64, or data:image/jpeg;base64,)
        let base64String = base64Data;
        if (base64Data.includes(',')) {
          base64String = base64Data.split(',')[1];
          console.log('Removed data URL prefix');
        }
        
        console.log('Base64 string length:', base64String.length);
        console.log('Base64 string preview:', base64String.substring(0, 50) + '...');
        
        // Decode base64 to bytes
        console.log('Decoding base64 to bytes...');
        const imageBytes = Utilities.base64Decode(base64String);
        console.log('Image bytes length:', imageBytes.length);
        
        // Create blob
        console.log('Creating blob...');
        const blob = Utilities.newBlob(imageBytes);
        
        // Determine image type from base64 data URL
        let imageType = 'image/png';
        let fileExtension = 'png';
        if (base64Data.includes('data:image/jpeg') || base64Data.includes('data:image/jpg')) {
          imageType = 'image/jpeg';
          fileExtension = 'jpg';
        } else if (base64Data.includes('data:image/gif')) {
          imageType = 'image/gif';
          fileExtension = 'gif';
        } else if (base64Data.includes('data:image/png')) {
          imageType = 'image/png';
          fileExtension = 'png';
        }
        
        blob.setContentType(imageType);
        blob.setName('proof_' + newRowNumber + '.' + fileExtension);
        
        console.log('Blob created. Type:', imageType, 'Size:', blob.getBytes().length, 'bytes');
        
        // Insert image to column M (kolom 13, 0-based = 12)
        // insertImage(blob, column, row) uses 0-based indexing
        const columnIndex = 12; // Kolom M = 13 (1-based) = 12 (0-based)
        const rowIndex = newRowNumber - 1; // Row is 0-based
        
        console.log('Inserting image at column:', columnIndex + 1, '(M)', 'row:', rowIndex + 1);
        console.log('Sheet name:', sheet.getName());
        console.log('New row number:', newRowNumber);
        
        const image = sheet.insertImage(blob, columnIndex, rowIndex);
        console.log('Image inserted! Image object:', image);
        
        // Resize image to fit cell (width: 150px, maintain aspect ratio)
        image.setWidth(150);
        console.log('Image width set to 150px');
        
        // Center image in cell
        const cellRange = sheet.getRange(newRowNumber, 13);
        cellRange.setVerticalAlignment('middle');
        cellRange.setHorizontalAlignment('center');
        console.log('Image centered in cell');
        
        // Set row height to accommodate image
        sheet.setRowHeight(newRowNumber, 120); // Set row height to 120 pixels
        console.log('Row height set to 120px');
        
        console.log('=== Image inserted successfully ===');
        console.log('Image at row', newRowNumber, 'column 13');
      } catch (imageError) {
        console.error('=== ERROR inserting image ===');
        console.error('Error type:', typeof imageError);
        console.error('Error message:', imageError.message);
        console.error('Error stack:', imageError.stack);
        console.error('Error toString:', imageError.toString());
        // Don't throw - continue even if image insert fails
        // Just log the error and put text instead
        try {
          sheet.getRange(newRowNumber, 13).setValue('Error: ' + imageError.message);
        } catch (setValueError) {
          console.error('Failed to set error message:', setValueError);
        }
      }
    } else {
      console.log('=== No proof image to insert ===');
      console.log('Reason: data.proofImage is', data && data.proofImage ? 'empty or invalid' : 'missing');
      try {
        sheet.getRange(newRowNumber, 13).setValue('Tidak ada bukti transfer');
      } catch (setValueError) {
        console.error('Failed to set "no image" message:', setValueError);
      }
    }
    
    console.log('=== saveToSheets SUCCESS ===');
    
  } catch (error) {
    console.error('ERROR in saveToSheets:', error);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    throw error;
  }
}

// Test function - untuk test manual
function testSaveToSheets() {
  const testData = {
    timestamp: new Date().toISOString(),
    name: 'Test Manual',
    email: 'test@email.com',
    phone: '081234567890',
    ticketType: 'Pre-Sale 1',
    quantity: 1,
    total: 45000,
    session: 'Sesi 1 - Rapunzel',
    sessionTime: '09.30 WIB',
    show: 'Rapunzel',
    paymentMethod: 'BCA',
    proofImage: false
  };
  
  try {
    saveToSheets(testData);
    console.log('Test berhasil!');
  } catch (error) {
    console.error('Test gagal:', error);
  }
}

