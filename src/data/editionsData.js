/**
 * Données complètes des éditions du FISCO
 * (Festival International de Sculpture Contemporaine)
 */

export const EDITIONS_DATA = [
  {
    id: 'edition-2',
    isCurrent: true,
    number: '2ème Édition',
    badge: 'Édition Actuelle',
    year: '2026',
    location: 'Ouidah & Cotonou, Bénin',
    dates: '18 au 25 Novembre 2026',
    heroBg: '/assets/images/sculptor-chisel.jpg',
    theme: "Thème : L'art de la matière et la mémoire vivante : sculpter l'identité contemporaine",
    summary: "Plus de 30 sculpteurs internationaux réunis à Ouidah pour célébrer la pierre, le bronze et le bois à travers des résidences de création en direct, des symposiums monumentaux et des ateliers de transmission pour les jeunes et les femmes.",
    split1: {
      paragraphs: [
        "Le Festival International de Sculpture Contemporaine (FISCO) déploie sa 2ème édition au cœur de la ville historique d'Ouidah. Cette édition rassemble plus de trente sculpteurs venus de divers horizons africains et internationaux, investissant les espaces publics pour célébrer la puissance expressive de la pierre, du bronze, du bois et des matériaux recyclés.",
        "Placée sous le signe de l'innovation et du dialogue des générations, cette édition met l'accent sur les résidences de création en plein air, permettant au public, aux passionnés d'art et aux scolaires de vivre en direct l'acte créateur et d'assister à la métamorphose de blocs bruts en œuvres monumentales."
      ],
      img: '/assets/images/exhibition-building.jpg',
      imgAlt: "Lieu d'exposition et esplanade du festival FISCO"
    },
    fullParagraph1: "Au-delà de la virtuosité technique, cette édition se veut un incubateur de vocations pour la jeunesse et une vitrine d'affirmation pour les femmes artistes sculptrices. Les symposiums quotidiens abordent les enjeux de conservation, de valorisation du patrimoine sculptural et d'intégration de l'art dans l'espace urbain africain moderne.",
    split2: {
      paragraphs: [
        "Les parcours de visites commentées et les ateliers d'initiation ont mobilisé des centaines de jeunes apprenants, leur offrant une immersion inédite au contact direct des maîtres de la matière.",
        "L'événement s'enrichit de conférences-débats et de projections documentaires mettant en lumière la trajectoire d'artistes pionniers qui ont façonné le paysage artistique béninois et panafricain."
      ],
      img: '/assets/images/museum-tour.jpg',
      imgAlt: "Visite guidée et vernissage des œuvres contemporaines"
    },
    fullParagraph2: "La 2ème édition du FISCO confirme ainsi la place centrale d'Ouidah et du Bénin comme carrefour incontournable de la création contemporaine, tissant des ponts indélébiles entre tradition séculaire et audace contemporaine.",
    expoTitle: "Symposium Monumental & Vernissage Officiel",
    expoImage: '/assets/images/culture-center.jpg',
    highlights: [
      {
        id: 1,
        image: '/assets/images/sculpture-workshop.jpg',
        title: 'Atelier de taille directe sur pierre et bois',
        subtitle: 'Démonstrations en plein air avec les maîtres sculpteurs'
      },
      {
        id: 2,
        image: '/assets/images/expo-gallery.jpg',
        title: 'Exposition publique sur l’esplanade des arts',
        subtitle: 'Présentation des œuvres monumentales créées en direct'
      }
    ],
    teamTitle: "Comité d'Organisation & Commissariat Artistique",
    teamImage: '/assets/images/artists-team.jpg',
    teamAlt: "Équipe officielle et commissariat du FISCO 2026"
  },
  {
    id: 'edition-1',
    isCurrent: false,
    number: '1ère Édition',
    badge: 'Rétrospective 2024',
    year: '2024',
    location: 'Palais des Congrès de Cotonou',
    dates: '18 au 21 Septembre 2024',
    heroBg: '/assets/images/hero-bg.jpg',
    theme: "Thème : L’éveil de la matière : genèse et rayonnement de la sculpture contemporaine",
    summary: "L'édition inaugurale historique au Palais des Congrès de Cotonou, ayant réuni artistes pionniers et collectionneurs, avec l'initiation de plus de 400 élèves aux techniques du modelage et de la sculpture.",
    split1: {
      paragraphs: [
        "La première édition du Festival International de Sculpture de Cotonou (FISCO) a posé les fondations d'un rendez-vous artistique inédit. Réunissant sculpteurs confirmés, critiques d'art et collectionneurs au Palais des Congrès, cette édition inaugurale a révélé l'incroyable vitalité de la scène plastique béninoise.",
        "Durant quatre journées intenses d'expositions et de démonstrations, les artistes invités ont partagé leurs techniques de ciselage, de fonte et d'assemblage, suscitant un engouement populaire remarquable et une reconnaissance immédiate du public."
      ],
      img: '/assets/images/exhibition-building.jpg',
      imgAlt: "Palais des Congrès de Cotonou - 1ère Édition FISCO"
    },
    fullParagraph1: "Le salon inaugural a mis en exergue des créations audacieuses explorant les thématiques de la mémoire, de l'enracinement et de la contemporanéité, tout en ouvrant des pistes de réflexion sur la structuration du marché de l'art sculptural au Bénin et dans la sous-région.",
    split2: {
      paragraphs: [
        "Des tables rondes enrichissantes ont rassemblé historiens de l'art, galeristes et artisans autour de la transmission des savoir-faire ancestraux et de leur hybridation avec les langages visuels modernes.",
        "Les ateliers pédagogiques ont permis à plus de 400 élèves et étudiants de s'initier aux bases du modelage et de la sculpture sur terre cuite et matériaux de récupération."
      ],
      img: '/assets/images/museum-tour.jpg',
      imgAlt: "Visiteurs et délégations au salon inaugural de sculpture 2024"
    },
    fullParagraph2: "Cette première édition pionnière a tracé la voie et marqué le point de départ d'une aventure humaine et artistique d'envergure, couronnée par l'adhésion unanime des acteurs culturels nationaux.",
    expoTitle: "Salon Inaugural de Sculpture Contemporaine",
    expoImage: '/assets/images/article-featured-expo.jpg',
    highlights: [
      {
        id: 1,
        image: '/assets/images/culture-center.jpg',
        title: 'Masterclass inaugurale dans le salon de sculpture',
        subtitle: 'Rencontre historique des grands maîtres du Bénin'
      },
      {
        id: 2,
        image: '/assets/images/sculpture-bronze.jpg',
        title: 'Vernissage des premières pièces de bronze et pierre',
        subtitle: 'Révélation des talents émergents de la 1ère édition'
      }
    ],
    teamTitle: "Équipe Fondatrice du FISCO 2024",
    teamImage: '/assets/images/artists-team.jpg',
    teamAlt: "Équipe fondatrice du Festival International de Sculpture"
  }
];

export const CURRENT_EDITION = EDITIONS_DATA.find((e) => e.isCurrent) || EDITIONS_DATA[0];
