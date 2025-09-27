import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RussianNavbar from './components/RussianNavbar';
import RussianFooter from './components/RussianFooter';
import BookingModal from './components/BookingModal';
import HomePage from './pages/HomePage';
import OrtopediaPage from './pages/OrtopediaPage';
import TerapiaPage from './pages/TerapiaPage';
import StudyPage from './pages/StudyPage';
import SurgeryPage from './pages/SurgeryPage';
import RussianHomePage from './pages/RussianHomePage';
import RussianServicesPage from './pages/RussianServicesPage';
import RussianDoctorsPage from './pages/RussianDoctorsPage';
import RussianContactPage from './pages/RussianContactPage';
import LanguageSelector from './pages/LanguageSelector';
import { BookingData } from './types';

const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const location = useLocation();

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  const handleBookingSubmit = (data: BookingData) => {
    // Here you would typically send the data to your backend
    console.log('Booking submitted:', data);
    // For demo purposes, we'll just show an alert
    const isRussian = location.pathname.startsWith('/ru');
    const message = isRussian 
      ? `Запись успешно оформлена!\n\nИмя: ${data.name}\nEmail: ${data.email}\nТелефон: ${data.phone}\nДата: ${data.date}\nВремя: ${data.time}\nУслуга: ${data.service}`
      : `Appointment booked successfully!\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nDate: ${data.date}\nTime: ${data.time}\nService: ${data.service}`;
    alert(message);
    closeBooking();
  };

  const isRussian = location.pathname.startsWith('/ru');
  const isLanguageSelector = location.pathname === '/select-language';

  if (isLanguageSelector) {
    return <LanguageSelector />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {isRussian ? (
        <RussianNavbar onBookingClick={openBooking} />
      ) : (
        <Navbar onBookingClick={openBooking} />
      )}
      <main className="flex-grow">
        <Routes>
          {/* Language Selector */}
          <Route path="/select-language" element={<LanguageSelector />} />
          
          {/* English Routes */}
          <Route path="/" element={<HomePage onBookingClick={openBooking} />} />
          <Route path="/ortopedia" element={<OrtopediaPage onBookingClick={openBooking} />} />
          <Route path="/terapia" element={<TerapiaPage onBookingClick={openBooking} />} />
          <Route path="/study" element={<StudyPage onBookingClick={openBooking} />} />
          <Route path="/surgery" element={<SurgeryPage onBookingClick={openBooking} />} />
          
          {/* Russian Routes */}
          <Route path="/ru" element={<RussianHomePage onBookingClick={openBooking} />} />
          <Route path="/ru/services" element={<RussianServicesPage onBookingClick={openBooking} />} />
          <Route path="/ru/doctors" element={<RussianDoctorsPage onBookingClick={openBooking} />} />
          <Route path="/ru/contact" element={<RussianContactPage onBookingClick={openBooking} />} />
          
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-6xl font-bold text-dental-600 mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
                <a href="/" className="btn-primary">Go Home</a>
              </div>
            </div>
          } />
        </Routes>
      </main>
      {isRussian ? (
        <RussianFooter />
      ) : (
        <Footer />
      )}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={closeBooking}
        onSubmit={handleBookingSubmit}
      />
    </div>
  );
};

export default App;
