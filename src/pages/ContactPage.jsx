import React, { useState } from 'react';
import { Phone, Mail, Globe, ChevronDown, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import './ContactPage.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: '',
    subject: "Plus d'informations",
    message: ''
  });

  const [status, setStatus] = useState({
    submitted: false,
    loading: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStatus({
        submitted: true,
        loading: false,
        success: false,
        message: 'Veuillez renseigner une adresse e-mail valide.'
      });
      return;
    }

    if (!formData.message.trim()) {
      setStatus({
        submitted: true,
        loading: false,
        success: false,
        message: 'Veuillez saisir votre message.'
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
          _subject: `Nouveau message FISCO (${formData.subject})`,
          "Email": formData.email,
          "Sujet": formData.subject,
          "Message": formData.message,
          _replyto: formData.email,
          _template: "table"
        })
      });

      if (response.ok) {
        setStatus({
          submitted: true,
          loading: false,
          success: true,
          message: 'Merci pour votre message ! Notre équipe vous répondra dans les plus brefs délais.'
        });
        setFormData({
          email: '',
          subject: "Plus d'informations",
          message: ''
        });
      } else {
        throw new Error("Erreur de transmission");
      }
    } catch (error) {
      setStatus({
        submitted: true,
        loading: false,
        success: false,
        message: "Une erreur est survenue lors de l'envoi. Veuillez vérifier votre connexion ou nous contacter directement à fisco2026@gmail.com."
      });
    }
  };

  return (
    <div className="contact-page-root fade-in">
      {/* 1. HERO BANNER COMPACT */}
      <section className="contact-hero-section">
        <div className="contact-hero-bg">
          <img
            src="/assets/images/sculptor-chisel.jpg"
            alt="Sculpture contemporaine au burin"
            className="contact-hero-bg-img"
          />
          <div className="contact-hero-overlay" />
        </div>

        <div className="contact-hero-content">
          <h1 className="contact-hero-title">Contactez-Nous</h1>
          <p className="contact-hero-subline">
            Une question ou un projet ? Notre équipe est à votre écoute pour vous accompagner.
          </p>
        </div>
      </section>

      {/* 2. SECTION PRINCIPALE : INFOS & FORMULAIRE */}
      <section className="contact-main-section">
        <div className="contact-container">
          <div className="contact-layout-grid">
            
            {/* Colonne gauche : Coordonnées et Accueil */}
            <div className="contact-info-col">
              <span className="contact-section-tag">ÉCHANGE & ACCÈS</span>
              <h2 className="contact-info-title">Envoyez-nous un message</h2>
              <div className="contact-title-bar" />
              
              <p className="contact-info-subtitle">
                Remplissez le formulaire ou contactez-nous directement via nos coordonnées officielles.
              </p>

              <div className="contact-details-list">
                {/* Téléphone */}
                <a href="tel:+2290102030405" className="contact-detail-item">
                  <div className="contact-detail-icon-wrap" aria-hidden="true">
                    <Phone size={16} />
                  </div>
                  <div className="contact-detail-content">
                    <span className="contact-detail-label">Téléphone & WhatsApp</span>
                    <span className="contact-detail-val">+229 01 02 03 04 05</span>
                  </div>
                </a>

                {/* Email */}
                <a href="mailto:fisco2026@gmail.com" className="contact-detail-item">
                  <div className="contact-detail-icon-wrap" aria-hidden="true">
                    <Mail size={16} />
                  </div>
                  <div className="contact-detail-content">
                    <span className="contact-detail-label">Courriel officiel</span>
                    <span className="contact-detail-val">fisco2026@gmail.com</span>
                  </div>
                </a>

                {/* Site Web */}
                <a 
                  href="https://www.fisco-benin.org" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-detail-item"
                >
                  <div className="contact-detail-icon-wrap" aria-hidden="true">
                    <Globe size={16} />
                  </div>
                  <div className="contact-detail-content">
                    <span className="contact-detail-label">Site Web</span>
                    <span className="contact-detail-val">www.fisco-benin.org</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Colonne droite : Formulaire sans Nom ni Prénoms, bouton compact */}
            <div className="contact-form-col">
              <div className="contact-form-wrapper">
                <div className="contact-form-header">
                  <h3 className="contact-form-title">Formulaire de contact</h3>
                  <p className="contact-form-desc">
                    Renseignez votre e-mail et votre message ci-dessous.
                  </p>
                </div>

                {status.submitted && status.message && (
                  <div className={`contact-alert ${status.success ? 'contact-alert-success' : 'contact-alert-error'}`}>
                    {status.success ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                    <span>{status.message}</span>
                  </div>
                )}

                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  
                  {/* 1. Email (Nom et Prénoms retirés) */}
                  <div className="contact-field-group">
                    <label htmlFor="contact-email" className="contact-field-label">
                      Adresse e-mail <span className="contact-required">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nom@exemple.com"
                      className="contact-input"
                      required
                    />
                  </div>

                  {/* 2. Sujet */}
                  <div className="contact-field-group">
                    <label htmlFor="contact-subject" className="contact-field-label">
                      Sujet de votre message
                    </label>
                    <div className="contact-select-wrapper">
                      <select
                        id="contact-subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="contact-select"
                      >
                        <option value="Plus d'informations">Plus d’informations</option>
                        <option value="Devenir Partenaire">Devenir Partenaire</option>
                        <option value="Candidature Artiste / Sculpteur">Candidature Artiste / Sculpteur</option>
                        <option value="Presse & Médias">Presse & Médias</option>
                        <option value="Autre demande">Autre demande</option>
                      </select>
                      <ChevronDown className="contact-select-icon" size={16} aria-hidden="true" />
                    </div>
                  </div>

                  {/* 3. Message */}
                  <div className="contact-field-group">
                    <label htmlFor="contact-message" className="contact-field-label">
                      Votre message <span className="contact-required">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Écrivez votre message ici..."
                      className="contact-textarea"
                      rows={4}
                      required
                    />
                  </div>

                  {/* 4. Bouton Envoyer compact et élégant (fini le gros bouton trop large) */}
                  <div className="contact-submit-wrapper">
                    <button
                      type="submit"
                      disabled={status.loading}
                      className="contact-submit-btn-compact"
                    >
                      <span>{status.loading ? 'Envoi...' : 'Envoyer'}</span>
                      <ArrowRight className="contact-submit-icon" size={15} />
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
