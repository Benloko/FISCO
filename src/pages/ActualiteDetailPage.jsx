import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
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

export default function ActualiteDetailPage({ onBackToList, setActivePage, onOpenPartnerModal }) {
  const otherActivities = [
    {
      id: 1,
      title: 'Célébration du 8 mars en différé',
      excerpt: 'Une exposition qui explore les blessures invisibles qui marquent œuvres...',
      image: '/assets/images/article-card-thumb.jpg',
    },
    {
      id: 2,
      title: 'Célébration du 8 mars en différé',
      excerpt: 'Une exposition qui explore les blessures invisibles qui marquent œuvres...',
      image: '/assets/images/article-card-thumb.jpg',
    },
    {
      id: 3,
      title: 'Célébration du 8 mars en différé',
      excerpt: 'Une exposition qui explore les blessures invisibles qui marquent œuvres...',
      image: '/assets/images/article-card-thumb.jpg',
    },
  ];

  const handleSelectOther = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="actualite-detail-page fade-in">
      {/* 1. HERO BANNER (Screenshot 1) */}
      <section className="actualites-hero-section">
        <div className="actualites-hero-bg">
          <img
            src="/assets/images/hero-bg.jpg"
            alt="Sculpture taillée"
            className="actualites-hero-bg-img"
          />
          <div className="actualites-hero-overlay" />
        </div>

        <div className="container actualites-hero-content">
          <h1 className="actualites-hero-title">Actualités</h1>
          <p className="actualites-hero-desc">
            Découvrez les initiatives et projets menés par notre ONG pour promouvoir l’autonomisation des femmes et contribuer au développement durable.
          </p>
          <p className="actualites-hero-quote">
            Chaque action est une pierre ajoutée à l’édifice d’un monde plus équitable.
          </p>
        </div>
      </section>

      {/* 2. FEATURED ARTICLE SECTION (Screenshots 1, 2, 3) */}
      <article className="article-main-container">
        <div className="container">
          {/* Featured Large Image (Screenshot 1 & 2) */}
          <div className="article-featured-image-box">
            <img
              src="/assets/images/article-featured-expo.jpg"
              alt="Visite de l'exposition - Former, inspirer, transformer"
              className="article-featured-img"
            />
          </div>

          {/* Article Header & Body (Screenshot 2 & 3) */}
          <div className="article-content-body">
            <h1 className="article-headline-title">
              Former, inspirer, transformer : quand Conscience Féminine et Rescue The World ONG façonnent les leaders de demain
            </h1>

            <div className="article-paragraphs">
              <p>
                Dans une dynamique de promotion du leadership féminin et de l’autonomisation économique des jeunes femmes, Conscience Féminine et Rescue The World ont organisé, le 21 mars 2026 dans la salle de la Fondation Valley de l’Université de Parakou, une initiative de renforcement des capacités au profit des étudiantes.Dans une dynamique de promotion du leadership féminin et de l’autonomisation économique des jeunes femmes, Conscience Féminine et Rescue The World ont organisé, le 21 mars 2026 dans la salle de la Fondation Valley de l’Université de Parakou, une initiative de renforcement des capacités au profit des étudiantes.
              </p>

              <p>
                Dans une dynamique de promotion du leadership féminin et de l’autonomisation économique des jeunes femmes, Conscience Féminine et Rescue The World ont organisé, le 21 mars 2026 dans la salle de la Fondation Valley de l’Université de Parakou, une initiative de renforcement des capacités au profit des étudiantes.
              </p>

              <p>
                Dans une dynamique de promotion du leadership féminin et de l’autonomisation économique des jeunes femmes, Conscience Féminine et Rescue The World ont organisé, le 21 mars 2026 dans la salle de la Fondation Valley de l’Université de Parakou, une initiative de renforcement des capacités au profit des étudiantes.
              </p>
            </div>

            {/* Social Share (Screenshot 3) */}
            <div className="article-share-block">
              <h3 className="article-share-heading">Partagez cette activité</h3>
              <div className="article-share-buttons">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="article-share-btn"
                  aria-label="Partager sur Facebook"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="article-share-btn"
                  aria-label="Partager sur LinkedIn"
                >
                  <LinkedinIcon />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="article-share-btn"
                  aria-label="Partager sur Instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="article-share-btn"
                  aria-label="Partager sur YouTube"
                >
                  <YoutubeIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Divider Line (Screenshot 3) */}
          <hr className="article-section-divider" />

          {/* 3. AUTRES ACTIVITÉS RÉCENTES (Screenshot 3 & 4) */}
          <section className="section-autres-activites-recentes">
            <h2 className="recent-activities-heading">Autres activités récentes</h2>

            <div className="recent-activities-cards-grid">
              {otherActivities.map((item) => (
                <div key={item.id} className="activity-horizontal-card">
                  {/* Left: Image */}
                  <div className="activity-card-media">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="activity-card-img"
                    />
                  </div>

                  {/* Right: Content */}
                  <div className="activity-card-info">
                    <h4 className="activity-card-title">{item.title}</h4>
                    <p className="activity-card-desc">{item.excerpt}</p>
                    <button
                      className="activity-card-link-btn"
                      onClick={handleSelectOther}
                    >
                      Voir les détails <span className="arrow-sym">→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>

      {/* 4. POURQUOI DEVENIR PARTENAIRE ? BANNER (Screenshot 4) */}
      <section className="section-partner-cta-banner">
        <div className="partner-cta-card-inner">
          {/* Left Text Col */}
          <div className="partner-cta-text-col">
            <h2 className="partner-cta-title">
              Pourquoi devenir partenaire ?
            </h2>
            <p className="partner-cta-desc">
              Vous souhaitez contribuer à nos initiatives ou participer à nos prochains événements ? Nous sommes toujours à la recherche de bénévoles passionnés et engagés pour nous aider à faire la différence dans la vie des femmes et des communautés locales.
            </p>
            <button
              className="btn-cta-devenir-partenaire"
              onClick={() => (setActivePage ? setActivePage('partenaire') : onOpenPartnerModal())}
            >
              Devenir Partenaire
            </button>
          </div>

          {/* Right Image Col */}
          <div className="partner-cta-photo-col">
            <img
              src="/assets/images/sculptor-chisel.jpg"
              alt="Sculpture de lion au burin"
              className="partner-cta-photo-img"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
