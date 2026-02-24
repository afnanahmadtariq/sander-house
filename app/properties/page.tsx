'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import Toast from '../components/Toast';
import Header from '../components/Header';
import {
    MapPinIcon, BedIcon, BathIcon, AreaIcon, HeartIcon, SearchIcon,
    LinkedInIcon, FacebookIcon, TwitterIcon, InstagramIcon
} from '../components/Icons';

const ALL_PROPERTIES = [
    { id: 1, img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800', name: 'Heritage Apartment of Modern Living', loc: 'Downtown, City', price: '$850,000', type: 'Apartment', beds: 4, baths: 3, sqft: '2,400' },
    { id: 2, img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800', name: 'Modern Luxury Villa', loc: 'Beverly Hills, CA', price: '$2,450,000', type: 'Villa', beds: 5, baths: 4, sqft: '4,200' },
    { id: 3, img: 'https://images.unsplash.com/photo-1600607687931-cebf5825cbef?w=800', name: 'Classic European Residence', loc: 'Westside, New York', price: '$1,200,000', type: 'House', beds: 3, baths: 2, sqft: '2,800' },
    { id: 4, img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800', name: 'Heritage Cottage', loc: 'Lakeside, WA', price: '$650,000', type: 'House', beds: 3, baths: 2, sqft: '1,800' },
    { id: 5, img: 'https://images.unsplash.com/photo-1600585154526-990dced4ea0d?w=800', name: 'Contemporary Beach House', loc: 'Malibu, CA', price: '$4,500,000', type: 'Villa', beds: 6, baths: 5, sqft: '5,600' },
    { id: 6, img: 'https://images.unsplash.com/photo-1600607687644-aac4c15cecb1?w=800', name: 'Classic Brick Estate', loc: 'Greenwich, CT', price: '$3,100,000', type: 'Mansion', beds: 7, baths: 6, sqft: '8,200' },
    { id: 7, img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800', name: 'Sanctuary at Hidden Valley', loc: 'Aspen, CO', price: '$5,200,000', type: 'Mansion', beds: 8, baths: 7, sqft: '9,500' },
    { id: 8, img: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800', name: 'Skyline Penthouse', loc: 'Manhattan, NY', price: '$7,800,000', type: 'Penthouse', beds: 4, baths: 3, sqft: '3,200' },
    { id: 9, img: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800', name: 'Lakefront Duplex', loc: 'Lake Tahoe, NV', price: '$1,900,000', type: 'Duplex', beds: 4, baths: 3, sqft: '3,600' },
];

const TYPES = ['Any Type', 'House', 'Apartment', 'Villa', 'Mansion', 'Penthouse', 'Duplex'];

export default function PropertiesPage() {
    const [activeFilter, setActiveFilter] = useState('Any Type');
    const [favorites, setFavorites] = useState<number[]>([]);
    const [toastVisible, setToastVisible] = useState(false);
    const [toastMsg, setToastMsg] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const showToast = useCallback((msg: string) => {
        setToastMsg(msg);
        setToastVisible(true);
    }, []);

    const toggleFavorite = (id: number, name: string) => {
        setFavorites(prev => {
            if (prev.includes(id)) {
                showToast(`Removed "${name}" from favorites`);
                return prev.filter(f => f !== id);
            }
            showToast(`Added "${name}" to favorites`);
            return [...prev, id];
        });
    };

    const filtered = ALL_PROPERTIES.filter(p => {
        const matchesType = activeFilter === 'Any Type' || p.type === activeFilter;
        const matchesSearch = searchQuery === '' ||
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.loc.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesType && matchesSearch;
    });

    return (
        <>
            <Toast message={toastMsg} isVisible={toastVisible} onClose={() => setToastVisible(false)} />
            <Header activePage="properties" onBookingSubmit={() => showToast('Visit scheduled successfully!')} />

            <section className="page-hero">
                <div className="container">
                    <div className="section-subtitle">OUR PROPERTIES</div>
                    <h1 className="page-hero-title">Find Your Perfect Home</h1>
                    <p className="page-hero-subtitle">Browse our curated collection of luxury properties across the most desirable locations.</p>
                </div>
            </section>

            <section className="section container">
                {/* Search */}
                <div className="properties-search-bar">
                    <SearchIcon size={20} />
                    <input
                        type="text"
                        placeholder="Search by property name or location..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="properties-search-input"
                    />
                </div>

                {/* Filters */}
                <div className="filter-chips" style={{ marginTop: '30px' }}>
                    {TYPES.map(type => (
                        <button
                            key={type}
                            className={`filter-chip ${activeFilter === type ? 'active' : ''}`}
                            onClick={() => setActiveFilter(type)}
                        >
                            {type}
                        </button>
                    ))}
                </div>

                {/* Results count */}
                <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginTop: '10px', marginBottom: '30px' }}>
                    Showing {filtered.length} propert{filtered.length === 1 ? 'y' : 'ies'}
                </p>

                {/* Grid */}
                <div className="property-grid">
                    {filtered.map((prop) => (
                        <div className="property-card" key={prop.id}>
                            <div className="property-img-wrap">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={prop.img} alt={prop.name} className="property-img" />
                                <button
                                    className={`property-fav-btn ${favorites.includes(prop.id) ? 'fav-active' : ''}`}
                                    onClick={() => toggleFavorite(prop.id, prop.name)}
                                    aria-label="Toggle favorite"
                                >
                                    <HeartIcon size={18} />
                                </button>
                            </div>
                            <div className="property-content">
                                <div className="property-price">{prop.price}</div>
                                <div className="property-name">{prop.name}</div>
                                <div className="property-location">
                                    <MapPinIcon size={14} />
                                    {prop.loc}
                                </div>
                                <div className="property-features">
                                    <div className="property-feature"><BedIcon size={14} /> {prop.beds} Beds</div>
                                    <div className="property-feature"><BathIcon size={14} /> {prop.baths} Baths</div>
                                    <div className="property-feature"><AreaIcon size={14} /> {prop.sqft} sqft</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-muted)' }}>
                        <p style={{ fontSize: '18px', marginBottom: '12px' }}>No properties found</p>
                        <p>Try adjusting your search or filter criteria.</p>
                    </div>
                )}
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
