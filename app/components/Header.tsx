'use client';

import { useState, useImperativeHandle, forwardRef } from 'react';
import Link from 'next/link';
import BookingModal from './BookingModal';
import { PhoneIcon, MenuIcon, CloseIcon } from './Icons';

interface HeaderProps {
    activePage?: 'home' | 'about' | 'properties' | 'contact';
    variant?: 'default' | 'dark';
    onBookingSubmit?: () => void;
}

export interface HeaderRef {
    openBooking: () => void;
}

const Header = forwardRef<HeaderRef, HeaderProps>(function Header({ activePage, variant = 'dark', onBookingSubmit }, ref) {
    const [bookingOpen, setBookingOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useImperativeHandle(ref, () => ({
        openBooking: () => setBookingOpen(true),
    }));

    const headerClass = variant === 'dark' ? 'header header-dark' : 'header';
    const phoneStyle = variant === 'dark' ? { color: 'var(--text-main)' } : undefined;

    return (
        <>
            <BookingModal
                isOpen={bookingOpen}
                onClose={() => setBookingOpen(false)}
                onSubmit={() => {
                    setBookingOpen(false);
                    onBookingSubmit?.();
                }}
            />

            <header className={headerClass}>
                <Link href="/" className="header-logo">SANDER HOUSE</Link>
                <nav className={`nav-links ${mobileMenuOpen ? 'nav-open' : ''}`}>
                    <Link href="/" className={activePage === 'home' ? 'nav-active' : ''} onClick={() => setMobileMenuOpen(false)}>Home</Link>
                    <Link href="/about" className={activePage === 'about' ? 'nav-active' : ''} onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                    <Link href="/properties" className={activePage === 'properties' ? 'nav-active' : ''} onClick={() => setMobileMenuOpen(false)}>Properties</Link>
                    <Link href="/contact" className={activePage === 'contact' ? 'nav-active' : ''} onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                </nav>
                <div className="header-contact">
                    <div className="header-phone-wrapper" style={phoneStyle}>
                        <div className="phone-icon">
                            <PhoneIcon size={12} />
                        </div>
                        <span>(00) 123 456 789</span>
                    </div>
                    <button className={variant === 'default' ? 'btn-book' : 'btn-dark'} style={{ borderRadius: '100px' }} onClick={() => setBookingOpen(true)}>BOOK A VISIT</button>
                </div>
                <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
                    {mobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
                </button>
            </header>
        </>
    );
});

export default Header;
