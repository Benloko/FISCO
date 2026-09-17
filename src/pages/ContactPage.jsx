import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, ChevronDown, CheckCircle2, AlertCircle } from 'lucide-react';
import './ContactPage.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
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
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        submitted: true,
        loading: false,
        success: false,
        message: 'Veuillez renseigner tous les champs obligatoires.'
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
          _subject: `Nouveau message FISCO de ${formData.name} (${formData.subject})`,
          "Nom et Prénoms": formData.name,
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
          message: 'Merci ! Votre message a bien été envoyé. Notre équipe vous répondra rapidement.'
        });
        setFormData({
          name: '',
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
        message: "Une erreur est survenue lors de l'envoi. Veuillez vérifier votre connexion ou nous écrire directement à fisco2026@gmail.com."
      });
    }
  };

  return (
    <div className="contact-page-root fade-in">
      {/* 1. HERO BANNER - Exact reproduction */}
      <section className="contact-hero-section">
        <div className="contact-hero-bg">
          <img
            src="/assets/images/sculptor-chisel.jpg"
            alt="Sculpture sur pierre en plein travail"
            className="contact-hero-bg-img"
          />
          <div className="contact-hero-overlay" />
        </div>

        <div className="contact-hero-content">
          <h1 className="contact-hero-title">Contactez-Nous</h1>
        </div>
      </section>

      {/* 2. SECTION PRINCIPALE : INFOS & FORMULAIRE */}
      <section className="contact-main-section">
        <div className="contact-container">
          <div className="contact-layout-grid">
            
            {/* Colonne gauche : Coordonnées */}
            <div className="contact-info-col">
              <h2 className="contact-info-title">Envoyez-nous un message</h2>
              <p className="contact-info-subtitle">
                Remplissez le formulaire ci-dessous pour nous contacter directement.
              </p>

              <ul className="contact-details-list">
                <li className="contact-detail-item">
                  <div className="contact-detail-icon-wrap" aria-hidden="true">
                    <MapPin />
                  </div>
                  <span className="contact-detail-text">Cotonou/ Fidjrossè BP 1234</span>
                </li>

                <li>
                  <a href="tel:+229010203040506" className="contact-detail-item">
                    <div className="contact-detail-icon-wrap" aria-hidden="true">
                      <Phone />
                    </div>
                    <span className="contact-detail-text">+229 01 02 03 04 05 06</span>
                  </a>
                </li>

                <li>
                  <a href="mailto:fisco2026@gmail.com" className="contact-detail-item">
                    <div className="contact-detail-icon-wrap" aria-hidden="true">
                      <Mail />
                    </div>
                    <span className="contact-detail-text">fisco2026@gmail.com</span>
                  </a>
                </li>

                <li>
                  <a 
                    href="https://www.notresite.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-detail-item"
                  >
                    <div className="contact-detail-icon-wrap" aria-hidden="true">
                      <Globe />
                    </div>
                    <span className="contact-detail-text">www.notresite.com</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Colonne droite : Formulaire */}
            <div className="contact-form-col">
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                
                {status.submitted && status.message && (
                  <div className={`contact-alert ${status.success ? 'contact-alert-success' : 'contact-alert-error'}`}>
                    {status.success ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                    <span>{status.message}</span>
                  </div>
                )}

                {/* Ligne 1 : Nom et Prénoms & Email */}
                <div className="contact-form-row">
                  <div className="contact-field-group">
                    <label htmlFor="contact-name" className="contact-field-label">
                      Nom et Prénoms
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nom et prénoms"
                      className="contact-input"
                      required
                    />
                  </div>

                  <div className="contact-field-group">
                    <label htmlFor="contact-email" className="contact-field-label">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="contact-input"
                      required
                    />
                  </div>
                </div>

                {/* Ligne 2 : Sujet avec sélecteur personnalisé */}
                <div className="contact-field-group">
                  <label htmlFor="contact-subject" className="contact-field-label">
                    Sujet
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
                    <div className="contact-select-icon" aria-hidden="true">
                      <ChevronDown size={20} />
                    </div>
                  </div>
                </div>

                {/* Ligne 3 : Message */}
                <div className="contact-field-group">
                  <label htmlFor="contact-message" className="contact-field-label">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ecrivez-nous"
                    className="contact-textarea"
                    rows={6}
                    required
                  />
                </div>

                {/* Bouton Envoyer */}
                <button
                  type="submit"
                  disabled={status.loading}
                  className="contact-submit-btn"
                >
                  {status.loading ? 'Envoi en cours...' : 'Envoyer'}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
