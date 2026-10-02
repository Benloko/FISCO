import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, ArrowRight, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { EDITIONS_DATA, CURRENT_EDITION } from '../data/editionsData';
import './EditionsPage.css';

export default function EditionsPage({ setActivePage, onOpenPartnerModal, initialEditionId }) {
  // Par défaut null -> Affichage de la liste/grille de cartes des éditions (comme Actualités)
  const [selectedEditionId, setSelectedEditionId] = useState(initialEditionId || null);

  // Synchronise si initialEditionId change
  useEffect(() => {
    if (initialEditionId) {
      setSelectedEditionId(initialEditionId);
    }
  }, [initialEditionId]);

  // Récupération de l'édition sélectionnée (si une édition est choisie)
  const currentEdition = selectedEditionId
    ? EDITIONS_DATA.find((e) => e.id === selectedEditionId) || CURRENT_EDITION
    : null;

  // Carrousel des moments forts (défilement simultané par page de 2 images)
  const highlights = currentEdition?.highlights || [];
  const [highlightPage, setHighlightPage] = useState(0);
  const [visibleHighlights, setVisibleHighlights] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 720) {
        setVisibleHighlights(1);
      } else {
        setVisibleHighlights(2);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(highlights.length / visibleHighlights);

  // Vitesse légèrement augmentée (2.4s) et défilement immédiat
  useEffect(() => {
    if (totalPages <= 1) return;
    const interval = setInterval(() => {
      setHighlightPage((prev) => (prev + 1) % totalPages);
    }, 2400);
    return () => clearInterval(interval);
  }, [totalPages]);

  const handlePrevHighlight = () => {
    setHighlightPage((prev) => (prev <= 0 ? totalPages - 1 : prev - 1));
  };

  const handleNextHighlight = () => {
    setHighlightPage((prev) => (prev + 1) % totalPages);
  };

  // Liste des autres éditions (pour le sélecteur du bas)
  const otherEditions = currentEdition
    ? EDITIONS_DATA.filter((e) => e.id !== currentEdition.id)
    : [];

  const handleSelectEdition = (editionId) => {
    setSelectedEditionId(editionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedEditionId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ========================================================
  // 1. VUE LISTE DES ÉDITIONS (CARTES COMME DANS ACTUALITÉS)
  // ========================================================
  if (!selectedEditionId || !currentEdition) {
    return (
      <div className="editions-page-root fade-in">
        {/* 1. HERO BANNER - CATALOGUE DES ÉDITIONS */}
        <section className="editions-hero-section">
          <div className="editions-hero-bg">
            <img
              src="/assets/images/sculptor-chisel.jpg"
              alt="Sculpture contemporaine FISCO"
              className="editions-hero-bg-img"
            />
            <div className="editions-hero-overlay" />
          </div>

          <div className="container editions-hero-content">
            <h1 className="editions-hero-title">Edition</h1>
            <p className="editions-hero-desc">
              Explorez l'histoire, les œuvres monumentales et les temps forts du Festival International de Sculpture de Cotonou.
            </p>
          </div>
        </section>

        {/* 2. GRILLE DES CARTES D'ÉDITIONS (FORMAT STYLE ACTUALITÉS) */}
        <section className="editions-list-section">
          <div className="container">
            <div className="editions-cards-grid">
              {EDITIONS_DATA.map((edition) => (
                <article
                  key={edition.id}
                  className="edition-dark-card"
                  onClick={() => handleSelectEdition(edition.id)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Accéder à la ${edition.number}`}
                >
                  {/* Photo de couverture de l'édition */}
                  <div className="edition-dark-card-media">
                    <img
                      src={edition.heroBg}
                      alt={edition.number}
                      className="edition-dark-card-img"
                      loading="lazy"
                    />
                    <span className={`edition-card-badge ${edition.isCurrent ? 'is-current' : 'is-retro'}`}>
                      {edition.badge}
                    </span>
                  </div>

                  {/* Corps de la carte avec métadonnées et descriptif */}
                  <div className="edition-dark-card-body">
                    <div className="edition-card-header-row">
                      <h2 className="edition-dark-card-title">{edition.number}</h2>
                      <span className="edition-card-year-tag">{edition.year}</span>
                    </div>

                    <div className="edition-card-meta-list">
                      <span className="edition-meta-item">
                        <Calendar size={14} className="edition-meta-icon" />
                        <span>{edition.dates}</span>
                      </span>
                      <span className="edition-meta-item">
                        <MapPin size={14} className="edition-meta-icon" />
                        <span>{edition.location}</span>
                      </span>
                    </div>

                    <p className="edition-dark-card-theme">
                      {edition.theme}
                    </p>

                    <p className="edition-dark-card-excerpt">
                      {edition.summary}
                    </p>

                    {/* Footer cliquable */}
                    <div className="edition-dark-card-footer">
                      <span className="edition-dark-card-link">
                        <span>Découvrir l'édition</span>
                        <ArrowRight size={14} className="edition-arrow-icon" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  // ========================================================
  // 2. VUE DÉTAILLÉE DE L'ÉDITION SÉLECTIONNÉE
  // ========================================================
  return (
    <div className="editions-page-root fade-in">
      {/* 1. HERO BANNER DE L'ÉDITION SÉLECTIONNÉE */}
      <section className="editions-hero-section">
        <div className="editions-hero-bg">
          <img
            src={currentEdition.heroBg}
            alt={`Sculpture et art contemporain - ${currentEdition.number}`}
            className="editions-hero-bg-img"
          />
          <div className="editions-hero-overlay" />
        </div>

        <div className="container editions-hero-content">
          <h1 className="editions-hero-title">{currentEdition.number} - {currentEdition.year}</h1>
          <p className="editions-hero-subtitle">
            <MapPin size={16} className="editions-pin-icon" />
            {currentEdition.location}
          </p>
          <span className="editions-hero-date">
            <Calendar size={15} className="editions-cal-icon" />
            {currentEdition.dates}
          </span>
        </div>
      </section>

      {/* 2. CONTENU PRINCIPAL DE L'ÉDITION */}
      <section className="editions-main-section">
        <div className="editions-container">

          {/* Bouton de retour */}
          <div className="editions-back-nav">
            <button
              type="button"
              onClick={handleBackToList}
              className="btn-back-clean"
            >
              <ArrowLeft size={18} />
              <span>Retour</span>
            </button>
          </div>
          
          {/* Titre Thématique principal */}
          <h2 className="editions-theme-title">
            {currentEdition.theme}
          </h2>

          {/* Corps de l'article façon blog éditorial avec texte fluide enveloppant */}
          <div className="editions-article-body-flow">
            {/* 1ère Photo intégrée à droite */}
            <div className="editions-flow-media-right">
              <img
                src={currentEdition.split1.img}
                alt={currentEdition.split1.imgAlt}
                className="editions-flow-img"
              />
            </div>

            {currentEdition.split1.paragraphs.map((p, idx) => (
              <p key={`p1-${idx}`} className="editions-paragraph">
                {p}
              </p>
            ))}

            <p className="editions-paragraph">
              {currentEdition.fullParagraph1}
            </p>

            {/* 2ème Photo intégrée à gauche */}
            <div className="editions-flow-media-left">
              <img
                src={currentEdition.split2.img}
                alt={currentEdition.split2.imgAlt}
                className="editions-flow-img"
              />
            </div>

            {currentEdition.split2.paragraphs.map((p, idx) => (
              <p key={`p2-${idx}`} className="editions-paragraph">
                {p}
              </p>
            ))}

            <p className="editions-paragraph">
              {currentEdition.fullParagraph2}
            </p>

            <div style={{ clear: 'both' }} />
          </div>

          {/* Section 3 : Nom de l'exposition & Visite Virtuelle VR */}
          <h3 className="editions-section-heading">{currentEdition.expoTitle}</h3>
          <a
            href={currentEdition.virtualExpoUrl || 'https://www.google.com'}
            target="_blank"
            rel="noopener noreferrer"
            className="editions-vr-banner"
            aria-label={currentEdition.virtualExpoText || "Visiter l'exposition virtuelle"}
          >
            <img
              src={currentEdition.expoImage}
              alt={`Aperçu de ${currentEdition.expoTitle}`}
              className="editions-vr-bg"
            />
            
            {/* Overlay interactif avec changement d'état au survol */}
            <div className="editions-vr-overlay">
              {/* État au survol : Texte "Visiter l'exposition virtuelle" */}
              <div className="editions-vr-hover-box">
                <span className="editions-vr-hover-text">
                  {currentEdition.virtualExpoText || "Visiter l'exposition virtuelle"}
                </span>
              </div>
            </div>
          </a>

          {/* Section 4 : Moments forts du festival (Carrousel Défilant Automatique par Paires) */}
          <div className="editions-highlights-header">
            <h3 className="editions-section-heading">Moments forts du festival</h3>
            {totalPages > 1 && (
              <div className="editions-carousel-nav-arrows">
                <button
                  type="button"
                  className="carousel-arrow-btn"
                  onClick={handlePrevHighlight}
                  aria-label="Moments précédents"
                >
                  <ChevronLeft size={19} />
                </button>
                <button
                  type="button"
                  className="carousel-arrow-btn"
                  onClick={handleNextHighlight}
                  aria-label="Moments suivants"
                >
                  <ChevronRight size={19} />
                </button>
              </div>
            )}
          </div>

          <div className="editions-highlights-carousel-wrapper">
            <div
              className="editions-highlights-track"
              style={{
                transform: `translateX(-${highlightPage * 100}%)`
              }}
            >
              {highlights.map((highlight) => (
                <div
                  key={highlight.id}
                  className="editions-highlight-slide"
                  style={{ flex: `0 0 ${100 / visibleHighlights}%` }}
                >
                  <div className="editions-highlight-card">
                    <img
                      src={highlight.image}
                      alt={highlight.title}
                      className="editions-highlight-img"
                      loading="lazy"
                    />
                    <div className="editions-highlight-overlay">
                      <div className="editions-highlight-content">
                        <span className="editions-highlight-text">{highlight.title}</span>
                        {highlight.subtitle && (
                          <span className="editions-highlight-sub">{highlight.subtitle}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots de pagination par page */}
            {totalPages > 1 && (
              <div className="editions-carousel-dots">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`editions-dot ${highlightPage === idx ? 'is-active' : ''}`}
                    onClick={() => setHighlightPage(idx)}
                    aria-label={`Aller au groupe ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
