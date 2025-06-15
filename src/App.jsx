import React from 'react';
import './index.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import IntroSection from "./components/IntroSection";
import FeaturesSection from "./components/FeaturesSection";
import AccessCard from "./components/AccessCard";

import womanBuyer from './assets/images/buyer-woman-strath.jpg';
import vendorImage from './assets/images/vendor-strath.jpg';

export default function App() {
    return (
        <>
            <Header />

            <main className="container">
                <IntroSection />

                <section className="access-options">
                    <h2>How would you like to access our platform?</h2>
                    <div className="access-cards">
                        <AccessCard
                            imgSrc={womanBuyer}
                            alt="Buyer"
                            title="Shop & Discover"
                            description="Browse unique products from vendors and find amazing deals"
                            buttonText="I'm a Buyer"
                            to="/buyers/home"
                            buttonClass="btn-buyer"
                        />
                        <AccessCard
                            imgSrc={vendorImage}
                            alt="Vendor"
                            title="Sell & Connect"
                            description="Showcase your products and connect with potential customers"
                            buttonText="I'm a Vendor"
                            to="/vendors/login"
                            buttonClass="btn-vendor"
                        />
                    </div>
                </section>

                <FeaturesSection />
            </main>

            <Footer />
        </>
    );
}