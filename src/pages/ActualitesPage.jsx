import React, { useState, useEffect, useRef } from 'react';
import { Filter, Search, ArrowRight, ChevronDown, ChevronUp, Plus } from 'lucide-react';
import ActualiteDetailPage from './ActualiteDetailPage';
import { FISCO_ARTICLES } from '../data/actualitesData';
import './ActualitesPage.css';

export default function ActualitesPage({ setActivePage, onSelectArticle, onOpenPartnerModal }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedArticleId, setSelectedArticleId] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const filterDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterDropdownRef.current && !filterDropdownRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsExpanded(false);
  }, [searchQuery, selectedCategory]);

  if (selectedArticleId) {
    return (
      <ActualiteDetailPage
        articleId={selectedArticleId}
        onSelectArticle={(id) => setSelectedArticleId(id)}
        onBackToList={() => {
          setSelectedArticleId(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        setActivePage={setActivePage}
        onOpenPartnerModal={() => (setActivePage ? setActivePage('partenaire') : onOpenPartnerModal())}
      />
    );
  }

  const categories = ['Tous', 'Exposition', 'Résidence', 'Atelier', 'Formation'];
  const articles = FISCO_ARTICLES;

  const filteredArticles = articles.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'Tous' ||
      item.category.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  const handleArticleClick = (articleId) => {
    if (onSelectArticle) {
      onSelectArticle(articleId);
    }
    if (setActivePage) {
      setActivePage('actualite-detail', articleId);
    } else {
      setSelectedArticleId(articleId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="actualites-page-root fade-in">
      {/* 1. HERO BANNER */}
      <section className="actualites-hero-section">
        <div className="actualites-hero-bg">
          <img
            src="/assets/images/hero-bg.jpg"
            alt="Sculpture taillée contemporaine"
            className="actualites-hero-bg-img"
          />
          <div className="actualites-hero-overlay" />
        </div>

        <div className="actualites-container actualites-hero-content">
          <h1 className="actualites-hero-title">Actualités</h1>
          <p className="actualites-hero-desc">
            Vivez le festival au quotidien : résidences, vernissages, ateliers de transmission et temps forts artistiques à Ouidah.
          </p>
        </div>
      </section>

      {/* 2. RECHERCHE ET FILTRES (Filtre d'abord + pastilles de catégories) */}
      <section className="actualites-search-section">
        <div className="actualites-container actualites-search-container">
          <div className="search-filter-wrapper-pro">
            {/* Filtre à côté de la barre avec Menu déroulant */}
            <div className="filter-dropdown-container" ref={filterDropdownRef}>
              <button
                type="button"
                className={`filter-pill-btn ${isFilterOpen ? 'active' : ''}`}
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                title="Filtrer par catégorie"
              >
                <Filter size={15} />
                <span>{selectedCategory === 'Tous' ? 'Filtrer' : selectedCategory}</span>
                <ChevronDown size={14} className={`filter-chevron ${isFilterOpen ? 'open' : ''}`} />
              </button>

              {isFilterOpen && (
                <div className="filter-dropdown-menu">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      className={`filter-dropdown-item ${selectedCategory === cat ? 'selected' : ''}`}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setIsFilterOpen(false);
                      }}
                    >
                      {cat === 'Tous' ? 'Toutes les catégories' : cat}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Barre de recherche */}
            <div className="search-input-box-pro">
              <Search size={18} className="search-magnifier-icon-pro" aria-hidden="true" />
              <input
                type="text"
                placeholder="Rechercher une actualité..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input-field-pro"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="search-clear-btn"
                  aria-label="Effacer la recherche"
                >
                  ×
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. GRILLE DES CARTES D'ACTUALITÉS */}
      <section className="actualites-grid-section">
        <div className="actualites-container">
          <div className="actualites-cards-grid">
            {/* Si non étendu : afficher les 5 premiers articles */}
            {(!isExpanded ? filteredArticles.slice(0, 5) : filteredArticles).map((article) => (
              <article
                key={article.id}
                className="actualite-dark-card"
                onClick={() => handleArticleClick(article.id)}
                role="button"
                tabIndex={0}
                aria-label={`Lire l'article : ${article.title}`}
              >
                <div className="actualite-dark-card-media">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="actualite-dark-card-img"
                    loading="lazy"
                  />
                  <div className="actualite-card-media-overlay" />
                  <span className="badge-date-top">{article.date ? article.date.replace(/ 2026$/, '') : ''}</span>
                </div>

                <div className="actualite-dark-card-body">
                  <h2 className="actualite-dark-card-title">{article.title}</h2>
                  <p className="actualite-dark-card-excerpt">{article.excerpt}</p>
                  
                  <div className="actualite-dark-card-footer">
                    <span className="actualite-dark-card-link">
                      <span>Voir les détails</span>
                      <ArrowRight size={14} className="actualite-arrow-icon" />
                    </span>
                  </div>
                </div>
              </article>
            ))}

            {/* 6ème Emplacement en mode initial : Tuile "Voir Plus" classique */}
            {!isExpanded && filteredArticles.length > 5 && (
              <div
                className="actualite-dark-card card-voir-plus-action"
                onClick={() => setIsExpanded(true)}
                role="button"
                tabIndex={0}
                aria-label="Afficher la suite des actualités"
              >
                <div className="circle-plus-btn">
                  <Plus size={44} strokeWidth={3} />
                </div>
                <span className="voir-plus-big-text">Voir plus</span>
              </div>
            )}
          </div>

          {/* Bouton Voir Moins quand la grille est dépliée */}
          {isExpanded && filteredArticles.length > 5 && (
            <div className="actualites-load-more-wrap">
              <button
                type="button"
                className="btn-actualites-load-more btn-see-less"
                onClick={() => {
                  setIsExpanded(false);
                  const gridElement = document.querySelector('.actualites-grid-section');
                  if (gridElement) {
                    gridElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                aria-label="Afficher moins d'actualités"
              >
                <span>Voir moins</span>
                <ChevronUp size={16} />
              </button>
            </div>
          )}

          {filteredArticles.length === 0 && (
            <div className="actualites-no-results">
              <p>Aucune actualité ne correspond à vos critères de recherche.</p>
              <button
                type="button"
                className="btn-reset-filters"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('Tous');
                }}
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. POURQUOI DEVENIR PARTENAIRE ? (Carte allongée pour s'approcher des côtés de l'écran sans toucher complètement) */}
      <section className="section-partner-cta-banner-pro">
        <div className="partner-cta-container-wide">
          <div className="partner-cta-card-pro">
            <div className="partner-cta-text-col">
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
