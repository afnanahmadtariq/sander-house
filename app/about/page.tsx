'use client';

import { useState, useCallback, useRef } from 'react';
import Link from 'next/link';
import Toast from '../components/Toast';
import Header, { HeaderRef } from '../components/Header';
import {
    BuildingIcon, UsersIcon, HomeIcon, CheckIcon, ArrowRightIcon,
    LinkedInIcon, FacebookIcon, TwitterIcon, InstagramIcon
} from '../components/Icons';

export default function AboutPage() {
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
            <Header ref={headerRef} activePage="about" onBookingSubmit={() => showToast('Visit scheduled successfully! We will contact you shortly.')} />

            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <div className="section-subtitle">ABOUT US</div>
                    <h1 className="page-hero-title">Building Dreams Into Reality</h1>
                    <p className="page-hero-subtitle">With over 20 years in luxury real estate, Sander House has been the trusted partner for discerning buyers and sellers across the globe.</p>
                </div>
            </section>

            {/* Stats Row */}
            <section className="section container">
                <div className="about-stats-row">
                    <div className="about-stat">
                        <HomeIcon size={32} />
                        <div className="about-stat-number">800+</div>
                        <div className="about-stat-label">Properties Sold</div>
                    </div>
                    <div className="about-stat">
                        <UsersIcon size={32} />
                        <div className="about-stat-number">200+</div>
                        <div className="about-stat-label">Happy Clients</div>
                    </div>
                    <div className="about-stat">
                        <BuildingIcon size={32} />
                        <div className="about-stat-number">50+</div>
                        <div className="about-stat-label">Active Projects</div>
                    </div>
                    <div className="about-stat">
                        <CheckIcon size={32} />
                        <div className="about-stat-number">20+</div>
                        <div className="about-stat-label">Years Experience</div>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="section container">
                <div className="grid-2">
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
                            alt="Our Office"
                            style={{ borderRadius: '30px', width: '100%', height: '500px', objectFit: 'cover' }}
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '24px' }}>
                        <div className="section-subtitle">OUR STORY</div>
                        <h2 className="section-title">Crafting Exceptional Living Spaces Since 2004</h2>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                            Founded in 2004, Sander House began with a simple vision: to redefine the real estate experience. Our founders believed that finding a home should be as extraordinary as the properties themselves.
                        </p>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                            Today, we are one of the most respected names in luxury real estate, with a portfolio spanning residential estates, contemporary apartments, and bespoke developments. Every property we represent meets our uncompromising standards of quality and design.
                        </p>
                        <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
                            <Link href="/properties" className="btn-dark" style={{ borderRadius: '100px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                View Properties <ArrowRightIcon size={16} />
                            </Link>
                            <Link href="/contact" className="btn-primary" style={{ border: '1px solid var(--border-color)', borderRadius: '100px' }}>
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section" style={{ background: '#f8f8f8' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="section-subtitle">OUR VALUES</div>
                    <h2 className="section-title" style={{ marginBottom: '60px' }}>What Sets Us Apart</h2>
                    <div className="about-values-grid">
                        {[
                            { title: 'Integrity', desc: 'We build lasting relationships through honesty and transparency in every transaction.' },
                            { title: 'Excellence', desc: 'Our properties meet the highest standards of quality and design excellence.' },
                            { title: 'Innovation', desc: 'We leverage cutting-edge technology to provide a seamless real estate experience.' },
                            { title: 'Client-First', desc: 'Your needs and dreams are at the center of everything we do.' },
                        ].map((val, i) => (
                            <div className="about-value-card" key={i}>
                                <div className="about-value-number">0{i + 1}</div>
                                <h3>{val.title}</h3>
                                <p>{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section container" style={{ textAlign: 'center' }}>
                <h2 className="section-title" style={{ marginBottom: '20px' }}>Ready to Find Your Dream Home?</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '500px', margin: '0 auto 40px' }}>
                    Our expert agents are here to guide you every step of the way.
                </p>
                <button className="btn-dark" style={{ borderRadius: '100px', padding: '16px 40px', fontSize: '16px' }} onClick={() => headerRef.current?.openBooking()}>
                    Schedule a Consultation
                </button>
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
