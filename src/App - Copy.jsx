import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Components
import Header from './Header'
import Footer from './Footer'
import HomePage from './HomePage'
import ServicesPage from './ServicesPage'
import ServiceCategoryPage from './ServiceCategoryPage'
import ServiceDetailPage from './ServiceDetailPage'
import BookingPage from './BookingPage'
import AdminDashboard from './AdminDashboard'

// Service data
import { serviceCategories, services } from './services'

function App() {
  const [bookings, setBookings] = useState([])

  const addBooking = (booking) => {
    const newBooking = {
      ...booking,
      id: Date.now().toString(),
      status: 'pending',
      createdAt: new Date().toISOString()
    }
    setBookings(prev => [...prev, newBooking])
    return newBooking
  }

  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:category" element={<ServiceCategoryPage />} />
            <Route path="/services/:category/:service" element={<ServiceDetailPage />} />
            <Route path="/booking/:service" element={<BookingPage onBooking={addBooking} />} />
            <Route path="/dashboard/admin" element={<AdminDashboard bookings={bookings} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

