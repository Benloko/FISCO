import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, CheckCircle2, Send, Sparkles, AlertCircle } from 'lucide-react';
import { APPELS_CANDIDATURE, CURRENT_CALL } from '../data/candidaturesData';
import './CandidatureModal.css';

export default function CandidatureModal({ isOpen, onClose, initialCallId }) {
  const [formData, setFormData] = useState({
    callId: initialCallId || CURRENT_CALL.id,
    nom: '',
    email: '',
    telephone: '',
    paysVille: '',
    discipline: 'Sculpture sur pierre & marbre',
    portfolioUrl: '',
    demarche: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Verrouille le défilement de la page lorsque la modale est ouverte
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const activeCall =
    APPELS_CANDIDATURE.find((c) => c.id === formData.callId) || CURRENT_CALL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nom.trim()) {
      setErrorMessage('Veuillez renseigner votre nom complet.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Veuillez renseigner une adresse email valide.');
      return;
    }
    if (!formData.telephone.trim()) {
      setErrorMessage('Veuillez renseigner votre numéro de téléphone ou WhatsApp.');
      return;
    }

    setLoading(true);

    // Simulation de soumission sécurisée
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  const handleClose = () => {
    setSubmitted(false);
    setLoading(false);
    setErrorMessage('');
    onClose();
  };

  const modalContent = (
    <div className="candidature-modal-backdrop fade-in" onClick={handleClose}>
      <div
        className="candidature-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-candidature-title"
      >
        {/* Bouton de fermeture */}
        <button
          className="candidature-modal-close"
          onClick={handleClose}
          type="button"
          aria-label="Fermer la fenêtre d'inscription"
        >
          <X size={20} />
        </button>

        {submitted ? (
          /* ÉCRAN DE CONFIRMATION / SUCCÈS */
          <div className="candidature-success-view">
            <div className="candidature-success-icon-wrap">
              <CheckCircle2 size={58} className="candidature-check-icon" />
            </div>
            <h2 className="candidature-success-title">
              Candidature enregistrée avec succès !
            </h2>
            <p className="candidature-success-desc">
              Merci <strong>{formData.nom}</strong>. Votre dossier pour l'appel{' '}
              <strong>« {activeCall.title} »</strong> a bien été transmis au comité artistique du FISCO 2026.
            </p>
            <div className="candidature-success-recap">
              <div className="recap-row">
                <span className="recap-label">Email de suivi :</span>
                <span className="recap-val">{formData.email}</span>
              </div>
              <div className="recap-row">
                <span className="recap-label">WhatsApp :</span>
                <span className="recap-val">{formData.telephone}</span>
              </div>
              <div className="recap-row">
                <span className="recap-label">Discipline :</span>
                <span className="recap-val">{formData.discipline}</span>
              </div>
            </div>
            <p className="candidature-success-note">
              Notre équipe examinera votre profil et vous notifiera par email avant le <strong>{activeCall.timeline[2]?.date || '15 Mai 2026'}</strong>.
            </p>
            <button
              type="button"
              className="candidature-btn-finish"
              onClick={handleClose}
            >
              Fermer et retourner au site
            </button>
          </div>
        ) : (
          /* FORMULAIRE PRO ET PROPRE */
          <div className="candidature-form-view">
            <div className="candidature-form-header">
              <span className="candidature-badge-tag">
                <Sparkles size={13} className="badge-tag-icon" />
                FISCO 2026 • Formulaire Officiel
              </span>
              <h2 id="modal-candidature-title" className="candidature-modal-title">
                Inscription à l'Appel à Candidature
              </h2>
              <p className="candidature-modal-subtitle">
                Remplissez les informations ci-dessous avec précision pour soumettre votre dossier artistique au comité de sélection.
              </p>
            </div>

            {errorMessage && (
              <div className="candidature-error-box">
                <AlertCircle size={16} />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="candidature-actual-form" noValidate>
              {/* Choix de l'appel concerné */}
              <div className="candidature-form-group">
                <label htmlFor="callId" className="candidature-label">
                  Appel à candidature ciblé <span className="req-star">*</span>
                </label>
                <select
                  id="callId"
                  name="callId"
                  value={formData.callId}
                  onChange={handleChange}
                  className="candidature-select"
                >
                  {APPELS_CANDIDATURE.map((call) => (
                    <option key={call.id} value={call.id}>
                      {call.title} ({call.edition})
                    </option>
                  ))}
                </select>
              </div>

              {/* Champ 1 : Nom complet */}
              <div className="candidature-form-group">
                <label htmlFor="nom" className="candidature-label">
                  Nom & Prénoms complets <span className="req-star">*</span>
                </label>
                <input
                  id="nom"
                  name="nom"
                  type="text"
                  placeholder="Ex: Cyrille DOSSOU"
                  value={formData.nom}
                  onChange={handleChange}
                  className="candidature-input"
                  required
                />
              </div>

              {/* Champ 2 : Email */}
              <div className="candidature-form-group">
                <label htmlFor="email" className="candidature-label">
                  Adresse Email <span className="req-star">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="artiste@exemple.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="candidature-input"
                  required
                />
              </div>

              {/* Champ 3 : Téléphone / WhatsApp */}
              <div className="candidature-form-group">
                <label htmlFor="telephone" className="candidature-label">
                  Téléphone / WhatsApp <span className="req-star">*</span>
                </label>
                <input
                  id="telephone"
                  name="telephone"
                  type="tel"
                  placeholder="Ex: +229 97 00 00 00"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="candidature-input"
                  required
                />
              </div>

              {/* Champ 4 : Pays & Ville de résidence */}
              <div className="candidature-form-group">
                <label htmlFor="paysVille" className="candidature-label">
                  Pays & Ville de résidence
                </label>
                <input
                  id="paysVille"
                  name="paysVille"
                  type="text"
                  placeholder="Ex: Bénin, Ouidah"
                  value={formData.paysVille}
                  onChange={handleChange}
                  className="candidature-input"
                />
              </div>

              {/* Champ 5 : Matériau / Technique principale */}
              <div className="candidature-form-group">
                <label htmlFor="discipline" className="candidature-label">
                  Matériau / Technique principale <span className="req-star">*</span>
                </label>
                <select
                  id="discipline"
                  name="discipline"
                  value={formData.discipline}
                  onChange={handleChange}
                  className="candidature-select"
                >
                  <option value="Sculpture sur pierre & marbre">Sculpture sur pierre & marbre</option>
                  <option value="Sculpture sur bois précieux">Sculpture sur bois précieux</option>
                  <option value="Bronze & Fonderie d’art">Bronze & Fonderie d’art</option>
                  <option value="Métal & Matériaux recyclés">Métal & Matériaux recyclés</option>
                  <option value="Installations sculpturales monumentales">Installations sculpturales monumentales</option>
                  <option value="Techniques mixtes & Céramique">Techniques mixtes & Céramique</option>
                </select>
              </div>

              {/* Champ 6 : Lien Portfolio / Site web */}
              <div className="candidature-form-group">
                <label htmlFor="portfolioUrl" className="candidature-label">
                  Lien Portfolio / Site web / Instagram
                </label>
                <input
                  id="portfolioUrl"
                  name="portfolioUrl"
                  type="url"
                  placeholder="https://instagram.com/mon_art"
                  value={formData.portfolioUrl}
                  onChange={handleChange}
                  className="candidature-input"
                />
              </div>

              {/* Champ 7 : Démarche artistique / Note d'intention */}
              <div className="candidature-form-group">
                <label htmlFor="demarche" className="candidature-label">
                  Note d'intention / Démarche artistique (court résumé)
                </label>
                <textarea
                  id="demarche"
                  name="demarche"
                  rows={3}
                  placeholder="Décrivez en quelques phrases vos créations, votre rapport à la matière et ce qui vous motive à participer au FISCO 2026..."
                  value={formData.demarche}
                  onChange={handleChange}
                  className="candidature-textarea"
                />
              </div>

              {/* Bouton de soumission */}
              <div className="candidature-submit-wrap">
                <button
                  type="submit"
                  disabled={loading}
                  className="candidature-btn-submit"
                >
                  {loading ? (
                    <span className="candidature-loading-spinner">Envoi du dossier...</span>
                  ) : (
                    <>
                      <span>Soumettre ma candidature</span>
                      <Send size={16} className="btn-send-icon" />
                    </>
                  )}
                </button>
                <span className="candidature-submit-hint">
                  Dossier examiné en toute confidentialité par le jury du FISCO.
                </span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
