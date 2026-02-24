'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import Toast from './components/Toast';
import Header from './components/Header';
import {
  SearchIcon, MapPinIcon, BedIcon, BathIcon, AreaIcon,
  HeartIcon, StarIcon, ArrowRightIcon, QuoteIcon,
  LinkedInIcon, FacebookIcon, TwitterIcon, InstagramIcon
} from './components/Icons';

const PROPERTIES = [
  { id: 1, img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800', name: 'Heritage Apartment of Modern Living', loc: 'Downtown, City', price: '$850,000', type: 'Apartment', beds: 4, baths: 3, sqft: '2,400' },
  { id: 2, img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800', name: 'Modern Luxury Villa', loc: 'Beverly Hills, CA', price: '$2,450,000', type: 'Villa', beds: 5, baths: 4, sqft: '4,200' },
  { id: 3, img: 'https://images.unsplash.com/photo-1600607687931-cebf5825cbef?w=800', name: 'Classic European Residence', loc: 'Westside, New York', price: '$1,200,000', type: 'House', beds: 3, baths: 2, sqft: '2,800' },
  { id: 4, img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800', name: 'Heritage Cottage', loc: 'Lakeside, WA', price: '$650,000', type: 'House', beds: 3, baths: 2, sqft: '1,800' },
  { id: 5, img: 'https://images.unsplash.com/photo-1600585154526-990dced4ea0d?w=800', name: 'Contemporary Beach House', loc: 'Malibu, CA', price: '$4,500,000', type: 'Villa', beds: 6, baths: 5, sqft: '5,600' },
  { id: 6, img: 'https://images.unsplash.com/photo-1600607687644-aac4c15cecb1?w=800', name: 'Classic Brick Estate', loc: 'Greenwich, CT', price: '$3,100,000', type: 'Mansion', beds: 7, baths: 6, sqft: '8,200' },
];

const TYPES = ['Any Type', 'House', 'Apartment', 'Villa', 'Mansion', 'Penthouse', 'Duplex'];

const TESTIMONIALS = [
  {
    text: 'Finding my dream home felt like an impossibility, but your team made it so simple. The personalized attention and incredible dedication really set you apart.',
    name: 'Jane Doe',
    role: 'Buyer, San Francisco',
    rating: 5,
  },
  {
    text: 'Sander House made selling our property seamless. Their market expertise and attention to detail ensured we got the best possible outcome.',
    name: 'Michael Chen',
    role: 'Seller, Beverly Hills',
    rating: 5,
  },
  {
    text: 'From the very first meeting, I knew I was in capable hands. The agents were incredibly professional and knowledgeable about the market.',
    name: 'Sarah Mitchell',
    role: 'Buyer, New York',
    rating: 5,
  },
];

const FAQ_DATA = [
  { q: 'What is your commission percentage?', a: 'We offer a competitive commission structure that varies depending on the property type. Generally, our rate ranges from 5% to 6%, split equally with the buyer\'s agent. Contact us to learn more about our flexible pricing.' },
  { q: 'How long does it typically take to buy a house?', a: 'The process typically takes 30-60 days from offer acceptance to closing. However, this can vary depending on financing, inspections, and market conditions. Our agents guide you through every step.' },
  { q: 'What is the difference between a real estate agent and a broker?', a: 'A real estate agent is licensed to help buy and sell property. A broker has additional education and licensing, allowing them to manage other agents and run their own brokerage. Both can assist you effectively.' },
  { q: 'What are closing costs and who pays them?', a: 'Closing costs typically range from 2-5% of the purchase price and include fees for appraisal, title insurance, attorney fees, and taxes. Both buyers and sellers have costs, though the split varies by negotiation.' },
  { q: 'Do I need a real estate agent to buy a house?', a: 'While not legally required, having an agent is highly recommended. They provide market expertise, negotiation skills, and handle complex paperwork. In most cases, the seller pays the buyer\'s agent commission.' },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('Any Type');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const showToast = useCallback((msg: string, type: 'success' | 'error' = 'success') => {
    setToastMsg(msg);
    setToastType(type);
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

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscribeEmail) {
      showToast('Please enter your email address.', 'error');
      return;
    }
    setIsSubscribing(true);
    await new Promise(resolve => setTimeout(resolve, 1200));
    setIsSubscribing(false);
    showToast('Successfully subscribed! Check your inbox for confirmation.');
    setSubscribeEmail('');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Search results loading... Redirecting to properties page.');
    setTimeout(() => {
      window.location.href = '/properties';
    }, 1000);
  };

  const filteredProperties = PROPERTIES.filter(p => activeFilter === 'Any Type' || p.type === activeFilter);

  return (
    <>
      <Toast message={toastMsg} type={toastType} isVisible={toastVisible} onClose={() => setToastVisible(false)} />
      <Header activePage="home" variant="default" onBookingSubmit={() => showToast('Visit scheduled successfully! Our agent will contact you within 24 hours.')} />

      {/* Hero Section */}
      <section className="hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600" alt="Modern House" className="hero-bg" />
        <div className="hero-overlay" />
        <div className="container" style={{ position: 'relative', width: '100%', height: '100%' }}>
          <div className="hero-content">
            <h1 className="hero-title">WHERE TRANQUILITY MEETS MODERN LIVING</h1>
            <p className="hero-subtitle">Find your perfect home with our comprehensive listings and expert agents.</p>

            <form className="search-bar" onSubmit={handleSearch}>
              <div className="search-field">
                <span className="search-field-label">Location</span>
                <select className="search-field-value" id="hero-location">
                  <option>Any Location</option>
                  <option>New York</option>
                  <option>Los Angeles</option>
                  <option>Beverly Hills</option>
                  <option>Malibu</option>
                </select>
              </div>
              <div className="search-field search-field-border">
                <span className="search-field-label">Property Type</span>
                <select className="search-field-value" id="hero-type">
                  <option>Select Type</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Mansion</option>
                </select>
              </div>
              <div className="search-field search-field-border">
                <span className="search-field-label">Price Range</span>
                <select className="search-field-value" id="hero-price">
                  <option>$100k - $500k</option>
                  <option>$500k - $1M</option>
                  <option>$1M - $5M</option>
                  <option>$5M+</option>
                </select>
              </div>
              <button className="search-btn" type="submit" aria-label="Search properties">
                <SearchIcon size={24} />
              </button>
            </form>
          </div>

          <div className="hero-stats">
            <div>
              <div className="stats-number">800+</div>
              <div className="stats-text">Properties sold by our<br />professional agents</div>
            </div>
            <div className="stats-avatars">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces" alt="Agent" className="stats-avatar" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=faces" alt="Agent" className="stats-avatar" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=faces" alt="Agent" className="stats-avatar" />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro-section">
        At Building Blocks, we design your spaces{' '}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=200&h=100&fit=crop" alt="Construction" className="intro-img-inline" />{' '}
        from groundbreaking concepts to rising structures. Our expertise ensures every project reflects our commitment to excellence. We turn dreams into reality, creating uplifting spaces.
      </section>

      {/* Property Section */}
      <section className="section container" id="properties">
        <div className="section-header">
          <div>
            <div className="section-subtitle">PROPERTIES</div>
            <h2 className="section-title">Discover Your Ideal Property</h2>
          </div>
          <p style={{ maxWidth: '400px', color: 'var(--text-muted)', fontSize: '14px', textAlign: 'right' }}>
            We are dedicated to helping you discover the ideal property. Start your journey!
          </p>
        </div>

        <div className="filter-chips">
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

        <div className="property-grid" style={{ marginTop: '40px' }}>
          {filteredProperties.map((prop) => (
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

        {filteredProperties.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
            <p style={{ fontSize: '18px', marginBottom: '12px' }}>No properties found for this type</p>
            <button className="btn-dark" style={{ borderRadius: '100px' }} onClick={() => setActiveFilter('Any Type')}>Show All Properties</button>
          </div>
        )}
      </section>

      {/* Latest Projects Section */}
      <section className="section container" id="projects">
        <div className="section-header">
          <div>
            <div className="section-subtitle">PROJECTS</div>
            <h2 className="section-title">Our Latest Projects</h2>
          </div>
          <Link href="/properties" className="btn-primary" style={{ border: '1px solid #ccc', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            View All Projects <ArrowRightIcon size={14} />
          </Link>
        </div>

        <div className="projects-grid">
          <Link href="/properties" className="project-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200" alt="The Sanctuary at Hidden Valley" className="project-img" />
            <div className="project-card-content">
              <h3 className="project-title">The Sanctuary at Hidden Valley</h3>
              <p className="project-desc">A serene estate blending modern luxury with natural surroundings. Perfect for families seeking a peaceful retreat.</p>
            </div>
          </Link>
          <Link href="/properties" className="project-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200" alt="The Cascade Retreat" className="project-img" />
            <div className="project-card-content">
              <h3 className="project-title">The Cascade Retreat</h3>
              <p className="project-desc">Elegant and secluded, this stunning property offers breathtaking views and unmatched privacy.</p>
            </div>
          </Link>
          <Link href="/properties" className="project-card project-card-faded">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1600607687931-cebf5825cbef?w=1200" alt="Willow Creek Estate" className="project-img" />
            <div className="project-card-content">
              <h3 className="project-title">Willow Creek Estate</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* Agents Section */}
      <section className="section container" id="agents">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-subtitle">AGENTS</div>
          <h2 className="section-title">Contact with Our Agents</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '20px auto 0' }}>
            Our dedicated agents bring decades of experience and a passion for finding you the perfect property.
          </p>
        </div>

        <div className="agents-grid">
          {[
            { img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop', name: 'Jane Williams', role: 'Real Estate Broker' },
            { img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop', name: 'Robert Fox', role: 'Real Estate Agent' },
            { img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop', name: 'Albert Flores', role: 'Sales Agent' },
            { img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop', name: 'Guy Hawkins', role: 'Real Estate Broker' }
          ].map((agent, i) => (
            <div className="agent-card" key={i}>
              <div className="agent-img-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={agent.img} alt={agent.name} className="agent-img" />
              </div>
              <h4 className="agent-name">{agent.name}</h4>
              <p className="agent-role">{agent.role}</p>
              <div className="agent-socials">
                <button className="agent-social-btn" aria-label="LinkedIn" onClick={() => showToast(`Opening ${agent.name}'s LinkedIn profile...`)}><LinkedInIcon /></button>
                <button className="agent-social-btn" aria-label="Facebook" onClick={() => showToast(`Opening ${agent.name}'s Facebook profile...`)}><FacebookIcon /></button>
                <button className="agent-social-btn" aria-label="Twitter" onClick={() => showToast(`Opening ${agent.name}'s Twitter profile...`)}><TwitterIcon /></button>
                <button className="agent-social-btn" aria-label="Instagram" onClick={() => showToast(`Opening ${agent.name}'s Instagram profile...`)}><InstagramIcon /></button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials and FAQ */}
      <section className="section container">
        <div className="grid-2">
          {/* Testimonial */}
          <div>
            <div className="section-subtitle">TESTIMONIALS</div>
            <h2 className="section-title" style={{ marginBottom: '40px' }}>What Our Clients Are Saying</h2>

            <div className="testimonial-images">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600" alt="Clients" className="testimonial-img-1" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" alt="Client Focus" className="testimonial-img-2" />
            </div>

            <div style={{ marginTop: '40px' }}>
              <QuoteIcon size={40} />
              <p className="testimonial-text">
                {TESTIMONIALS[activeTestimonial].text}
              </p>
              <div>
                <strong>{TESTIMONIALS[activeTestimonial].name}</strong>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{TESTIMONIALS[activeTestimonial].role}</p>
                <div style={{ display: 'flex', gap: '4px', marginTop: '10px' }}>
                  {Array.from({ length: TESTIMONIALS[activeTestimonial].rating }).map((_, i) => (
                    <StarIcon key={i} size={16} filled />
                  ))}
                </div>
              </div>
              <div className="testimonial-dots">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    className={`testimonial-dot ${activeTestimonial === i ? 'dot-active' : ''}`}
                    onClick={() => setActiveTestimonial(i)}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <div className="section-subtitle">QUESTIONS</div>
            <h2 className="section-title" style={{ marginBottom: '40px' }}>Frequently Asked Questions</h2>

            <div className="accordion">
              {FAQ_DATA.map((faq, i) => (
                <div className="accordion-item" key={i}>
                  <button
                    className={`accordion-header ${activeAccordion === i ? 'active' : ''}`}
                    onClick={() => setActiveAccordion(activeAccordion === i ? -1 : i)}
                  >
                    {faq.q}
                    <span className="accordion-icon">+</span>
                  </button>
                  <div className={`accordion-content ${activeAccordion === i ? 'accordion-open' : ''}`}>
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Banner */}
      <div className="footer-banner">
        <h2>Find Your Dream Home Today</h2>
        <p>Subscribe to our newsletter and get updates on the latest properties in your area.</p>
        <form className="subscribe-form" onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email address"
            className="subscribe-input"
            value={subscribeEmail}
            onChange={(e) => setSubscribeEmail(e.target.value)}
          />
          <button className="btn-subscribe" type="submit" disabled={isSubscribing}>
            {isSubscribing ? 'Subscribing...' : 'Subscribe Now'}
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="footer-bottom">
        <div>
          <Link href="/" className="footer-logo">SANDER HOUSE</Link>
          <p className="footer-desc">Experience luxury real estate services tailored to your unique lifestyle. We make property hunting incredibly smooth.</p>
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
            <a href="#">Careers</a>
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
