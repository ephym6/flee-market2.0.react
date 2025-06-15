import React from 'react';
import '/src/css/index.css';

export default function FeaturesSection() {
    return (
        <section className="features-section">
            <div className="features-grid">
                <div className="feature-card">
                    <div className="feature-icon fast">⚡</div>
                    <div className="feature-title">Fast & Easy</div>
                    <div className="feature-description">Quick setup for vendors and seamless browsing for buyers</div>
                </div>

                <div className="feature-card">
                    <div className="feature-icon community">🏥</div>
                    <div className="feature-title">Local Community</div>
                    <div className="feature-description">Connect with vendors and buyers in your local area</div>
                </div>

                <div className="feature-card">
                    <div className="feature-icon trusted">🛡️</div>
                    <div className="feature-title">Trusted Platform</div>
                    <div className="feature-description">Safe and secure marketplace for all your transactions</div>
                </div>

            </div>
        </section>
    );
}