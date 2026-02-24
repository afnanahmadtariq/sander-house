'use client';

import { useState, useCallback, useRef } from 'react';
import Link from 'next/link';
import Toast from '../components/Toast';
import Header, { HeaderRef } from '../components/Header';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon, ArrowRightIcon } from '../components/Icons';

export default function QuickLinksPage() {
    const [toastVisible, setToastVisible] = useState(false);
    const [toastMsg, setToastMsg] = useState('');
    const headerRef = useRef<HeaderRef>(null);

    const showToast = useCallback((msg: string) => {
        setToastMsg(msg);
        setToastVisible(true);
    }, []);

    const links = [
        { name: 'Terms of Use', path: '/terms', desc: 'Read the rules and guidelines for using our website.' },
        { name: 'Privacy Policy', path: '/privacy', desc: 'Understand how we protect and use your personal data.' },
        { name: 'Pricing', path: '/pricing', desc: 'Learn about our transparent commission rates and fees.' },
        { name: 'About Us', path: '/about', desc: 'Discover our story and the values that drive our agency.' },
        { name: 'Properties', path: '/properties', desc: 'Browse our exclusive collection of luxury real estate.' },
        { name: 'Contact Us', path: '/contact', desc: 'Get in touch with our expert agents for personalized advice.' },
    ];

    return (
        <>
            <Toast message={toastMsg} isVisible={toastVisible} onClose={() => setToastVisible(false)} />
            <Header ref={headerRef} onBookingSubmit={() => showToast('Visit scheduled successfully! We will contact you shortly.')} />

            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <div className="section-subtitle">DIRECTORY</div>
                    <h1 className="page-hero-title">Quick Links</h1>
                    <p className="page-hero-subtitle">Fast access to essential pages and information.</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="section container">
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>

                    <div className="grid-2" style={{ gap: '30px' }}>
                        {links.map((link, i) => (
                            <Link href={link.path} key={i} style={{ padding: '30px', borderRadius: '20px', border: '1px solid var(--border-color)', display: 'block', transition: 'var(--transition)', background: 'var(--white)' }} className="hover-lift">
                                <h3 style={{ fontSize: '20px', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    {link.name}
                                    <ArrowRightIcon size={20} />
                                </h3>
                                <p style={{ color: 'var(--text-muted)' }}>{link.desc}</p>
                            </Link>
                        ))}
                    </div>

                    <style jsx>{`
                        .hover-lift:hover {
                            transform: translateY(-5px);
                            box-shadow: 0 10px 30px rgba(0,0,0,0.08);
                            border-color: transparent !important;
                        }
                    `}</style>

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
