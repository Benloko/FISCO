import React from 'react';
import { ArrowRight } from 'lucide-react';
import './AboutPage.css';

export default function AboutPage({ setActivePage, onOpenPartnerModal }) {
  const goalsList = [
    {
      id: 1,
      title: "Encourager l'émergence de jeunes filles leaders",
      desc: "Nous autonomisons les femmes et améliorons leur bien-être à travers des programmes éducatifs, des initiatives de santé, des actions de plaidoyer et des opportunités économiques.",
      image: "/assets/images/accomplir-card-thumb.jpg"
    },
    {
      id: 2,
      title: "Encourager l'émergence de jeunes filles leaders",
      desc: "Nous autonomisons les femmes et améliorons leur bien-être à travers des programmes éducatifs, des initiatives de santé, des actions de plaidoyer et des opportunités économiques.",
      image: "/assets/images/accomplir-card-thumb.jpg"
    },
    {
      id: 3,
      title: "Encourager l'émergence de jeunes filles leaders",
      desc: "Nous autonomisons les femmes et améliorons leur bien-être à travers des programmes éducatifs, des initiatives de santé, des actions de plaidoyer et des opportunités économiques.",
      image: "/assets/images/accomplir-card-thumb.jpg"
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
      {/* 1. HERO BANNER */}
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
          <h1 className="about-hero-title">À propos du festival</h1>
          <p className="about-hero-desc">
            Célébrer la matière, éveiller les vocations et faire résonner la créativité contemporaine au cœur d’Ouidah.
          </p>
        </div>
      </section>

      {/* 2. QUI SOMMES-NOUS ? */}
      <section className="about-who-section">
        <div className="container">
          <div className="about-section-header">
            <span className="about-section-subtitle">Notre Histoire & Identité</span>
            <h2 className="about-section-heading">Qui sommes-nous ?</h2>
            <div className="about-heading-bar" />
          </div>

          <div className="about-who-content-wrapper">
            <div className="about-who-paragraphs">
              <p className="about-lead-paragraph">
                Le FISCO (Festival International de Sculpture Contemporaine d'Ouidah) est né d’une vision engagée : offrir un espace d’expression libre, puissant et transformateur pour célébrer la sculpture sous toutes ses formes et encourager l'émergence des artistes africains.
              </p>

              <p>
                Fondé avec la conviction profonde que la culture est un levier d’émancipation et de développement durable, notre festival répond aux défis contemporains auxquels font face les créateurs, en particulier les jeunes artistes et les femmes, en leur apportant des opportunités d’apprentissage, de création et de diffusion.
              </p>

              <p>
                Face au besoin de préserver les savoir-faire tout en explorant les formes actuelles, nous agissons concrètement à travers des résidences de création en direct, des ateliers de transmission pour la jeunesse et des espaces de rencontre avec le public.
              </p>

              <p>
                Notre parcours est guidé par une passion intacte : inscrire durablement Ouidah comme haut lieu de la sculpture contemporaine, en étroite collaboration avec les communautés locales et nos partenaires artistiques internationaux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CE QUE NOUS VOULONS ACCOMPLIR */}
      <section className="about-accomplish-section">
        <div className="container">
          <div className="about-section-header">
            <span className="about-section-subtitle">Notre Mission & Vision</span>
            <h2 className="accomplish-title">Ce que nous voulons accomplir</h2>
            <div className="about-heading-bar" />
          </div>

          <p className="accomplish-subtitle">
            À travers des initiatives éducatives, des résidences artistiques et des actions de valorisation culturelle, nous œuvrons pour un écosystème créatif inclusif, audacieux et durable. Notre objectif est de faire d'Ouidah le carrefour d'excellence de la sculpture contemporaine en Afrique et dans le monde.
          </p>

          {/* GRANDE IMAGE SHOWCASE */}
          <div className="about-showcase-wrapper">
            <div className="about-showcase-image-card">
              <img
                src="/assets/images/sculptor-chisel.jpg"
                alt="Artiste sculpteur au travail - Festival FISCO"
                className="about-showcase-img"
              />
              <div className="about-showcase-overlay">
                <span className="about-showcase-label">FISCO • L’Art de sculpter la matière</span>
              </div>
            </div>

            {/* BOUTON ÉDITIONS PRÉCÉDENTES (SOBRE, PROFESSIONNEL ET ÉLÉGANT) */}
            <div className="about-editions-cta-box">
              <button
                className="about-editions-btn-sleek"
                onClick={handleEditionClick}
                type="button"
                aria-label="Accéder aux éditions précédentes du festival"
              >
                <span>Éditions précédentes</span>
                <ArrowRight className="about-btn-arrow-sleek" size={17} />
              </button>
            </div>
          </div>

          {/* 4. LES CARTES EN BAS DE FAÇON PROFESSIONNELLE ET COOL */}
          <div className="about-goals-grid-section">
            <div className="about-goals-cards-grid">
              {goalsList.map((goal) => (
                <div key={goal.id} className="about-goal-card">
                  <div className="about-goal-card-media">
                    <img
                      src={goal.image}
                      alt={goal.title}
                      className="about-goal-card-img"
                      loading="lazy"
                    />
                    <div className="about-goal-card-overlay" />
                  </div>
                  <div className="about-goal-card-body">
                    <h3 className="about-goal-card-title">{goal.title}</h3>
                    <p className="about-goal-card-desc">{goal.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
