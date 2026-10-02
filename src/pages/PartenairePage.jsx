import React, { useState } from 'react';
import { Mail, Phone, ArrowRight, CheckCircle2, AlertCircle, ChevronDown } from 'lucide-react';
import './PartenairePage.css';

export default function PartenairePage() {
  const [formData, setFormData] = useState({
    typePartenariat: '',
    email: '',
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

    if (!formData.typePartenariat) {
      setStatus({
        submitted: true,
        loading: false,
        success: false,
        message: 'Veuillez choisir un type de partenariat.'
      });
      return;
    }

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
        message: 'Veuillez rédiger votre message ou proposition.'
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
          _subject: `Nouvelle demande de Partenariat FISCO: ${formData.typePartenariat}`,
          "Type de Partenariat": formData.typePartenariat,
          "Email": formData.email,
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
          message: 'Votre proposition a bien été transmise. Nous prendrons contact sous 48h.'
        });
        setFormData({
          typePartenariat: '',
          email: '',
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
        message: "Une erreur est survenue lors de l'envoi. Écrivez-nous à fisco2026@gmail.com."
      });
    }
  };

  return (
    <div className="partenaire-page-root fade-in">
      {/* 1. HERO BANNER COMPACT */}
      <section className="partenaire-hero-section">
        <div className="partenaire-hero-bg">
          <img
            src="/assets/images/sculptor-chisel.jpg"
            alt="Sculpture contemporaine au burin"
            className="partenaire-hero-bg-img"
          />
          <div className="partenaire-hero-overlay" />
        </div>

        <div className="partenaire-hero-content">
          <h1 className="partenaire-hero-title">Devenir Partenaire</h1>
          <p className="partenaire-hero-subline">
            Construisons ensemble un carrefour artistique d'excellence et d'émancipation culturelle à Ouidah.
          </p>
        </div>
      </section>

      {/* 2. SECTION PRINCIPALE SANS CARTE BLANCHE */}
      <section className="partenaire-main-section">
        <div className="partenaire-container">
          <div className="partenaire-layout-grid">

            {/* Colonne gauche : Texte & Les 2 Coordonnées */}
            <div className="partenaire-info-col">
              <h2 className="partenaire-info-title">Rejoignez-nous dans cette aventure</h2>
              <div className="partenaire-title-bar" />
              
              <p className="partenaire-info-text">
                Associez votre organisation à un événement culturel international célébrant la sculpture contemporaine, les jeunes talents et le patrimoine vivant d'Ouidah.
              </p>
              
              <p className="partenaire-info-text-secondary">
                Mécénat culturel, appui institutionnel, soutien technique ou visibilité médiatique : nous développons des partenariats sur-mesure à fort impact.
              </p>

              {/* Les 2 seules coordonnées sur la MÊME LIGNE sans carte */}
              <div className="partenaire-coords-block">
                <span className="partenaire-coords-heading">Nos coordonnées directes</span>
                <div className="partenaire-coords-row">
                  
                  {/* Email */}
                  <a href="mailto:fisco2026@gmail.com" className="partenaire-coord-inline">
                    <div className="partenaire-coord-icon-box" aria-hidden="true">
                      <Mail size={16} />
                    </div>
                    <div className="partenaire-coord-detail">
                      <span className="partenaire-coord-label">Email</span>
                      <span className="partenaire-coord-val">fisco2026@gmail.com</span>
                    </div>
                  </a>

                  {/* Téléphone */}
                  <a href="tel:+2290102030405" className="partenaire-coord-inline">
                    <div className="partenaire-coord-icon-box" aria-hidden="true">
                      <Phone size={16} />
                    </div>
                    <div className="partenaire-coord-detail">
                      <span className="partenaire-coord-label">Téléphone</span>
                      <span className="partenaire-coord-val">+229 01 02 03 04 05</span>
                    </div>
                  </a>

                </div>
              </div>
            </div>

            {/* Colonne droite : Formulaire sans carte blanche (intégré directement) */}
            <div className="partenaire-form-col">
              <div className="partenaire-form-seamless">
                <div className="partenaire-form-header">
                  <h3 className="partenaire-form-title">Demande de Partenariat</h3>
                  <p className="partenaire-form-desc">
                    Renseignez vos informations ci-dessous. Notre équipe vous répond sous 48h.
                  </p>
                </div>

                {status.submitted && status.message && (
                  <div className={`partenaire-alert ${status.success ? 'partenaire-alert-success' : 'partenaire-alert-error'}`}>
                    {status.success ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                    <span>{status.message}</span>
                  </div>
                )}

                <form className="partenaire-form" onSubmit={handleSubmit} noValidate>
                  
                  {/* 1. Type de partenariat */}
                  <div className="partenaire-field-group">
                    <label htmlFor="partenaire-type" className="partenaire-field-label">
                      Type de partenariat <span className="partenaire-required">*</span>
                    </label>
                    <div className="partenaire-select-wrapper">
                      <select
                        id="partenaire-type"
                        name="typePartenariat"
                        value={formData.typePartenariat}
                        onChange={handleChange}
                        className="partenaire-select"
                        required
                      >
                        <option value="" disabled>Sélectionnez une formule...</option>
                        <option value="Partenariat Mécénat & Soutien Financier">Partenariat Mécénat & Soutien Financier</option>
                        <option value="Partenariat Institutionnel & Collectivités">Partenariat Institutionnel & Collectivités</option>
                        <option value="Partenariat Logistique, Matériel & Technique">Partenariat Logistique, Matériel & Technique</option>
                        <option value="Partenariat Médias & Visibilité Presse">Partenariat Médias & Visibilité Presse</option>
                        <option value="Autre projet de collaboration">Autre projet de collaboration</option>
                      </select>
                      <ChevronDown className="partenaire-select-arrow" size={15} aria-hidden="true" />
                    </div>
                  </div>

                  {/* 2. E-mail */}
                  <div className="partenaire-field-group">
                    <label htmlFor="partenaire-email" className="partenaire-field-label">
                      Adresse e-mail <span className="partenaire-required">*</span>
                    </label>
                    <input
                      id="partenaire-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nom@organisation.com"
                      className="partenaire-input"
                      required
                    />
                  </div>

                  {/* 3. Zone de message */}
                  <div className="partenaire-field-group">
                    <label htmlFor="partenaire-message" className="partenaire-field-label">
                      Votre message ou proposition <span className="partenaire-required">*</span>
                    </label>
                    <textarea
                      id="partenaire-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez brièvement votre structure ou vos souhaits de partenariat..."
                      rows={3}
                      className="partenaire-textarea"
                      required
                    />
                  </div>

                  {/* 4. Bouton d'envoi */}
                  <div className="partenaire-submit-wrapper">
                    <button
                      type="submit"
                      disabled={status.loading}
                      className="partenaire-submit-btn-compact"
                    >
                      <span>{status.loading ? 'Envoi...' : 'Devenir partenaire'}</span>
                      <ArrowRight className="partenaire-submit-icon" size={15} />
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
