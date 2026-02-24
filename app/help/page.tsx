'use client';

import { useState, useCallback, useRef } from 'react';
import Link from 'next/link';
import Toast from '../components/Toast';
import Header, { HeaderRef } from '../components/Header';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon } from '../components/Icons';

export default function HelpCenterPage() {
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
                    <h1 className="page-hero-title">Help Center</h1>
                    <p className="page-hero-subtitle">Find comprehensive guides and resources to navigate your property journey with ease.</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="section container">
                <div className="grid-2" style={{ maxWidth: '1000px', margin: '0 auto', gap: '30px' }}>
                    <div style={{ padding: '40px', background: 'var(--white)', borderRadius: '24px', border: '1px solid var(--border-color)' }}>
                        <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>For Buyers</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.6 }}>
                            Discover everything you need to know about purchasing property, from understanding market trends to finalizing legal documents.
                        </p>
                        <button className="btn-primary" style={{ border: '1px solid var(--border-color)' }}>Read Guide</button>
                    </div>

                    <div style={{ padding: '40px', background: 'var(--white)', borderRadius: '24px', border: '1px solid var(--border-color)' }}>
                        <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>For Sellers</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.6 }}>
                            Learn how to maximize your property&apos;s value, prepare for listings, and negotiate effectively with our complete seller&apos;s handbook.
                        </p>
                        <button className="btn-primary" style={{ border: '1px solid var(--border-color)' }}>Read Guide</button>
                    </div>

                    <div style={{ padding: '40px', background: 'var(--white)', borderRadius: '24px', border: '1px solid var(--border-color)' }}>
                        <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>Platform Navigation</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.6 }}>
                            Learn how to effectively use our website, manage saved properties, and schedule visits seamlessly through our interactive tools.
                        </p>
                        <button className="btn-primary" style={{ border: '1px solid var(--border-color)' }}>Learn More</button>
                    </div>

                    <div style={{ padding: '40px', background: 'var(--primary-color)', color: 'var(--white)', borderRadius: '24px' }}>
                        <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>Still Need Help?</h3>
                        <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '20px', lineHeight: 1.6 }}>
                            Our dedicated support team is available 24/7 to assist you.
                        </p>
                        <Link href="/contact" className="btn-book" style={{ display: 'inline-block' }}>Contact Support</Link>
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
