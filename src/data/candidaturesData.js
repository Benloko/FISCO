/**
 * Données simples des Appels à Candidature du FISCO
 * Modèle réaliste admin : Titre, Date, Lieu, Grand texte, Info complémentaire
 */

export const APPELS_CANDIDATURE = [
  {
    id: 'residence-monumentale-2026',
    title: 'Résidence Internationale de Sculpture Monumentale',
    date: '30 Avril 2026',
    location: 'Ouidah, Bénin',
    image: '/assets/images/sculptor-chisel.jpg',
    excerpt: 'Appel international pour la création d’œuvres monumentales en direct lors du festival FISCO 2026.',
    content: `Dans le cadre de sa 1ère édition, le Festival International de Sculpture Contemporaine (FISCO) lance un appel international à candidatures à destination des artistes sculpteurs. Cette résidence de création immersive se déroulera au cœur de la ville historique d'Ouidah.

Durant le festival, les artistes sélectionnés réaliseront une œuvre monumentale en direct, au contact du public, des scolaires et des passionnés d'art contemporain.

Le festival assure la prise en charge complète : hébergement, restauration, ateliers en plein air équipés, matières premières brutes (pierre locale, bois précieux, bronze, métal) ainsi qu'une bourse de création et un per diem journalier pour toute la durée de la résidence.

Les créations seront dévoilées lors du grand vernissage officiel et figureront dans le catalogue d'art officiel du festival.`,
    infoComplementaire: 'Dossier à renseigner dans le formulaire : coordonnées complètes, photos ou lien portfolio de réalisations récentes, et une brève note d’intention.'
  },
  {
    id: 'bourse-tremplin-jeunes-2026',
    title: 'Programme Tremplin : Jeunes Talents & Femmes Sculptrices',
    date: '10 Mai 2026',
    location: 'Ouidah, Bénin',
    image: '/assets/images/culture-center.jpg',
    excerpt: 'Dispositif de mentorat et d’accompagnement aux côtés des maîtres sculpteurs contemporains.',
    content: `Le FISCO s'engage pour le renouvellement des générations et l'affirmation des femmes sculptrices à travers son programme Tremplin.

Les lauréats bénéficieront du parrainage direct d'un grand maître sculpteur, d'un accès aux ateliers et aux outils professionnels, d'une dotation en matériaux et d'une prise en charge logistique durant toute la période du festival à Ouidah.

Cet accompagnement vise à transmettre les gestes et techniques de taille, à affiner la démarche artistique des participants et à leur offrir un espace d’exposition dédié au sein du salon officiel.`,
    infoComplementaire: 'Programme ouvert aux jeunes artistes de moins de 35 ans et aux créatrices sculptrices émergentes.'
  }
];

export const CURRENT_CALL = APPELS_CANDIDATURE[0];
