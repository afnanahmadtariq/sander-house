'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import Toast from '../components/Toast';
import Header from '../components/Header';
import {
    MapPinIcon, MailIcon, SendIcon, PhoneIcon,
    LinkedInIcon, FacebookIcon, TwitterIcon, InstagramIcon
} from '../components/Icons';

export default function ContactPage() {
    const [toastVisible, setToastVisible] = useState(false);
    const [toastMsg, setToastMsg] = useState('');
    const [toastType, setToastType] = useState<'success' | 'error'>('success');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const showToast = useCallback((msg: string, type: 'success' | 'error' = 'success') => {
        setToastMsg(msg);
        setToastType(type);
        setToastVisible(true);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !message) {
            showToast('Please fill in all required fields.', 'error');
            return;
        }
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        showToast('Message sent successfully! We will get back to you within 24 hours.');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };

    return (
        <>
            <Toast message={toastMsg} type={toastType} isVisible={toastVisible} onClose={() => setToastVisible(false)} />
            <Header activePage="contact" onBookingSubmit={() => showToast('Visit scheduled successfully! We will contact you shortly.')} />

            <section className="page-hero">
                <div className="container">
                    <div className="section-subtitle">CONTACT</div>
                    <h1 className="page-hero-title">Get In Touch</h1>
                    <p className="page-hero-subtitle">Have a question or want to schedule a viewing? We would love to hear from you.</p>
                </div>
            </section>

            <section className="section container">
                <div className="contact-grid">
                    {/* Contact Info Cards */}
                    <div className="contact-info">
                        <div className="contact-card">
                            <div className="contact-card-icon">
                                <MapPinIcon size={24} />
                            </div>
                            <h3>Visit Us</h3>
                            <p>123 Real Estate Blvd.</p>
                            <p>New York, NY 10001</p>
                        </div>
                        <div className="contact-card">
                            <div className="contact-card-icon">
                                <PhoneIcon size={24} />
                            </div>
                            <h3>Call Us</h3>
                            <p><a href="tel:+00123456789">(00) 123 456 789</a></p>
                            <p><a href="tel:+00987654321">(00) 987 654 321</a></p>
                        </div>
                        <div className="contact-card">
                            <div className="contact-card-icon">
                                <MailIcon size={24} />
                            </div>
                            <h3>Email Us</h3>
                            <p><a href="mailto:info@sanderhouse.com">info@sanderhouse.com</a></p>
                            <p><a href="mailto:sales@sanderhouse.com">sales@sanderhouse.com</a></p>
                        </div>

                        <div className="contact-social-section">
                            <h3>Follow Us</h3>
                            <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
                                <a href="#" className="agent-social-btn" aria-label="Facebook"><FacebookIcon /></a>
                                <a href="#" className="agent-social-btn" aria-label="Twitter"><TwitterIcon /></a>
                                <a href="#" className="agent-social-btn" aria-label="Instagram"><InstagramIcon /></a>
                                <a href="#" className="agent-social-btn" aria-label="LinkedIn"><LinkedInIcon /></a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-wrapper">
                        <h2 style={{ marginBottom: '8px' }}>Send Us a Message</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '14px' }}>
                            Fill out the form below and our team will respond within 24 hours.
                        </p>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="contact-name">Full Name *</label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        placeholder="John Doe"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contact-email">Email Address *</label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        placeholder="john@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact-subject">Subject</label>
                                <input
                                    id="contact-subject"
                                    type="text"
                                    placeholder="How can we help?"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact-message">Message *</label>
                                <textarea
                                    id="contact-message"
                                    placeholder="Tell us about your requirements..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    rows={5}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn-submit" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <span className="btn-loading">
                                        <span className="spinner" />
                                        Sending...
                                    </span>
                                ) : (
                                    <span className="btn-submit-content">
                                        <SendIcon size={16} />
                                        Send Message
                                    </span>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="contact-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="400"
                    style={{ border: 0, borderRadius: '30px' }}
                    allowFullScreen
                    loading="lazy"
                    title="Our Location"
                />
            </section>

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
                        <a href="#">Terms of Use</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Pricing</a>
                    </div>
                </div>
                <div className="footer-section">
                    <h4>Support</h4>
                    <div className="footer-links">
                        <a href="#">Help Center</a>
                        <a href="#">FAQs</a>
                        <a href="#">Safety Rules</a>
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
