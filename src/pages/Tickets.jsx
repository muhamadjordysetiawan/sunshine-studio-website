import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Tickets.css'

const Tickets = () => {
  const [selectedTicket, setSelectedTicket] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [proofFile, setProofFile] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const fileInputRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    paymentMethod: 'bca',
    session: ''
  })

  const sessions = [
    { id: 1, name: 'Sesi 1 - Rapunzel', time: '09.30 WIB', show: 'Rapunzel' },
    { id: 2, name: 'Sesi 2 - Aladdin', time: '13.00 WIB', show: 'Aladdin' },
    { id: 3, name: 'Sesi 3 - Rapunzel', time: '16.00 WIB', show: 'Rapunzel' },
    { id: 4, name: 'Sesi 4 - Aladdin', time: '19.00 WIB', show: 'Aladdin' }
  ]

  const ticketTypes = [
    {
      id: 1,
      name: 'Early Bird',
      price: 30000,
      status: 'sold-out'
    },
    {
      id: 2,
      name: 'Pre-Sale 1',
      price: 45000,
      status: 'available'
    },
    {
      id: 3,
      name: 'Pre-Sale 2',
      price: 65000,
      status: 'coming-soon'
    },
    {
      id: 4,
      name: 'OTS',
      price: null,
      status: 'tba'
    }
  ]

  const handleTicketSelect = (ticket) => {
    // Only allow selection if ticket is available
    if (ticket.status === 'available') {
      setSelectedTicket(ticket)
      setQuantity(1)
    }
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Validate file type
      if (file.type.startsWith('image/')) {
        // Validate file size (max 5MB)
        if (file.size <= 5 * 1024 * 1024) {
          setProofFile(file)
        } else {
          alert('Ukuran file maksimal 5MB')
          e.target.value = ''
        }
      } else {
        alert('Hanya file gambar yang diperbolehkan')
        e.target.value = ''
      }
    }
  }

  const formatPrice = (price) => {
    if (price === null || price === undefined) return 'TBA'
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price)
  }

  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!selectedTicket) {
      alert('Silakan pilih jenis tiket')
      return
    }
    if (!proofFile) {
      alert('Silakan upload bukti transfer')
      return
    }
    if (!formData.session) {
      alert('Silakan pilih sesi pertunjukan')
      return
    }

    setIsSubmitting(true)

    try {
      const total = selectedTicket.price * quantity
      const selectedSession = sessions.find(s => s.id === parseInt(formData.session))
      const paymentInfo = formData.paymentMethod === 'bca' 
        ? `Bank BCA\nAtas Nama: Herawati Silalahi\nRekening: 0382123679`
        : `Dana\nAtas Nama: Herawati Silalahi\nNomor: 081213601297`

      // Convert file to base64
      const base64Image = await convertFileToBase64(proofFile)
      
      // 1. Upload foto dan simpan data ke Google Apps Script
      const scriptUrl = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL
      
      if (scriptUrl) {
        try {
          // Payload dengan base64 image untuk ditampilkan di Google Sheets
          const payload = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            ticketType: selectedTicket.name,
            quantity: quantity,
            total: total,
            session: selectedSession.name,
            sessionTime: selectedSession.time,
            show: selectedSession.show,
            paymentMethod: formData.paymentMethod === 'bca' ? 'BCA' : 'Dana',
            proofImage: base64Image || '', // Kirim base64 image untuk ditampilkan di Sheets
            timestamp: new Date().toISOString(),
          }
          
          console.log('Sending to Google Apps Script:', {
            name: payload.name,
            email: payload.email,
            ticketType: payload.ticketType
          })
          
          // Use POST with FormData to handle large base64 images
          console.log('Sending POST request to Google Apps Script')
          console.log('Payload size:', JSON.stringify(payload).length, 'characters')
          console.log('Image data length:', payload.proofImage ? payload.proofImage.length : 0)
          console.log('Image data preview:', payload.proofImage ? payload.proofImage.substring(0, 100) + '...' : 'no image')
          
          // Use FormData to send data (more reliable for Google Apps Script)
          const formDataToSend = new FormData()
          formDataToSend.append('data', JSON.stringify(payload))
          
          // Use POST method with FormData (can handle large data)
          fetch(scriptUrl, {
            method: 'POST',
            body: formDataToSend,
            mode: 'no-cors' // No CORS issues
          }).then(() => {
            console.log('POST request sent successfully')
          }).catch(err => {
            console.error('POST request failed:', err)
          })
        } catch (error) {
          console.error('Error uploading to Google:', error)
          console.error('Error details:', {
            message: error.message,
            stack: error.stack
          })
          // Continue even if Google Apps Script fails
        }
      } else {
        console.warn('Google Apps Script URL not configured')
      }

      // 2. Kirim email konfirmasi menggunakan EmailJS
      const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      console.log('EmailJS Config:', {
        serviceId: emailServiceId,
        templateId: emailTemplateId,
        publicKey: emailPublicKey ? '***' + emailPublicKey.slice(-4) : 'missing'
      })

      if (emailServiceId && emailTemplateId && emailPublicKey) {
        try {
          const emailParams = {
            to_name: formData.name,
            to_email: formData.email,
            ticket_type: selectedTicket.name,
            quantity: quantity.toString(),
            total: formatPrice(total),
            session: selectedSession.name,
            session_time: selectedSession.time,
            show: selectedSession.show,
            payment_method: formData.paymentMethod === 'bca' ? 'BCA' : 'Dana',
            payment_info: paymentInfo,
          }

          console.log('Sending email with params:', emailParams)
          const emailResult = await emailjs.send(emailServiceId, emailTemplateId, emailParams, emailPublicKey)
          console.log('Email sent successfully:', emailResult)
        } catch (error) {
          console.error('Error sending email:', error)
          console.error('Error details:', {
            text: error.text,
            status: error.status,
            message: error.message
          })
          alert(`Email gagal terkirim. Error: ${error.text || error.message}. Silakan cek console untuk detail.`)
        }
      } else {
        console.warn('EmailJS credentials missing:', {
          serviceId: !emailServiceId,
          templateId: !emailTemplateId,
          publicKey: !emailPublicKey
        })
        alert('EmailJS credentials belum diisi dengan lengkap. Silakan cek file .env')
      }

      // Show success message
      const emailStatus = emailServiceId && emailTemplateId && emailPublicKey 
        ? 'Email konfirmasi telah dikirim ke ' + formData.email
        : 'Catatan: EmailJS belum dikonfigurasi dengan lengkap'
      
      alert(`Terima kasih atas pembelian Anda!\n\nTiket: ${selectedTicket.name}\nJumlah: ${quantity}\nSesi: ${selectedSession.name} - ${selectedSession.time}\nTotal: ${formatPrice(total)}\n\n${emailStatus}`)
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        paymentMethod: 'bca',
        session: ''
      })
      setSelectedTicket(null)
      setQuantity(1)
      setProofFile(null)
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Terjadi kesalahan saat memproses pembayaran. Silakan coba lagi atau hubungi kami.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const total = selectedTicket && selectedTicket.price ? selectedTicket.price * quantity : 0

  return (
    <div className="tickets-page">
      <div className="tickets-hero">
        <div className="container">
          <h1>Get Your Tickets</h1>
          <p>Amankan tiketmu sekarang juga, untuk merasakan pengalaman yang tak terlupakan!</p>
        </div>
      </div>

      <div className="container tickets-container">
        <div className="tickets-content">
          <section className="ticket-selection">
            <h2>Pilih Tiket Anda</h2>
            <div className="ticket-grid">
              {ticketTypes.map(ticket => {
                const isDisabled = ticket.status !== 'available'
                return (
                  <div
                    key={ticket.id}
                    className={`ticket-card ${selectedTicket?.id === ticket.id ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}`}
                    onClick={() => !isDisabled && handleTicketSelect(ticket)}
                  >
                    <div className="ticket-header">
                      <h3>{ticket.name}</h3>
                      <div className="ticket-price">{formatPrice(ticket.price)}</div>
                    </div>
                    <div className="ticket-status">
                      {ticket.status === 'sold-out' && (
                        <span className="status-badge sold-out">SOLD OUT</span>
                      )}
                      {ticket.status === 'coming-soon' && (
                        <span className="status-badge coming-soon">COMING SOON</span>
                      )}
                      {ticket.status === 'tba' && (
                        <span className="status-badge tba">TO BE ANNOUNCED</span>
                      )}
                      {ticket.status === 'available' && (
                        <span className="status-badge available">AVAILABLE</span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {selectedTicket && (
              <div className="quantity-selector">
                <label>Jumlah:</label>
                <div className="quantity-controls">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="qty-btn"
                  >
                    -
                  </button>
                  <span className="quantity">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="qty-btn"
                  >
                    +
                  </button>
                </div>
                <div className="subtotal">
                  Subtotal: <span>{formatPrice(total)}</span>
                </div>
              </div>
            )}
          </section>

          <section className="checkout-section">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit} className="checkout-form">
              <div className="form-group">
                <label>Nama Lengkap *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Nama Lengkap"
                />
              </div>

              <div className="form-group">
                <label>Alamat Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="nama@email.com"
                />
              </div>

              <div className="form-group">
                <label>Nomor Telepon *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="081234567890"
                />
              </div>

              <div className="form-group">
                <label>Pilih Sesi Pertunjukan *</label>
                <select
                  name="session"
                  value={formData.session}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Pilih Sesi</option>
                  {sessions.map(session => (
                    <option key={session.id} value={session.id}>
                      {session.name} - {session.time}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Metode Pembayaran *</label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleInputChange}
                  required
                >
                  <option value="bca">Transfer Bank BCA</option>
                  <option value="dana">Dana</option>
                </select>
              </div>

              <div className="payment-info">
                {formData.paymentMethod === 'bca' && (
                  <div className="payment-details">
                    <h4>Informasi Rekening Bank BCA</h4>
                    <div className="payment-item">
                      <span className="payment-label">Bank:</span>
                      <span className="payment-value">BCA (Bank Central Asia)</span>
                    </div>
                    <div className="payment-item">
                      <span className="payment-label">Atas Nama:</span>
                      <span className="payment-value">Herawati Silalahi</span>
                    </div>
                    <div className="payment-item">
                      <span className="payment-label">Nomor Rekening:</span>
                      <span className="payment-value payment-number">0382123679</span>
                    </div>
                  </div>
                )}

                {formData.paymentMethod === 'dana' && (
                  <div className="payment-details">
                    <h4>Informasi Akun Dana</h4>
                    <div className="payment-item">
                      <span className="payment-label">Atas Nama:</span>
                      <span className="payment-value">Herawati Silalahi</span>
                    </div>
                    <div className="payment-item">
                      <span className="payment-label">Nomor Dana:</span>
                      <span className="payment-value payment-number">081213601297</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="form-group">
                <label>Upload Bukti Transfer *</label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="file-input"
                />
                {proofFile && (
                  <div className="file-preview">
                    <span className="file-name">✓ {proofFile.name}</span>
                    <button 
                      type="button"
                      onClick={() => {
                        setProofFile(null)
                        if (fileInputRef.current) {
                          fileInputRef.current.value = ''
                        }
                      }}
                      className="remove-file-btn"
                    >
                      Hapus
                    </button>
                  </div>
                )}
                <small className="file-hint">Format: JPG, PNG, atau GIF (Maks. 5MB)</small>
              </div>

              <div className="order-summary">
                <h3>Ringkasan Pesanan</h3>
                {selectedTicket ? (
                  <>
                    <div className="summary-row">
                      <span>{selectedTicket.name} x {quantity}</span>
                      <span>{formatPrice(selectedTicket.price)}</span>
                    </div>
                    <div className="summary-row total">
                      <span>Total</span>
                      <span>{formatPrice(total)}</span>
                    </div>
                  </>
                ) : (
                  <p className="no-selection">Silakan pilih jenis tiket</p>
                )}
              </div>

              <button 
                type="submit" 
                className="btn btn-primary btn-large"
                disabled={!selectedTicket || isSubmitting}
              >
                {isSubmitting ? 'Memproses...' : 'Selesaikan Pembelian'}
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Tickets

