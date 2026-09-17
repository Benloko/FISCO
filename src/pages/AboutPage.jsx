import React from 'react';
import './AboutPage.css';

export default function AboutPage({ setActivePage, onOpenPartnerModal }) {
  const editionsList = [
    {
      id: 3,
      title: '3e Edition',
      year: '2028',
      desc: 'Lancement officiel avec une première équipe de 5 bénévoles déterminés à faire une différence.'
    },
    {
      id: 2,
      title: '2e Edition',
      year: '2027',
      desc: 'Lancement officiel avec une première équipe de 5 bénévoles déterminés à faire une différence.'
    },
    {
      id: 1,
      title: '1ère Edition',
      year: '2026',
      desc: 'Lancement officiel avec une première équipe de 5 bénévoles déterminés à faire une différence.'
    }
  ];

  const goalsList = [
    {
      id: 1,
      title: 'Encourager l’émergence de jeunes filles leaders',
      desc: 'Nous autonomisons les femmes et améliorons leur bien-être à travers des programmes éducatifs, des initiatives de santé, des actions de plaidoyer et des opportunités économiques.',
      image: '/assets/images/accomplir-card-thumb.jpg'
    },
    {
      id: 2,
      title: 'Encourager l’émergence de jeunes filles leaders',
      desc: 'Nous autonomisons les femmes et améliorons leur bien-être à travers des programmes éducatifs, des initiatives de santé, des actions de plaidoyer et des opportunités économiques.',
      image: '/assets/images/accomplir-card-thumb.jpg'
    },
    {
      id: 3,
      title: 'Encourager l’émergence de jeunes filles leaders',
      desc: 'Nous autonomisons les femmes et améliorons leur bien-être à travers des programmes éducatifs, des initiatives de santé, des actions de plaidoyer et des opportunités économiques.',
      image: '/assets/images/accomplir-card-thumb.jpg'
    }
  ];

  const handleEditionClick = () => {
    if (setActivePage) {
      setActivePage('editions');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="about-page-root fade-in">
      {/* 1. HERO BANNER (Screenshot 1) */}
      <section className="about-hero-section">
        <div className="about-hero-bg">
          <img
            src="/assets/images/hero-bg.jpg"
            alt="Sculpture sur pierre au burin"
            className="about-hero-bg-img"
          />
          <div className="about-hero-overlay" />
        </div>

        <div className="container about-hero-content">
          <h1 className="about-hero-title">A propos du festival</h1>
          <p className="about-hero-desc">
            Nous autonomisons les femmes et améliorons leur bien-être à travers des programmes éducatifs, des initiatives de santé, des actions de plaidoyer et des opportunités économiques.
          </p>
        </div>
      </section>

      {/* 2. QUI SOMMES-NOUS ? (Screenshot 1 & 2) */}
      <section className="about-who-section">
        <div className="container">
          <h2 className="about-section-heading">Qui sommes-nous ?</h2>

          <div className="about-who-paragraphs">
            <p>
              Nous autonomisons les femmes et améliorons leur bien-être à travers des programmes éducatifs, des initiatives de santé, des actions de plaidoyer et des opportunités économiques.
            </p>

            <p>
              Fondée en mai 2015, notre ONG est née d’une vision claire : répondre aux défis auxquels sont confrontées les jeunes femmes africaines et leur offrir les outils nécessaires pour devenir des leaders dans leurs communautés.
            </p>

            <p>
              Face aux inégalités persistantes et aux obstacles que rencontrent les femmes, nous avons décidé d’agir concrètement en créant des programmes éducatifs, des initiatives d’autonomisation économique et des espaces de développement personnel.
            </p>

            <p>
              Notre parcours a été marqué par un engagement constant à faire une différence tangible dans la vie des femmes et des jeunes filles, en collaborant avec des communautés locales et des partenaires internationaux partageant nos valeurs.
            </p>
          </div>
        </div>
      </section>

      {/* 3. EDITIONS TIMELINE & POSTER (Screenshot 2) */}
      <section className="about-editions-timeline-section">
        <div className="container">
          <div className="editions-timeline-grid">
            {/* Left: 3 Editions */}
            <div className="timeline-items-col">
              {editionsList.map((edition) => (
                <div key={edition.id} className="timeline-edition-item">
                  <button
                    className="timeline-edition-header"
                    onClick={handleEditionClick}
                    title={`Voir ${edition.title}`}
                  >
                    <span className="timeline-edition-title">{edition.title}</span>
                    <span className="timeline-edition-arrow">→</span>
                  </button>
                  <span className="timeline-edition-year">{edition.year}</span>
                  <p className="timeline-edition-desc">{edition.desc}</p>
                </div>
              ))}
            </div>

            {/* Right: Poster Square */}
            <div className="timeline-poster-col">
              <div 
                className="timeline-poster-card"
                onClick={handleEditionClick}
                style={{ cursor: 'pointer' }}
                title="Allons à la découverte du FISCO"
              >
                <img
                  src="/assets/images/fisco-poster-square.jpg"
                  alt="Allons à la découverte du FISCO - Festival International de Sculpture de Cotonou"
                  className="timeline-poster-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CE QUE NOUS VOULONS ACCOMPLIR (Screenshot 3) */}
      <section className="about-accomplish-section">
        <div className="container">
          <h2 className="accomplish-title">Ce que nous voulons accomplir</h2>
          <p className="accomplish-subtitle">
            Nous autonomisons les femmes et améliorons leur bien-être à travers des programmes éducatifs, des initiatives de santé, des actions de plaidoyer et des opportunités économiques. et des partenaires internationaux partageant nos valeurs.
          </p>

          <div className="accomplish-cards-grid">
            {goalsList.map((goal) => (
              <div key={goal.id} className="accomplish-card">
                <div className="accomplish-card-media">
                  <img
                    src={goal.image}
                    alt={goal.title}
                    className="accomplish-card-img"
                  />
                </div>
                <div className="accomplish-card-body">
                  <h3 className="accomplish-card-title">{goal.title}</h3>
                  <p className="accomplish-card-desc">{goal.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
