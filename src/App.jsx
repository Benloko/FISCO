import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PartnerModal from './components/PartnerModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import EditionsPage from './pages/EditionsPage';
import ActualitesPage from './pages/ActualitesPage';
import ActualiteDetailPage from './pages/ActualiteDetailPage';
import PartenairePage from './pages/PartenairePage';

export default function App() {
  const [activePage, setActivePage] = useState('accueil');
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);

  // Sync hash routing if user uses back/forward buttons
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['accueil', 'editions', 'actualites', 'actualite-detail', 'apropos', 'contacts', 'partenaire'].includes(hash)) {
        setActivePage(hash);
      }
    };
    if (window.location.hash) {
      handleHash();
    }
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handlePageChange = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Exact Header matching Screenshot 1 */}
      <Navbar 
        activePage={activePage} 
        setActivePage={handlePageChange} 
        onOpenPartnerModal={() => handlePageChange('partenaire')}
      />

      {/* Main Page Area */}
      <main style={{ flexGrow: 1 }}>
        {activePage === 'accueil' && (
          <HomePage 
            setActivePage={handlePageChange} 
            onOpenPartnerModal={() => handlePageChange('partenaire')}
          />
        )}
        {activePage === 'apropos' && (
          <AboutPage 
            setActivePage={handlePageChange}
            onOpenPartnerModal={() => handlePageChange('partenaire')}
          />
        )}
        {activePage === 'editions' && (
          <EditionsPage 
            setActivePage={handlePageChange}
            onOpenPartnerModal={() => handlePageChange('partenaire')}
          />
        )}
        {activePage === 'actualites' && (
          <ActualitesPage 
            setActivePage={handlePageChange}
            onOpenPartnerModal={() => handlePageChange('partenaire')}
          />
        )}
        {activePage === 'actualite-detail' && (
          <ActualiteDetailPage 
            onBackToList={() => handlePageChange('actualites')}
            setActivePage={handlePageChange}
            onOpenPartnerModal={() => handlePageChange('partenaire')}
          />
        )}
        {activePage === 'contacts' && (
          <ContactPage />
        )}
        {activePage === 'partenaire' && (
          <PartenairePage />
        )}
      </main>

      {/* Exact Footer matching Screenshots 3 & 4 */}
      <Footer setActivePage={handlePageChange} />

      {/* Devenir Partenaire Registration Modal */}
      <PartnerModal 
        isOpen={partnerModalOpen}
        onClose={() => setPartnerModalOpen(false)}
      />
    </div>
  );
}
