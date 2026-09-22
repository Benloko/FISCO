import React from 'react';
import { MapPin, Plus, ArrowRight } from 'lucide-react';
import './HomePage.css';

export default function HomePage({ setActivePage, onOpenPartnerModal }) {
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
          {/* Logo officiel Figma (asset e02612019e55f24fb2669278f4749ee2edc83dc4) sans contours superflus */}
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
            className="btn-appel-candidature"
            onClick={handleGoToCandidature}
            type="button"
            aria-label="Accéder à l'appel à candidature en cours"
          >
            <span className="hero-btn-live-dot" />
            <span>Appel à Candidature en cours</span>
            <ArrowRight size={17} className="hero-btn-arrow" />
          </button>
        </div>
      </section>

      {/* 2. BIENVENUE & MOT DU DIRECTEUR (Screenshot 2) */}
      <section id="presentation-section" className="section-bienvenue">
        <div className="container bienvenue-grid">
          {/* Colonne gauche : Texte éditorial avec lettrine B et signature */}
          <div className="bienvenue-text-col">
            <div className="bienvenue-body">
              <span className="big-dropcap">B</span>
              <p className="bienvenue-paragraph">
                ienvenue sur l’espace officiel du Festival International de Sculpture de Cotonou (FISCO). Notre festival est né d’une volonté affirmée : célébrer la matière brute, honorer les savoir-faire ancestraux et offrir une tribune d’exception aux créateurs contemporains africains et internationaux. À travers nos résidences de création en direct, nos expositions monumentales et nos ateliers de transmission auprès des jeunes et des femmes sculptrices, nous œuvrons à inscrire durablement la sculpture au cœur de la vie culturelle et du patrimoine de notre pays. Je vous invite à explorer nos éditions, nos actualités et à prendre part à cette aventure humaine et artistique.
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
              CÉLÉBRATION DU 8 MARS EN DIFFÉRÉ : UN ENGAGEMENT COMMUN
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
              <span>Voir plus</span>
              <ArrowRight size={16} className="btn-voir-arrow" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. AUTRES ACTUALITÉS */}
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
              </div>
              <div className="news-card-body">
                <h3 className="news-card-title">Célébration du 8 mars en différé</h3>
                <p className="news-card-text">
                  Une exposition qui explore les blessures invisibles et le talent des sculptrices béninoises...
                </p>
                <span className="news-card-link">
                  <span>En savoir plus</span>
                  <ArrowRight size={14} />
                </span>
              </div>
            </div>

            {/* Carte 2 avec badges */}
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
                  alt="Résidence de création monumentale" 
                  className="news-card-img"
                />
                <span className="badge-date-top">3 Mar</span>
                <span className="badge-location-bottom">
                  <MapPin size={13} className="pin-icon" />
                  <span>Calavi / Zogbadjè</span>
                </span>
              </div>
              <div className="news-card-body">
                <h3 className="news-card-title">Résidence de création monumentale</h3>
                <p className="news-card-text">
                  Immersion au cœur des ateliers de sculpture sur pierre et bronze en direct à Ouidah...
                </p>
                <span className="news-card-link">
                  <span>En savoir plus</span>
                  <ArrowRight size={14} />
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
                <Plus size={42} strokeWidth={2.5} />
              </div>
              <span className="voir-plus-big-text">Voir plus</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PARTENAIRE SECTION (Photos partenaires agrandies & présentées de façon pro) */}
      <section className="section-partenaire">
        <div className="container">
          <h2 className="partenaire-heading">Partenaires</h2>

          <div className="partenaire-logos-row">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="partenaire-logo-card">
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
