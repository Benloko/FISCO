import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import './PartnerModal.css';

export default function PartnerModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    type: 'sponsor',
    nom: '',
    organisation: '',
    email: '',
    telephone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nom || !formData.email || !formData.telephone) {
      alert("Veuillez remplir les informations obligatoires (Nom, Email, Téléphone).");
      return;
    }
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop fade-in" onClick={handleClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={handleClose} aria-label="Fermer">
          <X size={22} />
        </button>

        {submitted ? (
          <div className="modal-success-body">
            <CheckCircle2 size={54} className="modal-success-icon" />
            <h2>Demande de Partenariat Enregistrée !</h2>
            <p>
              Merci <strong>{formData.nom}</strong>. Le comité d'organisation du FISCO vous contactera sous 24h au <strong>{formData.telephone}</strong> ou par email à <strong>{formData.email}</strong>.
            </p>
            <button className="btn-modal-submit" onClick={handleClose}>
              Fermer
            </button>
          </div>
        ) : (
          <div className="modal-form-body">
            <h2 className="modal-title">Devenir Partenaire ou Volontaire</h2>
            <p className="modal-subtitle">
              Participez au rayonnement du Festival International de Sculpture de Cotonou 2026.
            </p>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="modal-radio-group">
                {[
                  { id: 'sponsor', label: 'Entreprise / Sponsor' },
                  { id: 'mecene', label: 'Mécène Culturel' },
                  { id: 'volontaire', label: 'Bénévole / Volontaire' }
                ].map(opt => (
                  <label 
                    key={opt.id} 
                    className={`modal-radio-label ${formData.type === opt.id ? 'is-selected' : ''}`}
                  >
                    <input
                      type="radio"
                      name="type"
                      value={opt.id}
                      checked={formData.type === opt.id}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <span>{opt.label}</span>
                  </label>
                ))}
              </div>

              <div className="modal-fields-grid">
                <div className="modal-field">
                  <label className="modal-label">Nom et Prénom *</label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    placeholder="Votre nom complet"
                    required
                    className="modal-input"
                  />
                </div>

                <div className="modal-field">
                  <label className="modal-label">Structure / Entreprise</label>
                  <input
                    type="text"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                    placeholder="Nom de l'organisme"
                    className="modal-input"
                  />
                </div>

                <div className="modal-field">
                  <label className="modal-label">Adresse Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre.email@domaine.com"
                    required
                    className="modal-input"
                  />
                </div>

                <div className="modal-field">
                  <label className="modal-label">Téléphone / WhatsApp *</label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    placeholder="+229 97 00 00 00"
                    required
                    className="modal-input"
                  />
                </div>
              </div>

              <div className="modal-field">
                <label className="modal-label">Message ou proposition de collaboration</label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez vos attentes ou vos propositions de soutien..."
                  className="modal-textarea"
                />
              </div>

              <button type="submit" className="btn-modal-submit">
                Soumettre ma demande
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
