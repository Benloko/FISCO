import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const FacebookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 0 0 0-3.3 1.65 1.65 0 0 0 0 3.3m1.39 9.74v-8.37H5.07v8.37h2.78z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"/>
  </svg>
);

export default function Navbar({ activePage, setActivePage, onOpenPartnerModal }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'editions', label: 'Editions' },
    { id: 'actualites', label: 'Actualités' },
    { id: 'apropos', label: 'A propos' },
    { id: 'contacts', label: 'Contacts' }
  ];

  const handleNav = (id) => {
    setActivePage(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fisco-header">
      <div className="container fisco-header-inner">
        {/* Left: Official Logo */}
        <button 
          className="header-logo-btn" 
          onClick={() => handleNav('accueil')}
          aria-label="FISCO Accueil"
        >
          <img 
            src="/assets/images/logo.png" 
            alt="Festival International de Sculpture de Cotonou" 
            className="header-logo-img"
          />
        </button>

        {/* Center: Navigation Links */}
        <nav className="header-nav-desktop">
          <ul className="header-nav-list">
            {navItems.map(item => (
              <li key={item.id}>
                <button
                  className={`header-nav-link ${(activePage === item.id || (item.id === 'actualites' && activePage === 'actualite-detail')) ? 'is-active' : ''}`}
                  onClick={() => handleNav(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: Social Media + Devenir Partenaire Button */}
        <div className="header-actions-desktop">
          <div className="header-social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-circle-btn" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-circle-btn" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-circle-btn" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-circle-btn" aria-label="YouTube">
              <YoutubeIcon />
            </a>
          </div>

          <button 
            className={`btn-devenir-partenaire ${activePage === 'partenaire' ? 'is-active-page' : ''}`}
            onClick={() => handleNav('partenaire')}
          >
            Devenir Partenaire
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="header-burger-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="header-mobile-drawer fade-in">
          <ul className="mobile-nav-list">
            {navItems.map(item => (
              <li key={item.id}>
                <button
                  className={`mobile-nav-link ${activePage === item.id ? 'is-active' : ''}`}
                  onClick={() => handleNav(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="mobile-actions-box">
            <button 
              className={`btn-devenir-partenaire btn-block ${activePage === 'partenaire' ? 'is-active-page' : ''}`}
              onClick={() => {
                setMobileOpen(false);
                handleNav('partenaire');
              }}
            >
              Devenir Partenaire
            </button>

            <div className="mobile-social-row">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-circle-btn" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-circle-btn" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-circle-btn" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-circle-btn" aria-label="YouTube">
                <YoutubeIcon />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
