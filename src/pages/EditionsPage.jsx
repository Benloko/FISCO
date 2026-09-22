import React, { useState, useEffect } from 'react';
import { Play, X, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { EDITIONS_DATA, CURRENT_EDITION } from '../data/editionsData';
import './EditionsPage.css';

export default function EditionsPage({ setActivePage, onOpenPartnerModal, initialEditionId }) {
  // Par défaut, on affiche l'édition actuelle (2ème Édition - 2026)
  const [selectedEditionId, setSelectedEditionId] = useState(
    initialEditionId || CURRENT_EDITION.id
  );
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Synchronise si initialEditionId change
  useEffect(() => {
    if (initialEditionId) {
      setSelectedEditionId(initialEditionId);
    }
  }, [initialEditionId]);

  // Récupération de l'édition sélectionnée
  const currentEdition =
    EDITIONS_DATA.find((e) => e.id === selectedEditionId) || CURRENT_EDITION;

  // Liste des autres éditions (pour les boutons en bas)
  const otherEditions = EDITIONS_DATA.filter((e) => e.id !== currentEdition.id);

  // Gestion du changement d'édition avec défilement fluide
  const handleSelectEdition = (editionId) => {
    setSelectedEditionId(editionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="editions-page-root fade-in">
      {/* 1. HERO BANNER - DYNAMIQUE SELON L'ÉDITION SÉLECTIONNÉE (DÉFAUT: ÉDITION ACTUELLE) */}
      <section className="editions-hero-section">
        <div className="editions-hero-bg">
          <img
            src={currentEdition.heroBg}
            alt={`Sculpture et art contemporain - ${currentEdition.number}`}
            className="editions-hero-bg-img"
          />
          <div className="editions-hero-overlay" />
        </div>

        <div className="editions-hero-content">
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

          {/* 3. SECTION AUTRES ÉDITIONS (EN BAS, PROPRE, COOL ET SIMPLE) */}
          <div className="editions-bottom-switch-section">
            <div className="editions-bottom-header">
              <span className="editions-bottom-badge">Historique & Archives</span>
              <h3 className="editions-bottom-title">Autres éditions du FISCO</h3>
              <p className="editions-bottom-desc">
                Revivez les parcours artistiques, les œuvres monumentales et les temps forts des autres éditions du festival.
              </p>
            </div>

            <div className="editions-buttons-grid">
              {otherEditions.map((edition) => (
                <button
                  key={edition.id}
                  type="button"
                  className="edition-simple-btn"
                  onClick={() => handleSelectEdition(edition.id)}
                  aria-label={`Accéder à la ${edition.number}`}
                >
                  <div className="edition-simple-btn-left">
                    <span className="edition-simple-year-pill">{edition.year}</span>
                    <div className="edition-simple-texts">
                      <span className="edition-simple-num">{edition.number}</span>
                      <span className="edition-simple-loc">
                        <MapPin size={13} className="loc-pin-mini" />
                        {edition.location}
                      </span>
                    </div>
                  </div>

                  <div className="edition-simple-btn-right">
                    <span className="edition-simple-action-text">
                      {edition.isCurrent ? "Voir l'édition actuelle" : "Découvrir cette édition"}
                    </span>
                    <span className="edition-simple-arrow-circle">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </button>
              ))}
            </div>
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
