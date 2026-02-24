'use client';

import { useState, useCallback, useRef } from 'react';
import Link from 'next/link';
import Toast from '../components/Toast';
import Header, { HeaderRef } from '../components/Header';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon } from '../components/Icons';

export default function TermsOfUsePage() {
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
                    <div className="section-subtitle">LEGAL</div>
                    <h1 className="page-hero-title">Terms of Use</h1>
                    <p className="page-hero-subtitle">Please read these terms carefully before using our services.</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="section container">
                <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '16px', lineHeight: 1.8, color: 'var(--text-muted)' }}>
                    <h2 className="section-title" style={{ color: 'var(--primary-color)', fontSize: '28px', marginBottom: '20px' }}>1. Introduction</h2>
                    <p style={{ marginBottom: '30px' }}>
                        Welcome to Sander House. These Terms of Use govern your access to and use of our website and services.
                        By accessing or using our services, you agree to comply with and be bound by these terms.
                    </p>

                    <h2 className="section-title" style={{ color: 'var(--primary-color)', fontSize: '28px', marginBottom: '20px' }}>2. Use of Services</h2>
                    <p style={{ marginBottom: '30px' }}>
                        You agree to use our services only for lawful purposes and in accordance with these Terms. You are prohibited from violating or attempting to violate the security of the website, or using it to transmit any material that is unlawful, harmful, or objectionable.
                    </p>

                    <h2 className="section-title" style={{ color: 'var(--primary-color)', fontSize: '28px', marginBottom: '20px' }}>3. Property Information</h2>
                    <p style={{ marginBottom: '30px' }}>
                        The property information provided on this website is for general informational purposes only. While we strive to keep the information accurate and up-to-date, we make no warranties of any kind about the completeness or accuracy of the listings.
                    </p>

                    <h2 className="section-title" style={{ color: 'var(--primary-color)', fontSize: '28px', marginBottom: '20px' }}>4. Intellectual Property</h2>
                    <p style={{ marginBottom: '40px' }}>
                        All content on this website, including text, graphics, logos, and images, is the property of Sander House and protected by applicable copyright and intellectual property laws.
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
                    <h4>Quick Links</h4>
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
