'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

// Mock cars data for the interactive filter sandbox
const MOCK_CARS = [
    { id: 1, make: 'Toyota', model: 'RAV4 Hybrid', style: 'SUV', year: 2022, price: 28500, label: 'Toyota RAV4' },
    { id: 2, make: 'Honda', model: 'Civic Sedan', style: 'Sedan', year: 2021, price: 22000, label: 'Honda Civic' },
    { id: 3, make: 'Ford', model: 'Mustang GT', style: 'Coupe', year: 2023, price: 45000, label: 'Ford Mustang' },
    { id: 4, make: 'Tesla', model: 'Model 3', style: 'Sedan', year: 2021, price: 32000, label: 'Tesla Model 3' },
    { id: 5, make: 'Toyota', model: 'Highlander', style: 'SUV', year: 2023, price: 39500, label: 'Toyota Highlander' },
    { id: 6, make: 'Ford', model: 'Explorer', style: 'SUV', year: 2022, price: 34000, label: 'Ford Explorer' },
    { id: 7, make: 'Honda', model: 'CR-V', style: 'SUV', year: 2023, price: 31000, label: 'Honda CR-V' },
    { id: 8, make: 'Tesla', model: 'Model Y', style: 'SUV', year: 2023, price: 47500, label: 'Tesla Model Y' },
];

