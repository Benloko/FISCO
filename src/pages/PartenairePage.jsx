import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, X, FileText } from 'lucide-react';
import './PartenairePage.css';

export default function PartenairePage() {
  const [formData, setFormData] = useState({
    nom: '',
    prenoms: '',
    email: '',
    telephone: '',
    acceptedTerms: false
  });

  const [status, setStatus] = useState({
    submitted: false,
    loading: false,
    success: false,
    message: ''
  });

  const [showClauseModal, setShowClauseModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nom.trim() || !formData.prenoms.trim() || !formData.email.trim() || !formData.telephone.trim()) {
      setStatus({
        submitted: true,
        loading: false,
        success: false,
        message: 'Veuillez remplir tous les champs obligatoires (Nom, Prénoms, E-mail, Téléphone).'
      });
      return;
    }

    if (!formData.acceptedTerms) {
      setStatus({
        submitted: true,
        loading: false,
        success: false,
        message: 'Veuillez cocher la case pour accepter de devenir partenaire.'
      });
      return;
    }

    setStatus({ submitted: true, loading: true, success: false, message: '' });

    try {
      const response = await fetch("https://formsubmit.co/ajax/bloko3565@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `Nouvelle demande de Partenariat FISCO: ${formData.nom} ${formData.prenoms}`,
          "Nom": formData.nom,
          "Prénoms": formData.prenoms,
          "Email": formData.email,
          "Téléphone": formData.telephone,
          "Statut": "A accepté les clauses et contrat de partenariat",
          _replyto: formData.email,
          _template: "table"
        })
      });

      if (response.ok) {
        setStatus({
          submitted: true,
          loading: false,
          success: true,
          message: 'Félicitations ! Votre demande de partenariat a été transmise au comité du FISCO. Nous prendrons contact avec vous très prochainement.'
        });
        setFormData({
          nom: '',
          prenoms: '',
          email: '',
          telephone: '',
          acceptedTerms: false
        });
      } else {
        throw new Error("Erreur de transmission");
      }
    } catch (error) {
      setStatus({
        submitted: true,
        loading: false,
        success: false,
        message: "Une erreur est survenue lors de l'envoi. Veuillez vérifier votre connexion ou nous contacter à fisco2026@gmail.com."
      });
    }
  };

  return (
    <div className="partenaire-page-root fade-in">
      {/* 1. HERO BANNER */}
      <section className="partenaire-hero-section">
        <div className="partenaire-hero-bg">
          <img
            src="/assets/images/sculptor-chisel.jpg"
            alt="Sculpture sur pierre en plein travail"
            className="partenaire-hero-bg-img"
          />
          <div className="partenaire-hero-overlay" />
        </div>

        <div className="partenaire-hero-content">
          <h1 className="partenaire-hero-title">Devenir Partenaire</h1>
        </div>
      </section>

      {/* 2. SECTION PRINCIPALE */}
      <section className="partenaire-main-section">
        <div className="partenaire-container">
          <div className="partenaire-layout-grid">

            {/* Colonne gauche : Texte & Engagement */}
            <div className="partenaire-info-col">
              <h2 className="partenaire-info-title">Rejoignez-nous dans cette aventure</h2>
              <p className="partenaire-info-text">
                Raison pour lequel devenir partenaire. Pourquoi nous rejoindre...Raison pour lequel devenir partenaire. Pourquoi nous rejoindre...Raison pour lequel devenir partenaire. Pourquoi nous rejoindre...Raison pour lequel devenir partenaire. Pourquoi nous rejoindre...Raison pour lequel devenir partenaire. Pourquoi nous rejoindre...Raison pour lequel devenir partenaire. Pourquoi nous rejoindre...
              </p>

              <div>
                <button
                  type="button"
                  onClick={() => setShowClauseModal(true)}
                  className="partenaire-clause-link"
                >
                  Clause et contrat de partenariat
                </button>
              </div>
            </div>

            {/* Colonne droite : Formulaire */}
            <div className="partenaire-form-col">
              <form className="partenaire-form" onSubmit={handleSubmit} noValidate>
                
                {status.submitted && status.message && (
                  <div className={`partenaire-alert ${status.success ? 'partenaire-alert-success' : 'partenaire-alert-error'}`}>
                    {status.success ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                    <span>{status.message}</span>
                  </div>
                )}

                {/* Champ Nom */}
                <div className="partenaire-field-group">
                  <label htmlFor="partenaire-nom" className="partenaire-field-label">
                    Nom
                  </label>
                  <input
                    id="partenaire-nom"
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className="partenaire-input"
                    required
                  />
                </div>

                {/* Champ Prénoms */}
                <div className="partenaire-field-group">
                  <label htmlFor="partenaire-prenoms" className="partenaire-field-label">
                    Prénoms
                  </label>
                  <input
                    id="partenaire-prenoms"
                    type="text"
                    name="prenoms"
                    value={formData.prenoms}
                    onChange={handleChange}
                    placeholder="Votre prénoms"
                    className="partenaire-input"
                    required
                  />
                </div>

                {/* Champ E-mail */}
                <div className="partenaire-field-group">
                  <label htmlFor="partenaire-email" className="partenaire-field-label">
                    E-mail
                  </label>
                  <input
                    id="partenaire-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="partenaire-input"
                    required
                  />
                </div>

                {/* Champ Téléphone */}
                <div className="partenaire-field-group">
                  <label htmlFor="partenaire-tel" className="partenaire-field-label">
                    Téléphone
                  </label>
                  <input
                    id="partenaire-tel"
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    placeholder="Téléphone"
                    className="partenaire-input"
                    required
                  />
                </div>

                {/* Lien Clause & Case à cocher */}
                <div className="partenaire-form-clause-row">
                  <button
                    type="button"
                    onClick={() => setShowClauseModal(true)}
                    className="partenaire-form-clause-link"
                  >
                    Clause et contrat de partenariat
                  </button>
                </div>

                <label className="partenaire-checkbox-label">
                  <input
                    type="checkbox"
                    name="acceptedTerms"
                    checked={formData.acceptedTerms}
                    onChange={handleChange}
                    className="partenaire-checkbox"
                  />
                  <span>J’accepte devenir partenaire</span>
                </label>

                {/* Bouton de soumission */}
                <button
                  type="submit"
                  disabled={status.loading}
                  className="partenaire-submit-btn"
                >
                  {status.loading ? 'Envoi en cours...' : 'Devenir partenaire'}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* MODAL CLAUSE ET CONTRAT DE PARTENARIAT */}
      {showClauseModal && (
        <div className="clause-modal-overlay" onClick={() => setShowClauseModal(false)}>
          <div className="clause-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="clause-modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FileText size={20} color="#42210B" />
                <h3 className="clause-modal-title">Clause et Contrat de Partenariat</h3>
              </div>
              <button
                type="button"
                className="clause-modal-close"
                onClick={() => setShowClauseModal(false)}
                aria-label="Fermer"
              >
                <X size={20} />
              </button>
            </div>

            <div className="clause-modal-body">
              <h4>1. Objet du Partenariat</h4>
              <p>
                Le présent contrat a pour objet de définir les modalités de collaboration et de soutien entre le Festival International de Sculpture de Cotonou (FISCO) et la partie signataire, dans le cadre de la promotion culturelle, des résidences artistiques et des expositions publiques.
              </p>

              <h4>2. Engagements du Festival</h4>
              <p>
                Le FISCO s'engage à assurer la visibilité du partenaire sur l'ensemble des supports de communication officiels (site web, affichage urbain, catalogues, mentions presse et réseaux sociaux), conformément à la formule de partenariat retenue.
              </p>

              <h4>3. Engagements du Partenaire</h4>
              <p>
                Le partenaire s'engage à apporter son appui financier, matériel ou logistique selon les termes convenus avec le comité d'organisation du festival.
              </p>

              <h4>4. Confidentialité et Éthique</h4>
              <p>
                Les deux parties conviennent de préserver la confidentialité des échanges et de promouvoir les valeurs de respect, de valorisation du patrimoine artistique et d'inclusion socioculturelle.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
