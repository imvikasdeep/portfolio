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

            <section className="study-section" style={{ padding: '0 0 56px' }}>
                <img className='mt-5'
                    src="/assets/media/projects/carweek/carweek_homepage.png"
                    alt="CarWeek Homepage"
                    style={{ width: '100%', display: 'block', borderRadius: '12px' }}
                />

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

            <section className="study-section">
                <h2>Solution &amp; Features</h2>
                <div className="study-text">
                    <p>
                        CarWeek centralizes inventory, search, and lead capture. Hover over the numbers on the homepage preview below to explore the core product features implemented:
                    </p>
                </div>

                <img className='mt-5'
                    src="/assets/media/projects/carweek/carweek-search.png"
                    alt="CarWeek Search Experience"
                    style={{ width: '100%', display: 'block', borderRadius: '12px' }}
                />
            </section>

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

            <section className="study-section">
                <h2>Homepage Development</h2>
                <div className="study-text">
                    <p>
                        The homepage features a search-focused layout to maximize search engagement, followed by category chips and dealership trust blocks.
                    </p>
                </div>
                <img className='mt-5'
                    src="/assets/media/projects/carweek/carweek_homepage.png"
                    alt="Homepage Layout"
                    style={{ width: '100%', display: 'block', borderRadius: '12px' }}
                />
            </section>

            <section className="study-section">
                <h2>Inventory Listing Page</h2>
                <div className="study-text">
                    <p>
                        A data-heavy vehicle catalog featuring customizable filters, sorting layouts, inventory status tags (New / Used / CPO), price indicators, mileage specification badges, and clean pagination.
                    </p>
                </div>
                <img className='mt-5'
                    src="/assets/media/projects/carweek/carweek_inventory.png"
                    alt="Inventory Listing UI"
                    style={{ width: '100%', display: 'block', borderRadius: '12px' }}
                />
            </section>

            <section className="study-section">
                <h2>Vehicle Detail Page</h2>
                <div className="study-text">
                    <p>
                        Integrates dynamic vehicle specifications from database records. I developed a reusable template containing an interactive image carousel, a details specification grid (VIN, engine, drivetrain, MPG), finance calculators, and dealer referral modules.
                    </p>
                </div>
                <img className='mt-5'
                    src="/assets/media/projects/carweek/carweek-vdp.png"
                    alt="Vehicle Details View"
                    style={{ width: '100%', display: 'block', borderRadius: '12px' }}
                />
            </section>

            <section className="study-section">
                <h2>Dealer Profile</h2>
                <div className="study-text">
                    <p>
                        Provides custom workspaces for dealerships showing their location, business hours, and rating distributions. Importantly, the exact same vehicle grid component from the main catalog was reused here, filtered strictly by dealer ID to save codebase size.
                    </p>
                </div>
                <img className='mt-5'
                    src="/assets/media/projects/carweek/carweek_dealer.png"
                    alt="Dealer Profile Page"
                    style={{ width: '100%', display: 'block', borderRadius: '12px' }}
                />
            </section>

            <section className="study-section">
                <h2>Lead Capture &amp; CRM Integration</h2>
                <div className="study-text">
                    <p>
                        A key revenue driver for CarWeek — the lead capture flow surfaces contextual inquiry forms on every vehicle listing, sending structured lead data directly to dealership CRM pipelines. I implemented multi-step form validation, API submission states, and success/error feedback screens.
                    </p>
                </div>
            </section>

            <section className="study-section">
                <h2>Responsive Design</h2>
                <div className="study-text">
                    <p>
                        Every page was built mobile-first with adaptive layouts for desktop, tablet, and mobile viewports. Navigation collapses into a drawer, filter sidebars become bottom sheets, and vehicle cards reflow into single-column stacks — all without separate codebases.
                    </p>
                </div>
                <img className='mt-5'
                    src="/assets/media/projects/carweek/carweek_responsive.png"
                    alt="Responsive Layout Across Devices"
                    style={{ width: '100%', display: 'block', borderRadius: '12px' }}
                />
            </section>


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
