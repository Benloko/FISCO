import React from 'react';
import { MapPin, Plus, ArrowRight } from 'lucide-react';
import './HomePage.css';

export default function HomePage({ setActivePage, onOpenPartnerModal }) {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  // Défilement automatique toutes les 10 secondes (10s)
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const scrollToPresentation = () => {
    const el = document.getElementById('presentation-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGoToCandidature = () => {
    if (setActivePage) {
      setActivePage('candidature');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="home-exact-page fade-in">
      {/* 1. HERO SECTION - CAROUSEL AUTO HORIZONTAL 2 SLIDES (10s) */}
      <section className="home-hero-section">
        <div 
          className="home-hero-slider-track"
          style={{ transform: `translateX(-${currentSlide * 50}%)` }}
        >
          {/* SLIDE 1 : Logo FISCO + Titre + Bouton En savoir plus */}
          <div className="home-hero-slide-item">
            <div className="home-hero-bg-layer">
              <img 
                src="/assets/images/hero-bg.jpg" 
                alt="Sculpture sur pierre au marteau" 
                className="home-hero-bg-img"
              />
              <div className="home-hero-overlay" />
            </div>

            <div className="container home-hero-content">
              <div className="hero-logo-badge">
                <img 
                  src="/assets/images/fisco-logo-hero.png" 
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
                className="btn-en-savoir-plus-hero"
                onClick={scrollToPresentation}
                type="button"
                aria-label="En savoir plus"
              >
                <span>En savoir plus</span>
              </button>
            </div>
          </div>

          {/* SLIDE 2 : Donnez vie à vos œuvres + Candidatez + Appel à candidature */}
          <div className="home-hero-slide-item">
            <div className="home-hero-bg-layer">
              <img 
                src="/assets/images/sculptor-chisel.jpg" 
                alt="Candidatez au Festival International de Sculpture de Cotonou" 
                className="home-hero-bg-img"
              />
              <div className="home-hero-overlay home-hero-overlay-dark" />
            </div>

            <div className="container home-hero-content home-hero-content-candidature">
              <p className="hero-slide2-tagline">
                Donnez vie à vos œuvres au cœur de l'Afrique
              </p>

              <h2 className="hero-slide2-title">
                Candidatez au Festival International de Sculpture de Cotonou.
              </h2>

              <button 
                className="btn-appel-candidature-hero"
                onClick={handleGoToCandidature}
                type="button"
                aria-label="Appel à candidature"
              >
                <span>Appel à candidature</span>
              </button>
            </div>
          </div>
        </div>

        {/* Indicateurs de carousel (Dots cliquables) */}
        <div className="hero-carousel-dots">
          <button 
            type="button"
            className={`hero-carousel-dot ${currentSlide === 0 ? 'is-active' : ''}`}
            onClick={() => setCurrentSlide(0)}
            aria-label="Aller au slide 1"
          />
          <button 
            type="button"
            className={`hero-carousel-dot ${currentSlide === 1 ? 'is-active' : ''}`}
            onClick={() => setCurrentSlide(1)}
            aria-label="Aller au slide 2"
          />
        </div>
      </section>

      {/* 2. BIENVENUE & MOT DU DIRECTEUR (Screenshot 2) */}
      <section id="presentation-section" className="section-bienvenue">
        <div className="bienvenue-container">
          <div className="bienvenue-grid">
            {/* Colonne gauche : Texte éditorial avec lettrine B et signature */}
            <div className="bienvenue-text-col">
              <div className="bienvenue-body">
                <span className="big-dropcap">B</span>
                <p className="bienvenue-paragraph">
                  ienvenue Le Centre de Gestion Patrimoniale CeGPA a la grande mission d’accompagner ses clients dans la préservation, l’optimisation et la transmission de leur patrimoine. À travers des services de conseil, d’analyse et de suivi personnalisés. il œuvre à sécuriser les actifs, à améliorer leur rentabilité et à proposer des stratégies adaptée proposer des stratégies adaptée proposer des stratégies adaptée adaptées des stratégies adaptée.À travers des services de conseil, d’analyse et de suivi personnalisés, il œuvre à sécuriser les actifs, à améliorer leur rentabilité et à propose
                </p>
              </div>

              <div className="director-signature-block">
                <h3 className="director-name">Cyr SEHOU-HOUINDO</h3>
                <p className="director-title">Artiste visuel, Directeur du FISCO</p>
              </div>
            </div>

            {/* Colonne droite : Photo portrait du Directeur */}
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
        </div>
      </section>

      {/* 3. BANNIÈRE ACTUALITÉ RÉCENTE (Screenshot 3) */}
      <section className="section-coming-soon-banner">
        <div className="coming-soon-banner-card">
          {/* Gauche : Affiche Officielle sans coupure */}
          <div className="coming-soon-poster-col">
            <img 
              src="/assets/images/coming-soon-poster.jpg" 
              alt="Affiche Officielle FISCO" 
              className="coming-soon-poster-img"
            />
          </div>

          {/* Droite : Informations de l'actualité récente */}
          <div className="coming-soon-info-col">
            <div className="recent-news-badge">
              Actualité récente
            </div>

            <h2 className="recent-news-title">
              Célébration du 8 mars en différé : un engagement commun
            </h2>

            <p className="recent-news-text">
              Le FISCO met à l'honneur les créatrices et sculptrices contemporaines à travers une programmation artistique engagée. Découvrez les ateliers de transmission, les démonstrations de taille directe et les expositions thématiques qui célèbrent la place essentielle des femmes dans les arts plastiques.
            </p>

            <button 
              className="btn-voir-plus-link"
              onClick={() => {
                setActivePage('actualites');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              type="button"
              aria-label="Voir les actualités"
            >
              Voir plus &gt;&gt;
            </button>
          </div>
        </div>
      </section>

      {/* 4. AUTRES ACTUALITÉS (Fidèle à Figma) */}
      <section className="section-autres-actualites">
        <div className="container">
          <h2 className="autres-actualites-heading">Autres actualités</h2>

          <div className="autres-actualites-grid">
            {/* Carte 1 */}
            <div 
              className="news-dark-card"
              onClick={() => {
                setActivePage('actualite-detail', 1);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              role="button"
              tabIndex={0}
            >
              <div className="news-card-media">
                <img 
                  src="/assets/images/expo-gallery.jpg" 
                  alt="Célébration du 8 mars en différé" 
                  className="news-card-img"
                />
                <div className="news-card-media-overlay" />
                <span className="badge-date-top">8 Mars</span>
              </div>
              <div className="news-card-body">
                <h3 className="news-card-title">Célébration du 8 mars en différé</h3>
                <p className="news-card-text">
                  Une exposition qui explore les blessures invisibles qui marquent œuvres...
                </p>
                <span className="news-card-link">
                  En savoir plus &gt;&gt;
                </span>
              </div>
            </div>

            {/* Carte 2 */}
            <div 
              className="news-dark-card"
              onClick={() => {
                setActivePage('actualite-detail', 2);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              role="button"
              tabIndex={0}
            >
              <div className="news-card-media">
                <img 
                  src="/assets/images/article-featured-expo.jpg" 
                  alt="Célébration du 8 mars en différé" 
                  className="news-card-img"
                />
                <div className="news-card-media-overlay" />
                <span className="badge-date-top">3 Mars</span>
              </div>
              <div className="news-card-body">
                <h3 className="news-card-title">Célébration du 8 mars en différé</h3>
                <p className="news-card-text">
                  Une exposition qui explore les blessures invisibles qui marquent œuvres...
                </p>
                <span className="news-card-link">
                  En savoir plus &gt;&gt;
                </span>
              </div>
            </div>

            {/* Carte 3 : Action Voir Plus */}
            <div 
              className="news-dark-card card-voir-plus-action"
              onClick={() => {
                setActivePage('actualites');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              role="button"
              tabIndex={0}
              aria-label="Accéder à toutes les actualités"
            >
              <div className="circle-plus-btn">
                <Plus size={44} strokeWidth={3} />
              </div>
              <span className="voir-plus-big-text">Voir plus</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PARTENAIRE SECTION (Fidèle à Figma : titre Partenaire, logos centrés sur fond blanc) */}
      <section className="section-partenaire">
        <div className="container">
          <h2 className="partenaire-heading">Partenaire</h2>

          <div className="partenaire-logos-row">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="partenaire-logo-item">
                <img 
                  src="/assets/images/logo.png" 
                  alt="Logo Partenaire Officiel FISCO" 
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
