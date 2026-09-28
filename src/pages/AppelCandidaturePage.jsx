import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, MapPin, Calendar, Info } from 'lucide-react';
import { APPELS_CANDIDATURE } from '../data/candidaturesData';
import CandidatureModal from '../components/CandidatureModal';
import './AppelCandidaturePage.css';

export default function AppelCandidaturePage({ setActivePage }) {
  const [selectedCallId, setSelectedCallId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const selectedCall = APPELS_CANDIDATURE.find((c) => c.id === selectedCallId);

  const handleBackHome = () => {
    if (setActivePage) {
      setActivePage('accueil');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenDetail = (callId) => {
    setSelectedCallId(callId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedCallId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  return (
    <div className="appel-page-root fade-in">
      {/* 1. HERO BANNER SOBRE & ÉPURÉ */}
      <section className="appel-hero-section">
        <div className="appel-hero-bg">
          <img
            src="/assets/images/hero-bg.jpg"
            alt="Sculpture contemporaine FISCO"
            className="appel-hero-bg-img"
          />
          <div className="appel-hero-overlay" />
        </div>

        <div className="appel-container appel-hero-content">
          <h1 className="appel-hero-title">Appels à Candidatures</h1>
          <p className="appel-hero-desc">
            Rejoignez les résidences de création du FISCO et façonnez les œuvres de l'édition 2026 à Ouidah.
          </p>
        </div>
      </section>

      {/* 2. CONTENU PRINCIPAL */}
      <main className="appel-main-body">
        <div className="appel-container appel-body-container">
          
          {/* ============================================================
              CAS A : VUE LISTE (2 CARTES SIMPLES ET COMPACTES)
              ============================================================ */}
          {!selectedCall && (
            <div className="appel-list-view">
              <div className="appel-top-nav-bar">
                <button
                  type="button"
                  className="appel-back-link-sleek"
                  onClick={handleBackHome}
                  aria-label="Retour à l'accueil"
                >
                  <ArrowLeft size={16} />
                  <span>Retour à l'accueil</span>
                </button>
                <span className="appel-count-pill">2 appels disponibles</span>
              </div>

              {/* Grille des cartes simples */}
              <div className="appel-simple-cards-grid">
                {APPELS_CANDIDATURE.map((call) => (
                  <div
                    key={call.id}
                    className="appel-compact-card"
                    onClick={() => handleOpenDetail(call.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleOpenDetail(call.id)}
                  >
                    <div className="compact-card-media">
                      <img
                        src={call.image}
                        alt={call.title}
                        className="compact-card-img"
                      />
                      <span className="compact-badge-date">
                        <Calendar size={12} />
                        <span>Clôture : {call.date}</span>
                      </span>
                      <span className="compact-badge-loc">
                        <MapPin size={12} />
                        <span>{call.location}</span>
                      </span>
                    </div>

                    <div className="compact-card-body">
                      <h2 className="compact-card-title">{call.title}</h2>
                      <p className="compact-card-summary">{call.excerpt}</p>

                      <div className="compact-card-footer">
                        <span className="compact-card-cta">
                          <span>Voir les détails</span>
                          <ArrowRight size={15} />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ============================================================
              CAS B : VUE DÉTAIL SIMPLE (GRAND TEXTE, DATE, LIEU, S'INSCRIRE)
              ============================================================ */}
          {selectedCall && (
            <div className="appel-detail-view fade-in">
              <div className="appel-detail-nav">
                <button
                  type="button"
                  className="appel-back-link-sleek"
                  onClick={handleBackToList}
                  aria-label="Retour aux appels"
                >
                  <ArrowLeft size={16} />
                  <span>Retour aux appels</span>
                </button>
              </div>

              <article className="appel-detail-article-simple">
                {/* Image principale */}
                <div className="appel-detail-banner-img-box">
                  <img
                    src={selectedCall.image}
                    alt={selectedCall.title}
                    className="appel-detail-banner-img"
                  />
                </div>

                {/* Métadonnées simples : Date et Lieu */}
                <div className="appel-detail-meta-line">
                  <span className="meta-item">
                    <Calendar size={15} className="meta-icon" />
                    <span>Clôture des candidatures : <strong>{selectedCall.date}</strong></span>
                  </span>
                  <span className="meta-divider">•</span>
                  <span className="meta-item">
                    <MapPin size={15} className="meta-icon" />
                    <span>{selectedCall.location}</span>
                  </span>
                </div>

                {/* Titre de l'appel */}
                <h1 className="appel-detail-main-title">{selectedCall.title}</h1>

                {/* Le Grand Texte de l'Admin */}
                <div className="appel-detail-text-body">
                  {selectedCall.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="appel-detail-paragraph">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Info complémentaire si renseignée */}
                {selectedCall.infoComplementaire && (
                  <div className="appel-detail-info-complement">
                    <Info size={18} className="info-comp-icon" />
                    <p className="info-comp-text">{selectedCall.infoComplementaire}</p>
                  </div>
                )}

                {/* Bouton S'inscrire simple (pas de grosse boîte surchargée) */}
                <div className="appel-detail-simple-action">
                  <button
                    type="button"
                    className="btn-appel-simple-inscrire"
                    onClick={handleOpenModal}
                    aria-label={`S'inscrire à l'appel : ${selectedCall.title}`}
                  >
                    <span>S'inscrire</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            </div>
          )}

        </div>
      </main>

      {/* MODALE D'INSCRIPTION */}
      <CandidatureModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialCallId={selectedCall ? selectedCall.id : 'residence-monumentale-2026'}
      />
    </div>
  );
}
