import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import './EditionsPage.css';

export default function EditionsPage({ onOpenPartnerModal }) {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const mainParagraphText = "Dans une dynamique de promotion du leadership féminin et de l’autonomisation économique des jeunes femmes, Conscience Féminine et Rescue The World ont organisé, le 21 mars 2026 dans la salle de la Fondation Valley de l’Université de Parakou, une initiative de renforcement des capacités au profit des étudiantes.Dans une dynamique de promotion du leadership féminin et de l’autonomisation économique des jeunes femmes, Conscience Féminine et Rescue The World ont organisé, le 21 mars 2026 dans la salle de la Fondation Valley de l’Université de Parakou, une initiative de renforcement des capacités au profit des étudiantes.";

  return (
    <div className="editions-page-root fade-in">
      {/* 1. HERO BANNER (Screenshot 1) */}
      <section className="editions-hero-section">
        <div className="editions-hero-bg">
          <img
            src="/assets/images/sculptor-chisel.jpg"
            alt="Sculpture sur pierre au marteau"
            className="editions-hero-bg-img"
          />
          <div className="editions-hero-overlay" />
        </div>

        <div className="editions-hero-content">
          <h1 className="editions-hero-title">1ère Edition</h1>
          <p className="editions-hero-subtitle">Palais des congrès</p>
          <span className="editions-hero-date">18 Septembre au 21 Septembre</span>
        </div>
      </section>

      {/* 2. MAIN CONTENT (Screenshots 1, 2, 3, 4, 5) */}
      <section className="editions-main-section">
        <div className="editions-container">
          
          {/* Titre Thématique principal (Screenshot 1) */}
          <h2 className="editions-theme-title">
            Thème : Former, inspirer, transformer : quand Conscience Féminine et Rescue The World ONG façonnent les leaders de demain
          </h2>

          {/* Bloc 1 : Texte à gauche + Photo bâtiment à droite (Screenshot 1 & 2) */}
          <div className="editions-split-block">
            <div className="editions-split-text">
              <p className="editions-paragraph">
                {mainParagraphText}
              </p>
              <p className="editions-paragraph">
                Dans une dynamique de promotion du leadership féminin et de l’autonomisation économique des jeunes femmes, Conscience Féminine et Rescue The World ont organisé, le 21 mars 2026 dans la salle de la Fondation Valley de l’Université de Parakou, une initiative de renforcement des capacités au profit des étudiantes.
              </p>
            </div>
            <div className="editions-split-img-box">
              <img
                src="/assets/images/exhibition-building.jpg"
                alt="Palais des congrès et exposition"
                className="editions-split-img"
              />
            </div>
          </div>

          {/* Paragraphe pleine largeur (Screenshot 2) */}
          <p className="editions-paragraph">
            {mainParagraphText}
          </p>

          {/* Bloc 2 : Photo visite musée à gauche + Texte à droite (Screenshot 2 & 3) */}
          <div className="editions-split-block reverse-on-desktop">
            <div className="editions-split-img-box">
              <img
                src="/assets/images/museum-tour.jpg"
                alt="Visite guidée et vernissage artistique"
                className="editions-split-img"
              />
            </div>
            <div className="editions-split-text">
              <p className="editions-paragraph">
                {mainParagraphText}
              </p>
              <p className="editions-paragraph">
                Dans une dynamique de promotion du leadership féminin et de l’autonomisation économique des jeunes femmes, Conscience Féminine et Rescue The World ont organisé, le 21 mars 2026 dans la salle de la Fondation Valley de l’Université de Parakou, une initiative de renforcement des capacités au profit des étudiantes.
              </p>
            </div>
          </div>

          {/* Paragraphe pleine largeur (Screenshot 3) */}
          <p className="editions-paragraph">
            {mainParagraphText}
          </p>

          {/* Section 3 : Nom de l'exposition & Vidéo teaser (Screenshot 3 & 4) */}
          <h3 className="editions-section-heading">Nom de l’exposition</h3>
          <div className="editions-video-banner">
            <img
              src="/assets/images/exhibition-building.jpg"
              alt="Aperçu vidéo de l'exposition"
              className="editions-video-bg"
            />
            <div className="editions-video-overlay">
              <button
                type="button"
                className="editions-play-btn"
                onClick={() => setVideoModalOpen(true)}
                aria-label="Lire la vidéo de l'exposition"
              >
                <Play size={36} fill="#2A1405" color="#2A1405" />
              </button>
            </div>
          </div>

          {/* Section 4 : Moments forts du festival (Screenshot 4) */}
          <h3 className="editions-section-heading">Moments forts du festival</h3>
          <div className="editions-highlights-grid">
            <div className="editions-highlight-card">
              <img
                src="/assets/images/culture-center.jpg"
                alt="Formation salon sculpture"
              />
              <div className="editions-highlight-overlay">
                <span className="editions-highlight-text">
                  Formation dans le salon de sculpture
                </span>
              </div>
            </div>

            <div className="editions-highlight-card">
              <img
                src="/assets/images/exhibition-building.jpg"
                alt="Architecture et lieu de festival"
              />
            </div>
          </div>

          {/* Section 5 : Equipe (Screenshot 4 & 5) */}
          <h3 className="editions-section-heading">Equipe</h3>
          <div className="editions-team-box">
            <img
              src="/assets/images/artists-team.jpg"
              alt="Équipe officielle du Festival International de Sculpture de Cotonou"
              className="editions-team-img"
            />
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
