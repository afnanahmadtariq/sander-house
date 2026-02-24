'use client';

import { useState, useCallback, useRef } from 'react';
import Link from 'next/link';
import Toast from '../components/Toast';
import Header, { HeaderRef } from '../components/Header';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon, CheckIcon } from '../components/Icons';

export default function PricingPage() {
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
                    <div className="section-subtitle">OUR FEES</div>
                    <h1 className="page-hero-title">Transparent Pricing</h1>
                    <p className="page-hero-subtitle">Clear and competitive commission rates with zero hidden fees.</p>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="section container">
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                    <div className="grid-2" style={{ gap: '40px' }}>
                        <div style={{ padding: '40px', borderRadius: '30px', border: '1px solid var(--border-color)', background: 'var(--white)' }}>
                            <div className="section-subtitle">FOR SELLERS</div>
                            <h2 style={{ fontSize: '48px', fontWeight: '700', margin: '20px 0 10px' }}>2.5%</h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>Standard commission rate on the final sale price.</p>

                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px', color: 'var(--text-muted)', fontSize: '15px' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ color: 'var(--primary-color)' }}><CheckIcon size={20} /></div> Complete property valuation</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ color: 'var(--primary-color)' }}><CheckIcon size={20} /></div> Professional photography & staging</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ color: 'var(--primary-color)' }}><CheckIcon size={20} /></div> Global marketing reach</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ color: 'var(--primary-color)' }}><CheckIcon size={20} /></div> Dedicated agent representation</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ color: 'var(--primary-color)' }}><CheckIcon size={20} /></div> Secure contract negotiation</li>
                            </ul>

                            <button className="btn-dark" style={{ width: '100%', marginTop: '40px', borderRadius: '100px', justifyContent: 'center' }} onClick={() => headerRef.current?.openBooking()}>
                                List Your Property
                            </button>
                        </div>

                        <div style={{ padding: '40px', borderRadius: '30px', background: 'var(--primary-color)', color: 'var(--white)' }}>
                            <div className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)' }}>FOR BUYERS</div>
                            <h2 style={{ fontSize: '48px', fontWeight: '700', margin: '20px 0 10px' }}>Free</h2>
                            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '30px' }}>Our buying services come at no cost to you.</p>

                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px', color: 'rgba(255,255,255,0.9)', fontSize: '15px' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ color: 'var(--white)' }}><CheckIcon size={20} /></div> Curated property tours</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ color: 'var(--white)' }}><CheckIcon size={20} /></div> Off-market property access</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ color: 'var(--white)' }}><CheckIcon size={20} /></div> Expert negotiation strategy</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ color: 'var(--white)' }}><CheckIcon size={20} /></div> Legal documentation support</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ color: 'var(--white)' }}><CheckIcon size={20} /></div> Relocation assistance</li>
                            </ul>

                            <Link href="/properties" className="btn-primary" style={{ width: '100%', marginTop: '40px', borderRadius: '100px', textAlign: 'center', display: 'block' }}>
                                Browse Properties
                            </Link>
                        </div>
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
