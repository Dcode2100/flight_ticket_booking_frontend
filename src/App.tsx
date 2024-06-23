import "./App.css"
import { Routes, Route, Navigate } from "react-router-dom"
import { HomePage, FlightSearchPage, CounterPage } from './pages';
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App" >
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/flights" element={<FlightSearchPage />} />
        {/* <Route path="/flights/:flightId" element={<DetailedFlightView />} />
        <Route path="/booking-details" element={<BookingDetails />} /> */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
