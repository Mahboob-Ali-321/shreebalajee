import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StickyMobileBar from "./components/StickyMobileBar";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import Fleet from "./pages/Fleet";
import Pricing from "./pages/Pricing";
import RoutesPage from "./pages/Routes";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F3F6FC] text-[#0A1931]">
        {/* Top Navbar */}
        <Navbar />

        {/* Main Content Viewport */}
        <main className="flex-1 w-full overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/routes" element={<RoutesPage />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Mobile Sticky Action Bar (< 768px) */}
        <StickyMobileBar />

        {/* Desktop Floating WhatsApp Button (>= 768px) */}
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}
