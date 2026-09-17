import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const FacebookIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 0 0 0-3.3 1.65 1.65 0 0 0 0 3.3m1.39 9.74v-8.37H5.07v8.37h2.78z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"/>
  </svg>
);

export default function Footer({ setActivePage }) {
  const handleNav = (id) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="fisco-footer">
      <div className="container fisco-footer-inner">
        <div className="footer-grid-3">
          {/* Column 1: Contacts */}
          <div className="footer-column">
            <h4 className="footer-col-title">
              <span className="footer-title-dash">—</span> Contacts
            </h4>
            <ul className="footer-info-list">
              <li className="footer-info-item">
                <span className="footer-icon-yellow">
                  <MapPin size={18} />
                </span>
                <span>Cotonou, Bénin</span>
              </li>
              <li className="footer-info-item">
                <span className="footer-icon-yellow">
                  <Phone size={18} />
                </span>
                <a href="tel:+2290167578494">(+229) 01 67 57 84 94</a>
              </li>
              <li className="footer-info-item">
                <span className="footer-icon-yellow">
                  <Mail size={18} />
                </span>
                <a href="mailto:fisco2026@gmail.com">fisco2026@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Column 2: Liens utiles */}
          <div className="footer-column">
            <h4 className="footer-col-title">
              <span className="footer-title-dash">—</span> Lien utiles
            </h4>
            <ul className="footer-nav-list">
              {[
                { id: 'accueil', label: 'Accueil' },
                { id: 'editions', label: 'Editions' },
                { id: 'actualites', label: 'Actualités' },
                { id: 'apropos', label: 'A propos' },
                { id: 'contacts', label: 'Contacts' }
              ].map(item => (
                <li key={item.id} className="footer-nav-item">
                  <button 
                    className="footer-nav-btn"
                    onClick={() => handleNav(item.id)}
                  >
                    <span className="triangle-bullet">▶</span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Suivez-nous */}
          <div className="footer-column">
            <h4 className="footer-col-title">
              <span className="footer-title-dash">—</span> Suivez-nous
            </h4>
            <p className="footer-about-text">
              Festival international de cotonou est dédiée à la promotion du leadership féminin, au bien-être des femmes africaines et à la lutte contre les violences basées sur le genre.<sup>2</sup>
            </p>
            <div className="footer-social-row">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="YouTube">
                <YoutubeIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
