import React, { useState } from 'react';
import { Phone, Mail, Globe, ChevronDown, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import './ContactPage.css';

const FacebookIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 0 0 0-3.3 1.65 1.65 0 0 0 0 3.3m1.39 9.74v-8.37H5.07v8.37h2.78z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"/>
  </svg>
);

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
              <h2 className="contact-info-title">Nos coordonnées</h2>
              <div className="contact-title-bar" />
              
              <p className="contact-info-subtitle">
                Que ce soit pour une demande d’information, un projet de collaboration ou un simple échange artistique, notre équipe se tient à votre entière écoute pour vous accompagner.
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

              {/* Réseaux sociaux */}
              <div className="contact-social-section">
                <span className="contact-social-label">Rejoignez-nous sur les réseaux</span>
                <div className="contact-social-row">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="contact-social-btn" aria-label="Facebook">
                    <FacebookIcon />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-social-btn" aria-label="LinkedIn">
                    <LinkedinIcon />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="contact-social-btn" aria-label="Instagram">
                    <InstagramIcon />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="contact-social-btn" aria-label="YouTube">
                    <YoutubeIcon />
                  </a>
                </div>
              </div>
            </div>

            {/* Colonne droite : Formulaire sans Nom ni Prénoms, bouton compact */}
            <div className="contact-form-col">
              <div className="contact-form-wrapper">
                <div className="contact-form-header">
                  <h3 className="contact-form-title">Envoyez-nous un message</h3>
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
