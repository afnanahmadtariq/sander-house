'use client';

import { useState, useCallback, useRef } from 'react';
import Link from 'next/link';
import Toast from '../components/Toast';
import Header, { HeaderRef } from '../components/Header';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon } from '../components/Icons';

export default function FaqsPage() {
    const [toastVisible, setToastVisible] = useState(false);
    const [toastMsg, setToastMsg] = useState('');
    const headerRef = useRef<HeaderRef>(null);

    const showToast = useCallback((msg: string) => {
        setToastMsg(msg);
        setToastVisible(true);
    }, []);

    const faqs = [
        { q: "How do I schedule a property viewing?", a: "You can schedule a viewing by clicking the 'Book A Visit' button on any property card or the website header. Alternatively, you can contact our scheduling team via phone or email." },
        { q: "What is your standard commission fee?", a: "Our standard commission for sellers is 2.5% of the final sale price. We offer complete buying services to purchasers at no cost." },
        { q: "Do you handle international transactions?", a: "Yes, we have extensive experience with overseas clients and can facilitate virtual viewings, remote closings, and international money transfers." },
        { q: "How long does a typical sale process take?", a: "On average, properties close within 30 to 60 days after an offer is accepted, depending on financial processing and legal checks." },
        { q: "Can I list my property exclusively offline?", a: "Absolutely. We offer an 'Off-Market' sales program for sellers who prefer high discretion and privacy during their transaction." }
    ];

    return (
        <>
            <Toast message={toastMsg} isVisible={toastVisible} onClose={() => setToastVisible(false)} />
            <Header ref={headerRef} onBookingSubmit={() => showToast('Visit scheduled successfully! We will contact you shortly.')} />

            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <div className="section-subtitle">SUPPORT</div>
                    <h1 className="page-hero-title">Frequently Asked Questions</h1>
                    <p className="page-hero-subtitle">Quick answers to common questions about buying and selling.</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="section container">
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {faqs.map((faq, i) => (
                        <div key={i} style={{ padding: '30px', background: 'var(--white)', borderRadius: '20px', border: '1px solid var(--border-color)', marginBottom: '20px' }}>
                            <h3 style={{ fontSize: '20px', marginBottom: '15px', color: 'var(--primary-color)' }}>{faq.q}</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{faq.a}</p>
                        </div>
                    ))}

                    <div style={{ textAlign: 'center', marginTop: '60px' }}>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>Can&apos;t find what you&apos;re looking for?</p>
                        <Link href="/contact" className="btn-dark" style={{ borderRadius: '100px', padding: '14px 30px' }}>Contact Support</Link>
                    </div>
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
