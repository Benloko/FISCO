import React from 'react';
import { ArrowLeft, ArrowRight, Calendar, MapPin } from 'lucide-react';
import { FISCO_ARTICLES } from '../data/actualitesData';
import './ActualiteDetailPage.css';

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

export default function ActualiteDetailPage({
  articleId = 1,
  onSelectArticle,
  onBackToList,
  setActivePage,
  onOpenPartnerModal
}) {
  const currentArticle =
    FISCO_ARTICLES.find((a) => a.id === Number(articleId)) || FISCO_ARTICLES[0];

  // 3 autres activités récentes pour la grille du bas
  const otherActivities = FISCO_ARTICLES.filter(
    (a) => a.id !== currentArticle.id
  ).slice(0, 3);

  const handleSelectOther = (newId) => {
    if (onSelectArticle) {
      onSelectArticle(newId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="actualite-detail-page fade-in">
      {/* 1. HERO BANNER : TITRE ET EXTRAIT DE L'ACTUALITÉ SUR L'IMAGE DU HAUT */}
      <section className="actualite-detail-hero-section">
        <div className="actualite-detail-hero-bg">
          <img
            src={currentArticle.image}
            alt={currentArticle.title}
            className="actualite-detail-hero-bg-img"
          />
          <div className="actualite-detail-hero-overlay" />
        </div>

        <div className="container actualite-detail-hero-content">
          <h1 className="actualite-detail-hero-title">{currentArticle.title}</h1>
          <p className="actualite-detail-hero-desc">
            {currentArticle.excerpt}
          </p>
        </div>
      </section>

      {/* 2. CONTENU PRINCIPAL DE L'ARTICLE */}
      <article className="article-main-container-pro">
        <div className="article-content-wrapper-pro">
          {/* Bouton de retour simple SANS carte */}
          {onBackToList && (
            <div className="article-back-nav">
              <button
                type="button"
                onClick={onBackToList}
                className="btn-back-clean"
              >
                <ArrowLeft size={18} />
                <span>Retour aux actualités</span>
              </button>
            </div>
          )}

          {/* Grande photo de l'article */}
          <div className="article-featured-media-card">
            <img
              src={currentArticle.image}
              alt={currentArticle.title}
              className="article-featured-img-cover"
            />
          </div>

          {/* En-tête : Métadonnées (Date et Lieu bien visibles) */}
          <div className="article-editorial-header">
            <div className="article-event-meta-row">
              <span className="article-meta-badge-detail">
                <Calendar size={15} className="meta-icon-amber" />
                <span>{currentArticle.date}</span>
              </span>
              <span className="article-meta-badge-detail">
                <MapPin size={15} className="meta-icon-amber" />
                <span>{currentArticle.location}</span>
              </span>
            </div>

            {/* Titre fort, lisible, chocolat profond */}
            <h1 className="article-headline-title-pro">
              {currentArticle.title}
            </h1>
          </div>

          {/* Corps de l'article */}
          <div className="article-editorial-body">
            {currentArticle.paragraphs && currentArticle.paragraphs.map((p, idx) => (
              <p
                key={idx}
                className={idx === 0 ? 'article-lead-paragraph' : 'article-body-paragraph'}
              >
                {p}
              </p>
            ))}
          </div>

          {/* Partage social SANS carte */}
          <div className="article-social-share-clean">
            <span className="article-share-title-clean">Partagez cette actualité :</span>
            <div className="article-share-icons-clean">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="social-circle-clean"
                aria-label="Partager sur Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="social-circle-clean"
                aria-label="Partager sur LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="social-circle-clean"
                aria-label="Partager sur Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="social-circle-clean"
                aria-label="Partager sur YouTube"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* 3. AUTRES ACTIVITÉS RÉCENTES (Même largeur que la carte Devenir Partenaire) */}
      <section className="section-other-activities-wide-pro">
        <div className="partner-cta-container-wide">
          <div className="other-activities-header-wide">
            <span className="other-activities-tag-pro">À DÉCOUVRIR AUSSI</span>
            <h2 className="other-activities-title-wide">Autres activités récentes</h2>
          </div>

          <div className="other-activities-grid-wide-pro">
            {otherActivities.map((item) => (
              <div
                key={item.id}
                className="other-activity-card-wide-pro"
                onClick={() => handleSelectOther(item.id)}
                role="button"
                tabIndex={0}
              >
                {/* Vignette rectangulaire à gauche */}
                <div className="other-activity-thumb-wide">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="other-activity-img-wide"
                  />
                </div>

                {/* Contenu textuel à droite */}
                <div className="other-activity-details-wide">
                  <div className="other-activity-meta-line">
                    <span className="other-activity-date-pill">
                      <Calendar size={13} className="other-meta-icon" />
                      <span>{item.date}</span>
                    </span>
                  </div>

                  <h3 className="other-activity-card-title-wide">{item.title}</h3>
                  <p className="other-activity-card-desc-wide">{item.excerpt}</p>

                  <span className="other-activity-read-link-wide">
                    <span>Voir les détails</span>
                    <ArrowRight size={14} className="other-activity-arrow" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. POURQUOI DEVENIR PARTENAIRE ? BANNER PLUS PROPRE ET PRO */}
      <section className="section-partner-cta-banner-pro">
        <div className="partner-cta-container-wide">
          <div className="partner-cta-card-pro">
            <div className="partner-cta-text-col">
              <span className="partner-cta-tag">MÉCÉNAT & IMPACT</span>
              <h2 className="partner-cta-title">
                Pourquoi devenir partenaire ?
              </h2>
              <p className="partner-cta-desc">
                Vous souhaitez contribuer au rayonnement de la sculpture contemporaine et accompagner nos résidences d'artistes à Ouidah ? Associez votre organisation à un rendez-vous culturel prestigieux et bâtissons ensemble un partenariat sur-mesure.
              </p>
              
              {/* Bouton Devenir Partenaire simple, propre et beau */}
              <button
                className="btn-cta-partner-sleek"
                onClick={() => (setActivePage ? setActivePage('partenaire') : onOpenPartnerModal())}
                type="button"
              >
                <span>Devenir Partenaire</span>
                <ArrowRight size={16} className="btn-cta-partner-icon" />
              </button>
            </div>

            <div className="partner-cta-photo-col">
              <img
                src="/assets/images/sculptor-chisel.jpg"
                alt="Artiste sculptant au burin"
                className="partner-cta-photo-img"
              />
              <div className="partner-cta-photo-overlay" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
