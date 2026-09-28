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
    virtualExpoUrl: 'https://www.google.com',
    virtualExpoText: "Visiter l'exposition virtuelle",
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
  }
];

export const CURRENT_EDITION = EDITIONS_DATA.find((e) => e.isCurrent) || EDITIONS_DATA[0];
