import React, { useState, useEffect } from 'react';
import { Play, X, MapPin, Calendar, ArrowRight, ArrowLeft } from 'lucide-react';
import { EDITIONS_DATA, CURRENT_EDITION } from '../data/editionsData';
import './EditionsPage.css';

export default function EditionsPage({ setActivePage, onOpenPartnerModal, initialEditionId }) {
  // Par défaut null -> Affichage de la liste/grille de cartes des éditions (comme Actualités)
  const [selectedEditionId, setSelectedEditionId] = useState(initialEditionId || null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

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
            <h1 className="editions-hero-title">Nos Éditions</h1>
            <p className="editions-hero-desc">
              Explorez l'histoire, les œuvres monumentales et les temps forts de chaque édition du Festival International de Sculpture de Cotonou.
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
          <span className={`editions-edition-status-badge ${currentEdition.isCurrent ? 'is-current' : 'is-archive'}`}>
            {currentEdition.badge}
          </span>
          <h1 className="editions-hero-title">{currentEdition.number}</h1>
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

          {/* Bouton de retour à la liste des éditions */}
          <div className="editions-back-nav">
            <button
              type="button"
              onClick={handleBackToList}
              className="btn-back-clean"
            >
              <ArrowLeft size={18} />
              <span>Retour à toutes les éditions</span>
            </button>
          </div>
          
          {/* Titre Thématique principal */}
          <h2 className="editions-theme-title">
            {currentEdition.theme}
          </h2>

          {/* Bloc 1 : Texte à gauche + Photo à droite */}
          <div className="editions-split-block">
            <div className="editions-split-text">
              {currentEdition.split1.paragraphs.map((p, idx) => (
                <p key={idx} className="editions-paragraph">
                  {p}
                </p>
              ))}
            </div>
            <div className="editions-split-img-box">
              <img
                src={currentEdition.split1.img}
                alt={currentEdition.split1.imgAlt}
                className="editions-split-img"
              />
            </div>
          </div>

          {/* Paragraphe pleine largeur */}
          <p className="editions-paragraph">
            {currentEdition.fullParagraph1}
          </p>

          {/* Bloc 2 : Photo à gauche + Texte à droite */}
          <div className="editions-split-block reverse-on-desktop">
            <div className="editions-split-img-box">
              <img
                src={currentEdition.split2.img}
                alt={currentEdition.split2.imgAlt}
                className="editions-split-img"
              />
            </div>
            <div className="editions-split-text">
              {currentEdition.split2.paragraphs.map((p, idx) => (
                <p key={idx} className="editions-paragraph">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Paragraphe pleine largeur de conclusion */}
          <p className="editions-paragraph">
            {currentEdition.fullParagraph2}
          </p>

          {/* Section 3 : Nom de l'exposition & Vidéo teaser */}
          <h3 className="editions-section-heading">{currentEdition.expoTitle}</h3>
          <div className="editions-video-banner">
            <img
              src={currentEdition.expoImage}
              alt={`Aperçu de ${currentEdition.expoTitle}`}
              className="editions-video-bg"
            />
            <div className="editions-video-overlay">
              <button
                type="button"
                className="editions-play-btn"
                onClick={() => setVideoModalOpen(true)}
                aria-label="Lire la vidéo officielle de l'exposition"
              >
                <Play size={34} fill="#2A1405" color="#2A1405" />
              </button>
            </div>
          </div>

          {/* Section 4 : Moments forts du festival */}
          <h3 className="editions-section-heading">Moments forts du festival</h3>
          <div className="editions-highlights-grid">
            {currentEdition.highlights.map((highlight) => (
              <div key={highlight.id} className="editions-highlight-card">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="editions-highlight-img"
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
            ))}
          </div>

          {/* Section 5 : Equipe */}
          <h3 className="editions-section-heading">{currentEdition.teamTitle}</h3>
          <div className="editions-team-box">
            <img
              src={currentEdition.teamImage}
              alt={currentEdition.teamAlt}
              className="editions-team-img"
            />
          </div>

          {/* Bouton pour revenir à la vue catalogue */}
          <div className="editions-bottom-all-btn-wrap">
            <button
              type="button"
              className="btn-back-clean"
              onClick={handleBackToList}
            >
              <ArrowLeft size={16} />
              <span>Voir toutes les éditions</span>
            </button>
          </div>

        </div>
      </section>

      {/* MODALE LECTEUR VIDÉO */}
      {videoModalOpen && (
        <div className="video-modal-backdrop" onClick={() => setVideoModalOpen(false)}>
          <div className="video-modal-container" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="video-modal-close"
              onClick={() => setVideoModalOpen(false)}
              aria-label="Fermer la vidéo"
            >
              <X size={22} />
            </button>
            <div className="video-frame-wrapper">
              <iframe
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Vidéo officielle de l'exposition"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
