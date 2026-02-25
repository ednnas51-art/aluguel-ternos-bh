/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

// --- Scroll to top on route change ---
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// --- SEO and Schema Wrapper ---
function SEOWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Schema.org LocalBusiness Data
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Aluguel de Ternos BH Elegance",
      "image": "https://picsum.photos/seed/suit/800/600",
      "@id": "",
      "url": window.location.origin,
      "telephone": "+5531999999999",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua da Elegância, 123",
        "addressLocality": "Belo Horizonte",
        "addressRegion": "MG",
        "postalCode": "30100-000",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -19.9167,
        "longitude": -43.9333
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "19:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "14:00"
        }
      ],
      "sameAs": [
        "https://facebook.com/eleganceternosbh",
        "https://instagram.com/eleganceternosbh"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <>{children}</>;
}

export default function App() {
  return (
    <Router>
      <SEOWrapper>
        <ScrollToTop />
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-primary/20 selection:text-primary flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servicos" element={<Services />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/contato" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </SEOWrapper>
    </Router>
  );
}
