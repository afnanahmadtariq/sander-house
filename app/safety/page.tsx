'use client';

import { useState, useCallback, useRef } from 'react';
import Link from 'next/link';
import Toast from '../components/Toast';
import Header, { HeaderRef } from '../components/Header';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon } from '../components/Icons';

export default function SafetyRulesPage() {
    const [toastVisible, setToastVisible] = useState(false);
    const [toastMsg, setToastMsg] = useState('');
    const headerRef = useRef<HeaderRef>(null);

    const showToast = useCallback((msg: string) => {
        setToastMsg(msg);
        setToastVisible(true);
    }, []);

    return (
        <>
            <Toast message={toastMsg} isVisible={toastVisible} onClose={() => setToastVisible(false)} />
            <Header ref={headerRef} onBookingSubmit={() => showToast('Visit scheduled successfully! We will contact you shortly.')} />

            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <div className="section-subtitle">SUPPORT</div>
                    <h1 className="page-hero-title">Safety Rules</h1>
                    <p className="page-hero-subtitle">Our guidelines to ensure safe, secure, and fraudulent-free interactions.</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="section container">
                <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '16px', lineHeight: 1.8, color: 'var(--text-muted)' }}>
                    <div style={{ padding: '30px', background: '#fff0f0', borderRadius: '20px', border: '1px solid #ef4444', marginBottom: '40px', color: '#b91c1c' }}>
                        <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Notice</h3>
                        <p>Sander House will never ask you to wire funds directly to a personal bank account before viewing a property. Always verify transaction instructions directly with your agent via phone.</p>
                    </div>

                    <h2 className="section-title" style={{ color: 'var(--primary-color)', fontSize: '28px', marginBottom: '20px' }}>1. Physical Viewings</h2>
                    <p style={{ marginBottom: '30px' }}>
                        All physical viewings must be scheduled natively through our platform or official contact lines. An accredited Sander House agent will always be present to conduct the tour and ensure the property is secure.
                    </p>

                    <h2 className="section-title" style={{ color: 'var(--primary-color)', fontSize: '28px', marginBottom: '20px' }}>2. Identity Verification</h2>
                    <p style={{ marginBottom: '30px' }}>
                        To ensure the safety of our sellers, all prospective buyers must undergo a standard identity check and pre-qualification process before scheduling high-value property viewings.
                    </p>

                    <h2 className="section-title" style={{ color: 'var(--primary-color)', fontSize: '28px', marginBottom: '20px' }}>3. Secure Payments</h2>
                    <p style={{ marginBottom: '30px' }}>
                        All monetary deposits and transaction finalizations must be processed through verified legal counsel or official escrow services. Do not honor requests for cryptocurrency transfers or third-party gift cards.
                    </p>

                    <h2 className="section-title" style={{ color: 'var(--primary-color)', fontSize: '28px', marginBottom: '20px' }}>4. Data Protection</h2>
                    <p style={{ marginBottom: '40px' }}>
                        Never share your social security numbers, banking credentials, or other sensitive personal information over email. Official documents are requested and stored over a dedicated encrypted portal only.
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer-bottom">
                <div>
                    <Link href="/" className="footer-logo">SANDER HOUSE</Link>
                    <p className="footer-desc">Experience luxury real estate services tailored to your unique lifestyle.</p>
                    <div style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
                        <a href="#" className="agent-social-btn" aria-label="Facebook"><FacebookIcon /></a>
                        <a href="#" className="agent-social-btn" aria-label="Twitter"><TwitterIcon /></a>
                        <a href="#" className="agent-social-btn" aria-label="Instagram"><InstagramIcon /></a>
                        <a href="#" className="agent-social-btn" aria-label="LinkedIn"><LinkedInIcon /></a>
                    </div>
                </div>
                <div className="footer-section">
                    <h4>Company</h4>
                    <div className="footer-links">
                        <Link href="/about">About Us</Link>
                        <Link href="/properties">Properties</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>
                <div className="footer-section">
                    <h4><Link href="/quick-links">Quick Links</Link></h4>
                    <div className="footer-links">
                        <Link href="/terms">Terms of Use</Link>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/pricing">Pricing</Link>
                    </div>
                </div>
                <div className="footer-section">
                    <h4><Link href="/support">Support</Link></h4>
                    <div className="footer-links">
                        <Link href="/help">Help Center</Link>
                        <Link href="/faqs">FAQs</Link>
                        <Link href="/safety">Safety Rules</Link>
                    </div>
                </div>
                <div className="footer-section">
                    <h4>Get In Touch</h4>
                    <div className="footer-links">
                        <a href="#">123 Real Estate Blvd.</a>
                        <a href="#">New York, NY 10001</a>
                        <a href="tel:+00123456789">(00) 123 456 789</a>
                        <a href="mailto:info@sanderhouse.com">info@sanderhouse.com</a>
                    </div>
                </div>
            </footer>
        </>
    );
}
