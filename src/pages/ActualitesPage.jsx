import React, { useState } from 'react';
import { Filter, Search, MapPin, ArrowLeft, ArrowRight } from 'lucide-react';
import ActualiteDetailPage from './ActualiteDetailPage';
import './ActualitesPage.css';

export default function ActualitesPage({ setActivePage, onOpenPartnerModal }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedArticleId, setSelectedArticleId] = useState(null);
  const totalPages = 3;

  if (selectedArticleId) {
    return (
      <ActualiteDetailPage
        onBackToList={() => {
          setSelectedArticleId(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        setActivePage={setActivePage}
        onOpenPartnerModal={() => (setActivePage ? setActivePage('partenaire') : onOpenPartnerModal())}
      />
    );
  }

  // 8 articles for page 1 as shown in Screenshots 1, 2, 3
  const articles = [
    {
      id: 1,
      title: 'Célébration du 8 mars en différé',
      excerpt: 'Une exposition qui explore les blessures invisibles qui marquent œuvres...',
      image: '/assets/images/expo-gallery.jpg',
      date: null,
      location: null,
    },
    {
      id: 2,
      title: 'Célébration du 8 mars en différé',
      excerpt: 'Une exposition qui explore les blessures invisibles qui marquent œuvres...',
      image: '/assets/images/expo-gallery.jpg',
      date: '3 Mar',
      location: 'Calavi / Zogbadjè',
    },
    {
      id: 3,
      title: 'Célébration du 8 mars en différé',
      excerpt: 'Une exposition qui explore les blessures invisibles qui marquent œuvres...',
      image: '/assets/images/expo-gallery.jpg',
      date: null,
      location: null,
    },
    {
      id: 4,
      title: 'Célébration du 8 mars en différé',
      excerpt: 'Une exposition qui explore les blessures invisibles qui marquent œuvres...',
      image: '/assets/images/expo-gallery.jpg',
      date: null,
      location: null,
    },
    {
      id: 5,
      title: 'Célébration du 8 mars en différé',
      excerpt: 'Une exposition qui explore les blessures invisibles qui marquent œuvres...',
      image: '/assets/images/expo-gallery.jpg',
      date: null,
      location: null,
    },
    {
      id: 6,
      title: 'Célébration du 8 mars en différé',
      excerpt: 'Une exposition qui explore les blessures invisibles qui marquent œuvres...',
      image: '/assets/images/expo-gallery.jpg',
      date: null,
      location: null,
    },
    {
      id: 7,
      title: 'Célébration du 8 mars en différé',
      excerpt: 'Une exposition qui explore les blessures invisibles qui marquent œuvres...',
      image: '/assets/images/expo-gallery.jpg',
      date: null,
      location: null,
    },
    {
      id: 8,
      title: 'Célébration du 8 mars en différé',
      excerpt: 'Une exposition qui explore les blessures invisibles qui marquent œuvres...',
      image: '/assets/images/expo-gallery.jpg',
      date: null,
      location: null,
    },
  ];

  const filteredArticles = articles.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="actualites-page-root fade-in">
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

      {/* 2. FILTER & SEARCH BAR (Screenshot 1) */}
      <section className="actualites-search-section">
        <div className="container actualites-search-container">
          <div className="search-filter-wrapper">
            {/* Funnel Icon */}
            <div className="filter-funnel-box" title="Filtrer">
              <Filter size={24} className="filter-funnel-icon" />
            </div>

            {/* Search Input Box */}
            <div className="search-input-box">
              <input
                type="text"
                placeholder="Rechercher"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input-field"
              />
              <Search size={20} className="search-magnifier-icon" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. NEWS CARDS GRID (Screenshots 1, 2, 3) */}
      <section className="actualites-grid-section">
        <div className="container">
          <div className="actualites-cards-grid">
            {filteredArticles.map((article) => (
              <article key={article.id} className="news-dark-card actualite-item-card">
                {/* Image Media with Badges */}
                <div className="news-card-media">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="news-card-img"
                  />
                  {article.date && (
                    <span className="badge-date-top">{article.date}</span>
                  )}
                  {article.location && (
                    <span className="badge-location-bottom">
                      <MapPin size={13} className="pin-icon" />
                      <span>{article.location}</span>
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="news-card-body">
                  <h2 className="news-card-title">{article.title}</h2>
                  <p className="news-card-text">{article.excerpt}</p>
                  <button
                    className="actualite-card-detail-btn"
                    onClick={() => {
                      if (setActivePage) {
                        setActivePage('actualite-detail');
                      } else {
                        setSelectedArticleId(article.id);
                      }
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    Voir les détails <span className="arrow-icon">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* 4. PAGINATION (Screenshot 3) */}
          <div className="actualites-pagination-wrap">
            <button
              className="pagination-arrow-circle"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              aria-label="Page précédente"
            >
              <ArrowLeft size={18} />
            </button>

            <div className="pagination-text-and-bar">
              <span className="pagination-page-label">
                Page : {currentPage} sur {totalPages}
              </span>
              <div className="pagination-progress-track">
                <div
                  className="pagination-progress-thumb"
                  style={{ width: `${(currentPage / totalPages) * 100}%` }}
                />
              </div>
            </div>

            <button
              className="pagination-arrow-circle"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              aria-label="Page suivante"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 5. POURQUOI DEVENIR PARTENAIRE ? BANNER (Screenshot 3 & 4) */}
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
