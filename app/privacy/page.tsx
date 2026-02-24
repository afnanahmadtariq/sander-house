'use client';

import { useState, useCallback, useRef } from 'react';
import Link from 'next/link';
import Toast from '../components/Toast';
import Header, { HeaderRef } from '../components/Header';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon } from '../components/Icons';

export default function PrivacyPolicyPage() {
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
                    <h1 className="page-hero-title">Privacy Policy</h1>
                    <p className="page-hero-subtitle">How we collect, use, and protect your data.</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="section container">
                <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '16px', lineHeight: 1.8, color: 'var(--text-muted)' }}>
                    <h2 className="section-title" style={{ color: 'var(--primary-color)', fontSize: '28px', marginBottom: '20px' }}>1. Information We Collect</h2>
                    <p style={{ marginBottom: '30px' }}>
                        We collect information you provide directly to us, such as when you create an account, request to view a property, subscribe to our newsletter, or contact our support team. This may include your name, email, phone number, and preferences.
                    </p>

                    <h2 className="section-title" style={{ color: 'var(--primary-color)', fontSize: '28px', marginBottom: '20px' }}>2. How We Use Your Information</h2>
                    <p style={{ marginBottom: '30px' }}>
                        We use the information we collect to operate and improve our services, schedule viewings, send you updates on new properties, and respond to your questions and requests.
                    </p>

                    <h2 className="section-title" style={{ color: 'var(--primary-color)', fontSize: '28px', marginBottom: '20px' }}>3. Data Protection</h2>
                    <p style={{ marginBottom: '30px' }}>
                        We implement rigorous security measures to maintain the safety of your personal information. We do not sell, trade, or transfer your personally identifiable information to outside parties without your consent.
                    </p>

                    <h2 className="section-title" style={{ color: 'var(--primary-color)', fontSize: '28px', marginBottom: '20px' }}>4. Cookies and Tracking</h2>
                    <p style={{ marginBottom: '40px' }}>
                        Our website uses cookies to enhance your experience, analyze site traffic, and personalize content. You can choose to disable cookies through your browser settings, though this may affect site functionality.
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