export default function CarWeekClient() {
    // State for Interactive Filters
    const [makeFilter, setMakeFilter] = useState('All');
    const [styleFilter, setStyleFilter] = useState('All');
    const [yearFilter, setYearFilter] = useState('All');
    const [budgetFilter, setBudgetFilter] = useState('All');

    // State for Lead Form Simulation
    const [leadName, setLeadName] = useState('');
    const [leadEmail, setLeadEmail] = useState('');
    const [leadMessage, setLeadMessage] = useState('I am interested in this vehicle and would like to request a quote.');
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    // State for Challenge state switcher
    const [activeDemoState, setActiveDemoState] = useState<'normal' | 'loading' | 'empty' | 'error'>('normal');

    // Filter logic
    const filteredCars = useMemo(() => {
        return MOCK_CARS.filter(car => {
            if (makeFilter !== 'All' && car.make !== makeFilter) return false;
            if (styleFilter !== 'All' && car.style !== styleFilter) return false;
            if (yearFilter !== 'All' && car.year.toString() !== yearFilter) return false;
            if (budgetFilter !== 'All') {
                if (budgetFilter === '<$30K' && car.price >= 30000) return false;
                if (budgetFilter === '<$40K' && car.price >= 40000) return false;
            }
            return true;
        });
    }, [makeFilter, styleFilter, yearFilter, budgetFilter]);

    // Handle form submit simulation
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!leadName || !leadEmail) return;
        setFormStatus('submitting');
        setTimeout(() => {
            setFormStatus('success');
        }, 1200);
    };

    const resetForm = () => {
        setLeadName('');
        setLeadEmail('');
        setFormStatus('idle');
    };

    return (
        <main className="case-study-page">
            {/* Header / Back Navigation */}
            <div className="case-study-header">
                <Link href="/" className="back-home-btn" style={{ marginBottom: '24px' }}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    Back to Portfolio
                </Link>
                <h1>CarWeek</h1>
                <p className="case-study-tagline">Automotive Marketplace connecting buyers with dealership inventory</p>
            </div>

            {/* Impact Highlights Box */}
            <section className="impact-box">
                <div className="impact-item">
                    <div className="impact-dot impact-dot--blue"></div>
                    <div>
                        <strong>UI Implementation</strong>
                        <p style={{ margin: 0, fontSize: '12px' }}>Complete responsive frontend</p>
                    </div>
                </div>
                <div className="impact-item">
                    <div className="impact-dot impact-dot--green"></div>
                    <div>
                        <strong>Fully Responsive</strong>
                        <p style={{ margin: 0, fontSize: '12px' }}>Optimized for Mobile/Tablet</p>
                    </div>
                </div>
                <div className="impact-item">
                    <div className="impact-dot impact-dot--amber"></div>
                    <div>
                        <strong>30+ REST Endpoints</strong>
                        <p style={{ margin: 0, fontSize: '12px' }}>Seamless data integration</p>
                    </div>
                </div>
                <div className="impact-item">
                    <div className="impact-dot impact-dot--violet"></div>
                    <div>
                        <strong>Modular Architecture</strong>
                        <p style={{ margin: 0, fontSize: '12px' }}>Highly reusable component library</p>
                    </div>
                </div>
                <div className="impact-item">
                    <div className="impact-dot impact-dot--teal"></div>
                    <div>
                        <strong>Cross-Team Collab</strong>
                        <p style={{ margin: 0, fontSize: '12px' }}>Collaborated with Backend &amp; QA</p>
                    </div>
                </div>
            </section>

            {/* Section 1: Hero Image & Metadata */}
            <section className="study-section" style={{ padding: '0 0 56px' }}>
                <div className="screenshot-container" style={{ aspectRatio: '16/9' }}>
                    <img 
                        src="/assets/media/projects/carweek/carweek_homepage.png" 
                        alt="CarWeek Homepage" 
                        className="screenshot-img"
                    />
                </div>

                <div className="meta-grid">
                    <div>
                        <div className="meta-label">Role</div>
                        <div className="meta-val">UI Design • Frontend Development • API Integration</div>
                    </div>
                    <div>
                        <div className="meta-label">Duration</div>
                        <div className="meta-val">4 Months</div>
                    </div>
                    <div>
                        <div className="meta-label">Team</div>
                        <div className="meta-val">Frontend (Me) • Backend/API • QA • PM</div>
                    </div>
                    <div>
                        <div className="meta-label">Live Website</div>
                        <div className="meta-val">
                            <a href="https://www.carweek.com/" target="_blank" rel="noreferrer">carweek.com ↗</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Overview */}
            <section className="study-section">
                <h2>Overview</h2>
                <div className="study-text">
                    <p>
                        CarWeek is a comprehensive automotive marketplace that aggregates vehicle inventory from multiple dealerships across the United States into one searchable platform. Instead of visiting individual, fragmented dealership websites, buyers can search thousands of vehicles, compare specifications, discover nearby dealers, and directly submit inquiries.
                    </p>
                    <p>
                        The platform bridges the gap between vehicle research and dealer CRM systems, helping dealerships capture qualified leads while offering buyers a fast, modern car discovery experience.
                    </p>
                </div>
            </section>

            {/* Section 3: The Problem */}
            <section className="study-section">
                <h2>The Problem</h2>
                <div className="study-text">
                    <p>
                        Most car dealership websites operate as independent silos. This creates several key problems for both buyers and sellers:
                    </p>
                </div>
                <div className="problem-list">
                    <div className="problem-card">
                        <div className="problem-label">01</div>
                        <h3>Isolated Dealerships</h3>
                        <p>Buyers have to manually visit dozens of independent dealer websites to search and compare models.</p>
                    </div>
                    <div className="problem-card">
                        <div className="problem-label">02</div>
                        <h3>Scattered Inventory</h3>
                        <p>Inventory data is fragmented, and slow updates lead to outdated information, damaging buyer trust.</p>
                    </div>
                    <div className="problem-card">
                        <div className="problem-label">03</div>
                        <h3>Lost Inquiries</h3>
                        <p>Without centralized capture, dealers lose high-intent potential customers early in the browsing funnel.</p>
                    </div>
                    <div className="problem-card">
                        <div className="problem-label">04</div>
                        <h3>Difficult Search</h3>
                        <p>Comparing pricing, mileage, and specifications across different sites is complex and tedious.</p>
                    </div>
                </div>
            </section>

            {/* Section 4: Solution with Interactive Hotspots */}
            <section className="study-section">
                <h2>Solution &amp; Features</h2>
                <div className="study-text">
                    <p>
                        CarWeek centralizes inventory, search, and lead capture. Hover over the numbers on the homepage preview below to explore the core product features implemented:
                    </p>
                </div>

                <div className="screenshot-container">
                    <img 
                        src="/assets/media/projects/carweek/carweek_homepage.png" 
                        alt="CarWeek Features Solution" 
                        className="screenshot-img"
                    />
                    <div className="screenshot-overlay">
                        {/* Hotspot 1: Vehicle Search */}
                        <div className="annotated-hotspot" style={{ top: '25%', left: '48%' }}>
                            1
                            <div className="hotspot-tooltip">
                                <strong>① Advanced Vehicle Search</strong><br />
                                Supports multi-parameter filtering (Make, Model, Price, Body) directly connected to the search API.
                            </div>
                        </div>

                        {/* Hotspot 2: Featured Inventory */}
                        <div className="annotated-hotspot" style={{ top: '55%', left: '30%' }}>
                            2
                            <div className="hotspot-tooltip">
                                <strong>② Browse Featured Inventory</strong><br />
                                Dynamic grids displaying vehicle cards with live pricing, VIN numbers, and dealer ratings.
                            </div>
                        </div>

                        {/* Hotspot 3: Dealer Directory */}
                        <div className="annotated-hotspot" style={{ top: '80%', left: '72%' }}>
                            3
                            <div className="hotspot-tooltip">
                                <strong>③ Dealer Discovery</strong><br />
                                Prominently exposes nearby verified dealers, their profiles, rating levels, and hours.
                            </div>
                        </div>

                        {/* Hotspot 4: Lead Gen Form */}
                        <div className="annotated-hotspot" style={{ top: '65%', left: '80%' }}>
                            4
                            <div className="hotspot-tooltip">
                                <strong>④ Direct CRM Lead Capture</strong><br />
                                Inquiry overlays and buttons sending lead data straight to the dealership CRM.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: My Contribution */}
            <section className="study-section">
                <h2>My Contribution</h2>
                <div className="study-text">
                    <p>
                        I was responsible for the entire user interface and frontend engineering of the platform, transforming high-fidelity designs into production-ready pages and integrating them with the backend REST APIs.
                    </p>
                </div>
                <div className="role-cards">
                    <div className="role-card">
                        <div className="role-card-tag">Design</div>
                        <h3>UI Design</h3>
                        <p style={{ fontSize: '11px', color: 'var(--foreground-muted)', margin: '4px 0 0' }}>Sleek dark layout &amp; micro-interactions</p>
                    </div>
                    <div className="role-card">
                        <div className="role-card-tag">Dev</div>
                        <h3>Frontend Dev</h3>
                        <p style={{ fontSize: '11px', color: 'var(--foreground-muted)', margin: '4px 0 0' }}>Component architecture &amp; Angular layouts</p>
                    </div>
                    <div className="role-card">
                        <div className="role-card-tag">API</div>
                        <h3>API Integration</h3>
                        <p style={{ fontSize: '11px', color: 'var(--foreground-muted)', margin: '4px 0 0' }}>Connected 30+ endpoints &amp; validations</p>
                    </div>
                    <div className="role-card">
                        <div className="role-card-tag">UX</div>
                        <h3>Responsive Design</h3>
                        <p style={{ fontSize: '11px', color: 'var(--foreground-muted)', margin: '4px 0 0' }}>Desktop, tablet &amp; mobile layout flows</p>
                    </div>
                    <div className="role-card">
                        <div className="role-card-tag">Team</div>
                        <h3>Collaboration</h3>
                        <p style={{ fontSize: '11px', color: 'var(--foreground-muted)', margin: '4px 0 0' }}>API handshakes with backend engineers</p>
                    </div>
                </div>
            </section>

            {/* Section 6: Homepage Development with Annotations */}
            <section className="study-section">
                <h2>Homepage Development</h2>
                <div className="study-text">
                    <p>
                        The homepage features a search-focused layout to maximize search engagement, followed by category chips and dealership trust blocks.
                    </p>
                </div>
                <div className="screenshot-container">
                    <img 
                        src="/assets/media/projects/carweek/carweek_homepage.png" 
                        alt="Homepage Layout" 
                        className="screenshot-img"
                    />
                    <div className="screenshot-overlay">
                        <div className="callout-arrow-label" style={{ top: '15%', left: '8%' }}>
                            <span>↑</span> Hero Search Widget
                        </div>
                        <div className="callout-arrow-label" style={{ top: '38%', left: '80%' }}>
                            <span>←</span> Featured Vehicles Grid
                        </div>
                        <div className="callout-arrow-label" style={{ bottom: '25%', left: '15%' }}>
                            <span>↓</span> Dealership CTA Block
                        </div>
                        <div className="callout-arrow-label" style={{ bottom: '5%', left: '45%' }}>
                            <span>↓</span> Footer &amp; SEO Links
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 7: Inventory Listing Page */}
            <section className="study-section">
                <h2>Inventory Listing Page</h2>
                <div className="study-text">
                    <p>
                        A data-heavy vehicle catalog featuring customizable filters, sorting layouts, inventory status tags (New / Used / CPO), price indicators, mileage specification badges, and clean pagination.
                    </p>
                </div>
                <div className="screenshot-container">
                    <img 
                        src="/assets/media/projects/carweek/carweek_inventory.png" 
                        alt="Inventory Listing UI" 
                        className="screenshot-img"
                    />
                    <div className="screenshot-overlay">
                        <div className="callout-arrow-label" style={{ top: '22%', left: '5%' }}>
                            <span>→</span> Sidebar Search Filters
                        </div>
                        <div className="callout-arrow-label" style={{ top: '45%', left: '42%' }}>
                            <span>←</span> Dynamic Product Cards
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 8: Vehicle Detail Page */}
            <section className="study-section">
                <h2>Vehicle Detail Page</h2>
                <div className="study-text">
                    <p>
                        Integrates dynamic vehicle specifications from database records. I developed a reusable template containing an interactive image carousel, a details specification grid (VIN, engine, drivetrain, MPG), finance calculators, and dealer referral modules.
                    </p>
                </div>
                <div className="screenshot-container">
                    <img 
                        src="/assets/media/projects/carweek/carweek_details.png" 
                        alt="Vehicle Details View" 
                        className="screenshot-img"
                    />
                </div>
            </section>

            {/* Section 9: Dealer Profile */}
            <section className="study-section">
                <h2>Dealer Profile</h2>
                <div className="study-text">
                    <p>
                        Provides custom workspaces for dealerships showing their location, business hours, and rating distributions. Importantly, the exact same vehicle grid component from the main catalog was reused here, filtered strictly by dealer ID to save codebase size.
                    </p>
                </div>
                <div className="screenshot-container">
                    <img 
                        src="/assets/media/projects/carweek/carweek_dealer.png" 
                        alt="Dealer Profile Page" 
                        className="screenshot-img"
                    />
                </div>
            </section>

            {/* Section 10: Interactive Search & Filtering Sandbox */}
            <section className="study-section">
                <h2>Interactive Sandbox: Search &amp; Filtering</h2>
                <div className="study-text">
                    <p>
                        Recruiters and managers love seeing real code in action. Try modifying the dropdowns below to experience how the frontend manages state and updates vehicle listings dynamically in real time:
                    </p>
                </div>

                <div className="filter-playground">
                    <div className="filter-playground-header">
                        <h3>Vehicle Directory Sandbox</h3>
                        <div className="filter-active-count">
                            Found <strong>{filteredCars.length}</strong> vehicles matching filters
                        </div>
                    </div>

                    <div className="filter-controls">
                        <div>
                            <label style={{ display: 'block', fontSize: '10.5px', marginBottom: '4px', fontWeight: '700' }}>MAKE</label>
                            <select className="filter-select" value={makeFilter} onChange={(e) => setMakeFilter(e.target.value)}>
                                <option value="All">All Makes</option>
                                <option value="Toyota">Toyota</option>
                                <option value="Honda">Honda</option>
                                <option value="Ford">Ford</option>
                                <option value="Tesla">Tesla</option>
                            </select>
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '10.5px', marginBottom: '4px', fontWeight: '700' }}>BODY STYLE</label>
                            <select className="filter-select" value={styleFilter} onChange={(e) => setStyleFilter(e.target.value)}>
                                <option value="All">All Styles</option>
                                <option value="SUV">SUV</option>
                                <option value="Sedan">Sedan</option>
                                <option value="Coupe">Coupe</option>
                            </select>
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '10.5px', marginBottom: '4px', fontWeight: '700' }}>YEAR</label>
                            <select className="filter-select" value={yearFilter} onChange={(e) => setYearFilter(e.target.value)}>
                                <option value="All">All Years</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                            </select>
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '10.5px', marginBottom: '4px', fontWeight: '700' }}>MAX BUDGET</label>
                            <select className="filter-select" value={budgetFilter} onChange={(e) => setBudgetFilter(e.target.value)}>
                                <option value="All">Any Price</option>
                                <option value="<$30K">&lt; $30,000</option>
                                <option value="<$40K">&lt; $40,000</option>
                            </select>
                        </div>
                    </div>

                    <div className="filter-cars-grid">
                        {filteredCars.length > 0 ? (
                            filteredCars.map(car => (
                                <div key={car.id} className="mini-car-card">
                                    <div className="mini-car-thumb">{car.label}</div>
                                    <div className="mini-car-details">
                                        <h4 className="mini-car-title">{car.make} {car.model}</h4>
                                        <p className="mini-car-specs">{car.year} · {car.style}</p>
                                        <span className="mini-car-price">${car.price.toLocaleString()}</span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '36px', color: 'var(--foreground-muted)' }}>
                                <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px solid var(--border)', margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>0</div>
                                No vehicles match your current filter selections.
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Section 11: Interactive Lead Generation Simulator */}
            <section className="study-section">
                <h2>Interactive Sandbox: Lead Generation</h2>
                <div className="study-text">
                    <p>
                        Lead generation is the vital business metric for CarWeek. Fill out the simulator below to submit an inquiry. It will trigger a mock POST API call and return the response state:
                    </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '28px' }}>
                    {formStatus === 'success' ? (
                        <div className="simulator-form" style={{ textAlign: 'center', padding: '32px 20px' }}>
                            <div className="sim-success">
                                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(16,185,129,0.12)', border: '2px solid #10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <h3>Inquiry Transmitted</h3>
                                <p style={{ fontSize: '13px', color: 'var(--foreground-muted)', margin: '8px 0 16px' }}>
                                    Lead ID <strong>#CW-{(Math.random()*100000).toFixed(0)}</strong> captured. Handshake complete with dealership CRM system.
                                </p>
                                <button className="sg-btn-secondary" onClick={resetForm}>Send Another Inquiry</button>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleFormSubmit} className="simulator-form">
                            <h3 style={{ margin: '0 0 16px', fontSize: '14px', fontWeight: '700' }}>Contact Dealership</h3>
                            <input 
                                type="text" 
                                className="sim-input" 
                                placeholder="Your Full Name" 
                                value={leadName}
                                onChange={(e) => setLeadName(e.target.value)}
                                required 
                            />
                            <input 
                                type="email" 
                                className="sim-input" 
                                placeholder="Email Address" 
                                value={leadEmail}
                                onChange={(e) => setLeadEmail(e.target.value)}
                                required 
                            />
                            <textarea 
                                className="sim-input sim-textarea" 
                                placeholder="Message to Dealer" 
                                value={leadMessage}
                                onChange={(e) => setLeadMessage(e.target.value)}
                                required
                            ></textarea>
                            <button type="submit" className="sim-submit" disabled={formStatus === 'submitting'}>
                                {formStatus === 'submitting' ? (
                                    <>
                                        <svg style={{ animation: 'spin 1s linear infinite', width: '16px', height: '16px', border: '2px solid transparent', borderTopColor: 'var(--background)', borderRadius: '50%' }} viewBox="0 0 24 24"></svg>
                                        Transmitting Lead...
                                    </>
                                ) : (
                                    'Submit CRM Lead'
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </section>

            {/* Section 12: Responsive Design */}
            <section className="study-section">
                <h2>Responsive Design</h2>
                <div className="study-text">
                    <p>
                        The marketplace is designed to scale dynamically from desktop down to tablet and mobile viewports. I utilized fluid grids, responsive navigation states, and auto-hiding panels to ensure vehicle browsing is seamless on phones.
                    </p>
                </div>
                <div className="screenshot-container">
                    <img 
                        src="/assets/media/projects/carweek/carweek_responsive.png" 
                        alt="Responsive Design Grid" 
                        className="screenshot-img"
                    />
                </div>
            </section>

            {/* Section 13: API Integration Diagram */}
            <section className="study-section">
                <h2>REST API Integration Map</h2>
                <div className="study-text">
                    <p>
                        Below is a diagram of the frontend's REST API clients routing requests to separate backend endpoints. I abstracted these connections into a clean API service layer in Angular featuring response validation and type safety:
                    </p>
                </div>

                <div className="api-diagram">
                    <div className="diagram-node node-client">
                        Frontend UI Client (Angular)
                    </div>
                    
                    <div className="arrow-line"></div>
                    
                    <div className="diagram-arrows">
                        <div className="api-arrow-card">
                            <div className="diagram-node node-api">Vehicle API</div>
                            <div className="arrow-line"></div>
                            <div className="arrow-label">GET /api/vehicles</div>
                        </div>
                        <div className="api-arrow-card">
                            <div className="diagram-node node-api">Dealer API</div>
                            <div className="arrow-line"></div>
                            <div className="arrow-label">GET /api/dealers</div>
                        </div>
                        <div className="api-arrow-card">
                            <div className="diagram-node node-api">Search API</div>
                            <div className="arrow-line"></div>
                            <div className="arrow-label">GET /api/search</div>
                        </div>
                        <div className="api-arrow-card">
                            <div className="diagram-node node-api">Lead API</div>
                            <div className="arrow-line"></div>
                            <div className="arrow-label">POST /api/leads</div>
                        </div>
                        <div className="api-arrow-card">
                            <div className="diagram-node node-api">Blog API</div>
                            <div className="arrow-line"></div>
                            <div className="arrow-label">GET /api/articles</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 14: Challenges & State Switcher */}
            <section className="study-section">
                <h2>Production Challenges: API-Driven UX States</h2>
                <div className="study-text">
                    <p>
                        When working with external REST APIs and dynamic data, handling load and failure cycles cleanly is critical to client retention. Explore the demo below to see how I implemented skeleton loaders, empty searches, and error recovery:
                    </p>
                </div>

                <div className="challenge-demo">
                    <div className="switcher-tabs">
                        <button 
                            className={`switcher-tab ${activeDemoState === 'normal' ? 'active' : ''}`}
                            onClick={() => setActiveDemoState('normal')}
                        >
                            Normal Card
                        </button>
                        <button 
                            className={`switcher-tab ${activeDemoState === 'loading' ? 'active' : ''}`}
                            onClick={() => setActiveDemoState('loading')}
                        >
                            Loading Skeleton
                        </button>
                        <button 
                            className={`switcher-tab ${activeDemoState === 'empty' ? 'active' : ''}`}
                            onClick={() => setActiveDemoState('empty')}
                        >
                            Empty State
                        </button>
                        <button 
                            className={`switcher-tab ${activeDemoState === 'error' ? 'active' : ''}`}
                            onClick={() => setActiveDemoState('error')}
                        >
                            Error State
                        </button>
                    </div>

                    <div className="demo-viewport">
                        {activeDemoState === 'normal' && (
                            <div className="mini-car-card" style={{ width: '200px' }}>
                                <div className="mini-car-thumb">Toyota RAV4</div>
                                <div className="mini-car-details">
                                    <h4 className="mini-car-title">Toyota RAV4 Hybrid</h4>
                                    <p className="mini-car-specs">2022 · SUV</p>
                                    <span className="mini-car-price">$28,500</span>
                                </div>
                            </div>
                        )}

                        {activeDemoState === 'loading' && (
                            <div className="skeleton-car">
                                <div className="skeleton-thumb">
                                    <div className="shimmer"></div>
                                </div>
                                <div className="skeleton-line shimmer"></div>
                                <div className="skeleton-line short shimmer"></div>
                                <div className="skeleton-line price shimmer" style={{ marginTop: '16px' }}></div>
                            </div>
                        )}

                        {activeDemoState === 'empty' && (
                            <div style={{ textAlign: 'center', padding: '16px', color: 'var(--foreground-muted)' }}>
                                <div style={{ width: '42px', height: '42px', border: '2px dashed var(--border)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                </div>
                                <h4 style={{ margin: '0 0 4px', fontSize: '13.5px', color: 'var(--foreground)' }}>No Inventory Available</h4>
                                <p style={{ margin: 0, fontSize: '11.5px' }}>Try adjusting your search criteria.</p>
                            </div>
                        )}

                        {activeDemoState === 'error' && (
                            <div className="error-view">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                </svg>
                                <h4 className="error-title">Endpoint Connection Failed</h4>
                                <p className="error-msg">HTTP Status 503: Service Unavailable.</p>
                                <button className="error-retry-btn" onClick={() => setActiveDemoState('normal')}>Retry Handshake</button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Section 15: UI Component Collage */}
            <section className="study-section">
                <h2>UI Component Architecture</h2>
                <div className="study-text">
                    <p>
                        I engineered a localized, reusable UI design system to keep code modular and styling unified. Every card, pagination button, badge, and chip was written as an independent Angular component:
                    </p>
                </div>

                <div className="styleguide-grid">
                    <div className="styleguide-card">
                        <h3>Primary &amp; Secondary Buttons</h3>
                        <div className="sg-flex">
                            <button className="sg-btn-primary">Find Cars</button>
                            <button className="sg-btn-secondary">Details</button>
                        </div>
                    </div>
                    <div className="styleguide-card">
                        <h3>Inventory Badges</h3>
                        <div className="sg-flex">
                            <span className="sg-badge sg-badge-new">New</span>
                            <span className="sg-badge sg-badge-used">Used</span>
                        </div>
                    </div>
                    <div className="styleguide-card">
                        <h3>Filter Chips</h3>
                        <div className="sg-flex">
                            <div className="sg-chip">SUV <span style={{ opacity: 0.5 }}>×</span></div>
                            <div className="sg-chip">Toyota <span style={{ opacity: 0.5 }}>×</span></div>
                        </div>
                    </div>
                    <div className="styleguide-card">
                        <h3>Search Pagination</h3>
                        <div className="sg-flex">
                            <div className="sg-pagination">
                                <span className="sg-page-num">1</span>
                                <span className="sg-page-num active">2</span>
                                <span className="sg-page-num">3</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 16: Final Product Highlights */}
            <section className="study-section" style={{ borderBottom: 'none' }}>
                <h2>Final Product Highlights</h2>
                <div className="study-text">
                    <p>
                        CarWeek is a production-scale application built with a responsive layout, complex state filtering, robust error handling, and CRM integrations.
                    </p>
                </div>
                
                <div className="highlight-list">
                    <div className="highlight-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Fully Responsive layouts (Desktop, Tablet, Mobile)
                    </div>
                    <div className="highlight-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        30+ REST API endpoints integrated with state transitions
                    </div>
                    <div className="highlight-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        High-conversion CRM lead capture forms
                    </div>
                    <div className="highlight-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Modular and scalable Angular component system
                    </div>
                </div>

                <div className="screenshot-container" style={{ margin: '40px 0 20px' }}>
                    <img 
                        src="/assets/media/projects/carweek/carweek_homepage.png" 
                        alt="CarWeek Final Showcase" 
                        className="screenshot-img"
                    />
                </div>

                <div className="study-footer-nav">
                    <Link href="/" className="back-home-btn">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                        Back to Home
                    </Link>
                    <a href="https://www.carweek.com/" target="_blank" rel="noreferrer" className="back-home-btn" style={{ borderColor: 'var(--foreground-muted)' }}>
                        View Live Site ↗
                    </a>
                </div>
            </section>
        </main>
    );
}
