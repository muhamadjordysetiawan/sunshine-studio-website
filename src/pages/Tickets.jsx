import { useState } from 'react'
import './Tickets.css'

const Tickets = () => {
  const [selectedTicket, setSelectedTicket] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    paymentMethod: 'card'
  })

  const ticketTypes = [
    {
      id: 1,
      name: 'VIP',
      price: 150,
      description: 'Premium seating with best views, complimentary refreshments, and meet & greet with actors',
      features: ['Best Seats', 'Meet & Greet', 'Refreshments', 'VIP Badge']
    },
    {
      id: 2,
      name: 'Standard',
      price: 75,
      description: 'Great seats with excellent view of the stage',
      features: ['Good Seats', 'Program Booklet', 'Standard Access']
    },
    {
      id: 3,
      name: 'Student',
      price: 45,
      description: 'Special pricing for students with valid ID',
      features: ['Student Seats', 'Program Booklet', 'Student Discount']
    }
  ]

  const handleTicketSelect = (ticket) => {
    setSelectedTicket(ticket)
    setQuantity(1)
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!selectedTicket) {
      alert('Please select a ticket type')
      return
    }
    const total = selectedTicket.price * quantity
    alert(`Thank you for your purchase!\n\nTicket: ${selectedTicket.name}\nQuantity: ${quantity}\nTotal: $${total}\n\nA confirmation email will be sent to ${formData.email}`)
    // In a real app, you would process the payment here
  }

  const total = selectedTicket ? selectedTicket.price * quantity : 0

  return (
    <div className="tickets-page">
      <div className="tickets-hero">
        <div className="container">
          <h1>Get Your Tickets</h1>
          <p>Secure your seat for an unforgettable theater experience</p>
        </div>
      </div>

      <div className="container tickets-container">
        <div className="tickets-content">
          <section className="ticket-selection">
            <h2>Choose Your Ticket</h2>
            <div className="ticket-grid">
              {ticketTypes.map(ticket => (
                <div
                  key={ticket.id}
                  className={`ticket-card ${selectedTicket?.id === ticket.id ? 'selected' : ''}`}
                  onClick={() => handleTicketSelect(ticket)}
                >
                  <div className="ticket-header">
                    <h3>{ticket.name}</h3>
                    <div className="ticket-price">${ticket.price}</div>
                  </div>
                  <p className="ticket-description">{ticket.description}</p>
                  <ul className="ticket-features">
                    {ticket.features.map((feature, idx) => (
                      <li key={idx}>✓ {feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {selectedTicket && (
              <div className="quantity-selector">
                <label>Quantity:</label>
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
                  Subtotal: <span>${total}</span>
                </div>
              </div>
            )}
          </section>

          <section className="checkout-section">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit} className="checkout-form">
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div className="form-group">
                <label>Payment Method *</label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleInputChange}
                  required
                >
                  <option value="card">Credit/Debit Card</option>
                  <option value="paypal">PayPal</option>
                  <option value="bank">Bank Transfer</option>
                </select>
              </div>

              {formData.paymentMethod === 'card' && (
                <div className="card-details">
                  <div className="form-group">
                    <label>Card Number</label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      maxLength="19"
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Expiry Date</label>
                      <input type="text" placeholder="MM/YY" maxLength="5" />
                    </div>
                    <div className="form-group">
                      <label>CVV</label>
                      <input type="text" placeholder="123" maxLength="3" />
                    </div>
                  </div>
                </div>
              )}

              <div className="order-summary">
                <h3>Order Summary</h3>
                {selectedTicket ? (
                  <>
                    <div className="summary-row">
                      <span>{selectedTicket.name} x {quantity}</span>
                      <span>${total}</span>
                    </div>
                    <div className="summary-row total">
                      <span>Total</span>
                      <span>${total}</span>
                    </div>
                  </>
                ) : (
                  <p className="no-selection">Please select a ticket type</p>
                )}
              </div>

              <button 
                type="submit" 
                className="btn btn-primary btn-large"
                disabled={!selectedTicket}
              >
                Complete Purchase
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Tickets

