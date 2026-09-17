import React from 'react';
import { MapPin, Plus } from 'lucide-react';
import './HomePage.css';

export default function HomePage({ setActivePage, onOpenPartnerModal }) {
  const scrollToPresentation = () => {
    const el = document.getElementById('presentation-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-exact-page fade-in">
      {/* 1. HERO SECTION (Screenshot 1) */}
      <section className="home-hero-section">
        <div className="home-hero-bg-layer">
          <img 
            src="/assets/images/hero-bg.jpg" 
            alt="Sculpture sur pierre au marteau" 
            className="home-hero-bg-img"
          />
          <div className="home-hero-overlay" />
        </div>

        <div className="container home-hero-content">
          {/* Logo Badge épuré et fidèle à la maquette originale */}
          <div className="hero-logo-badge">
            <img 
              src="/assets/images/hero-badge-retina.png" 
              alt="Logo Officiel FISCO" 
              className="hero-badge-logo-img"
            />
          </div>

          <h1 className="hero-brand-name">FISCO</h1>
          <p className="hero-brand-subtitle">
            FESTIVAL INTERNATIONAL DE SCULPTURE<br />
            DE COTONOU
          </p>

          <button 
            className="btn-en-savoir-plus"
            onClick={scrollToPresentation}
          >
            En savoir plus
          </button>
        </div>
      </section>

      {/* 2. BIENVENUE & MOT DU DIRECTEUR (Screenshot 1 & 2) */}
      <section id="presentation-section" className="section-bienvenue">
        <div className="container bienvenue-grid">
          {/* Left Column: Text with Drop Cap B & Director Name */}
          <div className="bienvenue-text-col">
            <div className="bienvenue-body">
              <span className="big-dropcap">B</span>
              <p className="bienvenue-paragraph">
                ienvenue Le Centre de Gestion Patrimoniale CeGPA a la grande mission d’accompagner ses clients dans la préservation, l’optimisation et la transmission de leur patrimoine. À travers des services de conseil, d’analyse et de suivi personnalisés. il œuvre à sécuriser les actifs, à améliorer leur rentabilité et à proposer des stratégies adaptée proposer des stratégies adaptée proposer des stratégies adaptée adaptée des stratégies adaptée.À travers des services de conseil, d’analyse et de suivi personnalisés, il œuvre à sécuriser les actifs, à améliorer leur rentabilité et à propose
              </p>
            </div>

            <div className="director-signature-block">
              <h3 className="director-name">Cyr SEHOU-HOUINDO</h3>
              <p className="director-title">Artiste visuel, Directeur du FISCO</p>
            </div>
          </div>

          {/* Right Column: Portrait Photo */}
          <div className="bienvenue-photo-col">
            <div className="director-photo-card">
              <img 
                src="/assets/images/president.jpg" 
                alt="Cyr SEHOU-HOUINDO - Directeur du FISCO" 
                className="director-photo-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. BANNIÈRE ACTUALITÉ RÉCENTE - COMING SOON (Screenshot 2) */}
      <section className="section-coming-soon-banner">
        <div className="coming-soon-banner-card">
          {/* Left: Coming Soon Poster */}
          <div className="coming-soon-poster-col">
            <img 
              src="/assets/images/coming-soon-poster.jpg" 
              alt="Affiche Officielle FISCO Coming Soon" 
              className="coming-soon-poster-img"
            />
          </div>

          {/* Right: Actualité récente Info */}
          <div className="coming-soon-info-col">
            <div className="recent-news-badge">
              Actualité récente
            </div>

            <h2 className="recent-news-title">
              CELEBRATION DU 8 MARS EN DIFFERE : UN ENGAGEMENT COMMUN
            </h2>

            <p className="recent-news-text">
              Le Centre de Gestion Patrimoniale CeGPA a pour mission d’accompagner ses clients dans la préservation, l’optimisation et la transmission de leur patrimoine. À travers des services de conseil, d’analyse et de suivi personnalisés
            </p>

            <button 
              className="btn-voir-plus-link"
              onClick={() => {
                setActivePage('actualites');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Voir plus &gt;&gt;
            </button>
          </div>
        </div>
      </section>

      {/* 4. AUTRES ACTUALITÉS (Screenshot 3) */}
      <section className="section-autres-actualites">
        <div className="container">
          <h2 className="autres-actualites-heading">Autres actualités</h2>

          <div className="autres-actualites-grid">
            {/* Card 1 */}
            <div className="news-dark-card">
              <div className="news-card-media">
                <img 
                  src="/assets/images/expo-gallery.jpg" 
                  alt="Célébration du 8 mars" 
                  className="news-card-img"
                />
              </div>
              <div className="news-card-body">
                <h3 className="news-card-title">Célébration du 8 mars en différé</h3>
                <p className="news-card-text">
                  Une exposition qui explore les blessures invisibles qui marquent œuvres...
                </p>
                <button 
                  className="news-card-link"
                  onClick={() => {
                    setActivePage('actualites');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  En savoir plus &gt;&gt;
                </button>
              </div>
            </div>

            {/* Card 2 with Badges */}
            <div className="news-dark-card">
              <div className="news-card-media">
                <img 
                  src="/assets/images/expo-gallery.jpg" 
                  alt="Célébration du 8 mars" 
                  className="news-card-img"
                />
                <span className="badge-date-top">3 Mar</span>
                <span className="badge-location-bottom">
                  <MapPin size={13} className="pin-icon" />
                  <span>Calavi / Zogbadjè</span>
                </span>
              </div>
              <div className="news-card-body">
                <h3 className="news-card-title">Célébration du 8 mars en différé</h3>
                <p className="news-card-text">
                  Une exposition qui explore les blessures invisibles qui marquent œuvres...
                </p>
                <button 
                  className="news-card-link"
                  onClick={() => {
                    setActivePage('actualites');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  En savoir plus &gt;&gt;
                </button>
              </div>
            </div>

            {/* Card 3: Big Voir Plus with + Button */}
            <div 
              className="news-dark-card card-voir-plus-action"
              onClick={() => {
                setActivePage('actualites');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="circle-plus-btn">
                <Plus size={44} strokeWidth={3} />
              </div>
              <span className="voir-plus-big-text">Voir plus</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PARTENAIRE SECTION (Screenshot 3 & 4) */}
      <section className="section-partenaire">
        <div className="container">
          <h2 className="partenaire-heading">Partenaire</h2>

          <div className="partenaire-logos-row">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="partenaire-logo-item">
                <img 
                  src="/assets/images/logo.png" 
                  alt="Logo Partenaire FISCO" 
                  className="partenaire-emblem-img"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
