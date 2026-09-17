# FISCO - Festival International de Sculpture de Cotonou

Site web officiel et plateforme d'inscription responsive pour le **Festival International de Sculpture de Cotonou (FISCO 2026)**.

---

## 🎨 Caractéristiques & Conception

- **Design 100% fidèle aux maquettes Figma** :
  - Charte graphique institutionnelle chaleureuse (Brun Terre de Cotonou `#4A2E12`, Or ambré `#F5B738`, Terracotta `#D95F26`).
  - Utilisation des vraies images du festival (photos des sculpteurs, expositions, ateliers, portrait officiel et logos).
- **Cœur du site : Inscription Interactive & Responsive** :
  - Formulaire de candidature complet avec validation en temps réel.
  - Sélection dynamique de la session ou du profil (Artiste, Étudiant, Professionnel, Volontaire).
  - Génération immédiate d'un **Pass Officiel d'Inscription** avec référence unique, récapitulatif des dates/lieux, et option de téléchargement/impression.
  - Célébration visuelle (confettis canvas 60fps sans dépendance externe).
- **Pages & Sections Complètes** :
  - **Accueil** : Hero avec statistiques, mot officiel du commissariat avec lettrine, bandeau du Guide officiel, 3 formations phares, partenaires.
  - **Formations & Ateliers** : Catalogue complet avec filtre par catégorie (Sculpture, Art plastique, Masterclass, etc.) et recherche instantanée.
  - **À Propos** : Genèse du festival, thème "Blessures Invisibles & Résilience", espace vidéo immersif, figures artistiques (Norbert DOSSOU, Charlemagne HOUNKPATIN, Joshuah QUENUM, Boris FIGNON), photo d'équipe.
  - **Devenir Partenaire / Volontaire** : Formulaire dédié pour les sponsors, mécènes et bénévoles.
  - **Navigation & Mobile** : Header sticky avec topbar d'infos et menu mobile responsive soigné.

---

## 🚀 Démarrage Local

```bash
# Installer les dépendances (si pas déjà fait)
npm install

# Lancer le serveur de développement Vite
npm run dev
```

L'application sera accessible sur `http://localhost:5173`.

---

## 🌐 Déploiement sur Vercel

Le projet est configuré avec un fichier `vercel.json` prêt pour la production.

### Option 1 : Déploiement direct via Vercel CLI (Ultra-rapide)
```bash
npx vercel
```
Suivez les instructions en ligne de commande (acceptez les paramètres par défaut). Pour déployer directement en production :
```bash
npx vercel --prod
```

### Option 2 : Déploiement via GitHub / GitLab
1. Créez un dépôt sur GitHub et poussez le code :
   ```bash
   git init
   git add .
   git commit -m "Initial commit - FISCO Website"
   git branch -M main
   git remote add origin <URL_DE_VOTRE_DEPOT>
   git push -u origin main
   ```
2. Connectez-vous sur [vercel.com](https://vercel.com).
3. Cliquez sur **Add New Project**, importez le dépôt GitHub.
4. Vercel détecte automatiquement **Vite** :
   - Build Command : `npm run build`
   - Output Directory : `dist`
5. Cliquez sur **Deploy**. Le site est en ligne en quelques secondes avec certificat SSL et CDN mondial.
