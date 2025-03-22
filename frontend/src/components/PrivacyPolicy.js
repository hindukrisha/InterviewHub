// components/PrivacyPolicy.js
import React from 'react';
import '../styles/PrivacyPolicy.css';

const PrivacyPolicy = () => (
  <div className="privacy-policy">
    <header className="privacy-header">
      <h1>Privacy Policy</h1>
      <p>Your privacy is important to us. Please read our policy carefully.</p>
    </header>
    <section className="privacy-section">
      <h2>Information We Collect</h2>
      <p>
        We collect personal information such as your name, email address, and usage data to provide and improve our services.
      </p>
    </section>
    <section className="privacy-section">
      <h2>How We Use Your Information</h2>
      <p>
        Your information is used to personalize your experience, respond to your inquiries, and send periodic emails regarding your order or other products and services.
      </p>
    </section>
    <section className="privacy-section">
      <h2>Data Security</h2>
      <p>
        We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.
      </p>
    </section>
    <section className="privacy-section">
      <h2>Cookies</h2>
      <p>
        Our website uses cookies to enhance user experience. You can choose to disable cookies through your browser settings.
      </p>
    </section>
    <section className="privacy-section">
      <h2>Third-Party Services</h2>
      <p>
        We do not sell, trade, or rent your personal information to others. We may share generic aggregated demographic information not linked to any personal information regarding visitors and users with our business partners and advertisers.
      </p>
    </section>
    <section className="privacy-section">
      <h2>Changes to Our Privacy Policy</h2>
      <p>
        We may update our Privacy Policy from time to time. We encourage you to review this page periodically for any changes.
      </p>
    </section>
    <section className="privacy-section">
      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at support@example.com.
      </p>
    </section>
  </div>
);

export default PrivacyPolicy;
