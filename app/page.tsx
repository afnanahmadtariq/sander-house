'use client';

import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sander House - Where Tranquility Meets Modern Living</title>
        <meta name="description" content="Find your perfect home with our expert real estate agents." />
      </Head>

      {/* Header */}
      <header className="header">
        <div className="header-logo">SANDER HOUSE</div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Properties</a>
          <a href="#">Contact</a>
          <a href="#">Discover</a>
        </nav>
        <div className="header-contact">
          <span>📞 (00) 123 456 789</span>
          <button className="btn-primary">Call us CTA</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600" alt="Modern House" className="hero-bg" />
        <div className="hero-overlay"></div>
        <div className="container" style={{ position: 'relative', width: '100%', height: '100%' }}>
          <div className="hero-content">
            <h1 className="hero-title">WHERE TRANQUILITY MEETS MODERN LIVING</h1>
            <p className="hero-subtitle">Find your perfect home with our comprehensive listings and expert agents.</p>

            <div className="search-bar">
              <div className="search-field">
                <span className="search-field-label">Location</span>
                <select className="search-field-value">
                  <option>Any Location</option>
                  <option>New York</option>
                  <option>Los Angeles</option>
                </select>
              </div>
              <div className="search-field" style={{ borderLeft: '1px solid #eee', paddingLeft: '20px' }}>
                <span className="search-field-label">Property Type</span>
                <select className="search-field-value">
                  <option>Select Type</option>
                  <option>House</option>
                  <option>Apartment</option>
                </select>
              </div>
              <div className="search-field" style={{ borderLeft: '1px solid #eee', paddingLeft: '20px' }}>
                <span className="search-field-label">Price Range</span>
                <select className="search-field-value">
                  <option>$100k - $500k</option>
                  <option>$500k - $1M</option>
                  <option>$1M+</option>
                </select>
              </div>
              <button className="search-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </div>
          </div>

          <div className="hero-stats">
            <div>
              <div className="stats-number">800+</div>
              <div className="stats-text">Properties sold by our<br />professional agents</div>
            </div>
            <div className="stats-avatars">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces" alt="Agent" className="stats-avatar" />
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=faces" alt="Agent" className="stats-avatar" />
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=faces" alt="Agent" className="stats-avatar" />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro-section">
        At Building Blocks, we design your spaces
        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=200&h=100&fit=crop" alt="Construction" className="intro-img-inline" />
        from groundbreaking concepts to rising structures. Our expertise ensures every project reflects our commitment to excellence. We turn dreams into reality, creating uplifting spaces.
      </section>

      {/* Property Section */}
      <section className="section container">
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
          <button className="filter-chip active">Any Type</button>
          <button className="filter-chip">House</button>
          <button className="filter-chip">Apartment</button>
          <button className="filter-chip">Villa</button>
          <button className="filter-chip">Mansion</button>
          <button className="filter-chip">Penthouse</button>
          <button className="filter-chip">Duplex</button>
        </div>

        <div className="property-grid" style={{ marginTop: '40px' }}>
          {[
            { img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800', name: 'Heritage Apartment of Modern Living', loc: 'Downtown, City', price: '$850,000' },
            { img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800', name: 'Modern Luxury Villa', loc: 'Beverly Hills, CA', price: '$2,450,000' },
            { img: 'https://images.unsplash.com/photo-1600607687931-cebf5825cbef?w=800', name: 'Classic European Residence', loc: 'Westside, New York', price: '$1,200,000' },
            { img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800', name: 'Heritage Cottage', loc: 'Lakeside, WA', price: '$650,000' },
            { img: 'https://images.unsplash.com/photo-1600585154526-990dced4ea0d?w=800', name: 'Contemporary Beach House', loc: 'Malibu, CA', price: '$4,500,000' },
            { img: 'https://images.unsplash.com/photo-1600607687644-aac4c15cecb1?w=800', name: 'Classic Brick Estate', loc: 'Greenwich, CT', price: '$3,100,000' }
          ].map((prop, i) => (
            <div className="property-card" key={i}>
              <div className="property-img-wrap">
                <img src={prop.img} alt={prop.name} className="property-img" />
              </div>
              <div className="property-content">
                <div className="property-price">{prop.price}</div>
                <div className="property-name">{prop.name}</div>
                <div className="property-location">📍 {prop.loc}</div>
                <div className="property-features">
                  <div className="property-feature">🛏️ 4 Beds</div>
                  <div className="property-feature">🛁 3 Baths</div>
                  <div className="property-feature">📐 2,400 sqft</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Projects Section */}
      <section className="section container">
        <div className="section-header">
          <div>
            <div className="section-subtitle">PROJECTS</div>
            <h2 className="section-title">Our Latest Projects</h2>
          </div>
          <button className="btn-primary" style={{ border: '1px solid #ccc' }}>View All Projects</button>
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200" alt="Project 1" className="project-img" />
            <div className="project-card-content">
              <h3 className="project-title">The Sanctuary at Hidden Valley</h3>
              <p className="project-desc">A serene estate blending modern luxury with natural surroundings. Perfect for families seeking a peaceful retreat.</p>
            </div>
          </div>
          <div className="project-card">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200" alt="Project 2" className="project-img" />
            <div className="project-card-content">
              <h3 className="project-title">The Cascade Retreat</h3>
              <p className="project-desc">Elegant and secluded, this stunning property offers breathtaking views and unmatched privacy.</p>
            </div>
          </div>
          <div className="project-card" style={{ opacity: 0.5 }}>
            <img src="https://images.unsplash.com/photo-1600607687931-cebf5825cbef?w=1200" alt="Project 3" className="project-img" />
            <div className="project-card-content">
              <h3 className="project-title">Willow Creek Estate</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <section className="section container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-subtitle">AGENTS</div>
          <h2 className="section-title">Contact with Our Agents</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '20px auto 0' }}>Lorem ipsum dolor sit amet consectetur. Scelerisque in feugiat amet consectetur pellentesque urna.</p>
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
                <img src={agent.img} alt={agent.name} className="agent-img" />
              </div>
              <h4 className="agent-name">{agent.name}</h4>
              <p className="agent-role">{agent.role}</p>
              <div className="agent-socials">
                <button className="agent-social-btn">in</button>
                <button className="agent-social-btn">f</button>
                <button className="agent-social-btn">t</button>
                <button className="agent-social-btn">ig</button>
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
            <h2 className="section-title" style={{ marginBottom: '40px' }}>What Our Client Are Saying</h2>

            <div className="testimonial-images">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600" alt="Clients" className="testimonial-img-1" />
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" alt="Client Focus" className="testimonial-img-2" />
            </div>

            <div style={{ marginTop: '40px' }}>
              <div style={{ fontSize: '48px', lineHeight: 1, color: 'var(--primary-color)', marginBottom: '20px' }}>"</div>
              <p className="testimonial-text">
                "Finding my dream home felt like an impossibility, but your team made it so simple. The personalized attention and incredible dedication really set you apart."
              </p>
              <div>
                <strong>Jane Doe</strong>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Buyer, San Francisco</p>
                <div style={{ color: '#FFD700', marginTop: '10px' }}>★★★★★</div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <div className="section-subtitle">QUESTIONS</div>
            <h2 className="section-title" style={{ marginBottom: '40px' }}>Frequently Asked Question</h2>

            <div className="accordion">
              <div className="accordion-item">
                <button className="accordion-header active">
                  What is your commission percentage?
                  <span className="accordion-icon">+</span>
                </button>
                <div className="accordion-content">
                  We offer a competitive commission structure that varies depending on the property type. Generally, our rate ranges from 5% to 6%, split equally with the buyer's agent. Contact us to learn more.
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-header">
                  How long does it typically take to buy a house?
                  <span className="accordion-icon">+</span>
                </button>
              </div>
              <div className="accordion-item">
                <button className="accordion-header">
                  What is the difference between a real estate agent and a broker?
                  <span className="accordion-icon">+</span>
                </button>
              </div>
              <div className="accordion-item">
                <button className="accordion-header">
                  What are closing costs and who pays them?
                  <span className="accordion-icon">+</span>
                </button>
              </div>
              <div className="accordion-item">
                <button className="accordion-header">
                  Do I need a real estate agent to buy a house?
                  <span className="accordion-icon">+</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Banner */}
      <div className="footer-banner">
        <h2>Find Your Dream Home Today</h2>
        <p>Subscribe to our newsletter and get updates on the latest properties in your area.</p>
        <div className="subscribe-form">
          <input type="email" placeholder="Enter your email address" className="subscribe-input" />
          <button className="btn-subscribe">Subscribe Now</button>
        </div>
      </div>

      {/* Footer Details */}
      <footer className="footer-bottom">
        <div>
          <div className="footer-logo">SANDER HOUSE</div>
          <p className="footer-desc">Experience luxury real estate services tailored to your unique lifestyle. We make property hunting incredibly smooth.</p>
          <div style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
            <span>FB</span>
            <span>TW</span>
            <span>IG</span>
            <span>LI</span>
          </div>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <div className="footer-links">
            <a href="#">About Us</a>
            <a href="#">Properties</a>
            <a href="#">Agents</a>
            <a href="#">Careers</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <div className="footer-links">
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
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
            <a href="#">(00) 123 456 789</a>
            <a href="#">info@sanderhouse.com</a>
          </div>
        </div>
      </footer>
    </>
  );
}
