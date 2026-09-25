import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Car Dealerships Market Platform Case Study - Vikasdeep Chaudhary',
    description: 'Angular dealership website management platform case study.',
};

const challenges = [
    ['01', 'Fragmented tools', 'Website updates, SEO, analytics, and social performance were spread across disconnected tools and teams.'],
    ['02', 'Slow content updates', 'Routine updates to dealership details, media, pages, and marketing content depended on technical support.'],
    ['03', 'Complex access', 'Dealer groups needed secure role-aware access across multiple dealership entities.'],
    ['04', 'Disconnected insight', 'Performance data lived in Google, Meta, and PageSpeed products instead of one business-friendly view.'],
];

const contributions = [
    ['UI', 'Admin Experience', 'Responsive Angular modules and reusable UI patterns'],
    ['API', 'Platform APIs', 'Dealership, content, media, SEO, and user services'],
    ['SSO', 'Azure Authentication', 'MSAL login, sessions, guards, and role-aware routing'],
    ['Data', 'Marketing Insights', 'GA4, Search Console, Meta, and PageSpeed workflows'],
    ['UX', 'Reliable States', 'Validation, loaders, feedback, and error recovery'],
];

export default function CarDealershipsMarketPlatformPage() {
    return <main className="case-study-page">
        <div className="case-study-header">
            <Link href="/" className="back-home-btn" style={{ marginBottom: '24px' }}>← Back to Portfolio</Link>
            <h1>Car Dealerships Market Platform</h1>
            <p className="case-study-tagline">Dealer website management platform for content, SEO, and marketing performance</p>
        </div>

        <section className="impact-box">
            {[
                ['blue', 'Angular Admin UI', 'Responsive, reusable modules'], ['green', 'Azure SSO', 'Secure, role-aware access'], ['amber', 'Multi-API Platform', 'Internal and third-party data'], ['violet', 'Executive Dashboard', 'Unified marketing insights'], ['teal', 'CMS Workflows', 'Content, media, SEO, and settings'],
            ].map(([tone, title, detail]) => <div className="impact-item" key={title}><div className={`impact-dot impact-dot--${tone}`} /><div><strong>{title}</strong><p style={{ margin: 0, fontSize: '12px' }}>{detail}</p></div></div>)}
        </section>

        <section className="study-section" style={{ paddingTop: 0 }}>
            <DashboardPreview />
            <div className="meta-grid">
                <Meta label="Role" value="UI Design • Frontend Development • API Integration" /><Meta label="Platform" value="Angular • TypeScript • Bootstrap • RxJS" /><Meta label="Team" value="Frontend (Me) • Backend/API • QA • PM" /><Meta label="Integrations" value="Azure • Google • Meta • PageSpeed" />
            </div>
        </section>

        <Content title="Overview"><p>Car Dealerships Market Platform is a centralized admin platform for automotive dealerships and dealer groups. It gives business users direct control over their website presence: dealership details, content, media, SEO, settings, reviews, and user access—without depending on a technical team for every update.</p><p>The platform also brings website and marketing performance into the same experience, turning Google Analytics, Search Console, PageSpeed, Facebook, and Instagram data into useful daily reporting.</p></Content>

        <section className="study-section"><h2>The Challenge</h2><div className="study-text"><p>Dealership teams needed one approachable workspace to manage content and understand digital performance. The frontend had to make form-heavy CMS workflows, multiple authentication models, and role-specific administration clear and dependable for non-technical users.</p></div><div className="problem-list">{challenges.map(([number, title, text]) => <div className="problem-card" key={number}><div className="problem-label">{number}</div><h3>{title}</h3><p>{text}</p></div>)}</div></section>

        <Content title="Solution"><p>I helped build a modular Angular admin experience with dedicated areas for dealership profiles, website configuration, articles, media, SEO, reviews, users, and executive reporting. Shared forms, loaders, modals, validation messages, and feedback states keep a broad platform cohesive.</p><div className="platform-flow"><div className="flow-node flow-node--primary">Angular admin<br /><small>Role-aware workspace</small></div><div className="flow-connector">↓</div><div className="flow-sources"><span>Internal APIs</span><span>Azure SSO</span><span>Google</span><span>Meta</span><span>PageSpeed</span></div></div></Content>

        <section className="study-section"><h2>My Contribution</h2><div className="study-text"><p>I owned the admin UI and frontend implementation, translating backend and third-party services into secure, responsive, practical workflows.</p></div><div className="role-cards">{contributions.map(([tag, title, text]) => <div className="role-card" key={tag}><div className="role-card-tag">{tag}</div><h3>{title}</h3><p>{text}</p></div>)}</div></section>

        <Content title="Website & Content Management"><p>Business users can update dealership information, hours, location data, services, banners, page content, theme and inventory settings, robots configuration, and metadata. Article workflows support rich text, categories, image handling, reusable editor components, and contextual AI-assisted content generation.</p></Content>
        <Content title="Media, Gallery & SEO"><p>The platform includes media and photo management for dealership images and website assets, alongside a vehicle-gallery picker for browsing makes, models, years, and gallery images before inserting an asset into content. SEO tools bring tag management, Search Console data, sitemap/index information, and performance checks into the admin workflow.</p></Content>
        <Content title="Executive Dashboard"><p>The Executive Dashboard consolidates traffic, search visibility, social performance, and site health. I implemented frontend flows for GA4 sessions and top pages, Search Console keywords and landing pages, PageSpeed scores and diagnostics, and Facebook/Instagram reach, followers, and post insights.</p><div className="dashboard-metrics"><Metric value="GA4" label="Traffic & top pages" /><Metric value="GSC" label="Keywords & visibility" /><Metric value="PSI" label="Core Web Vitals" /><Metric value="META" label="Social performance" /></div></Content>
        <Content title="Authentication & Reliability"><p>Azure SSO is implemented with MSAL for secure login, logout, session handling, and authorization checks. Role and dealership context drive guarded routes and personalized navigation. Across the platform, I built loading states, structured error feedback, validation, token handling, and recovery flows that make API-heavy tasks understandable and reliable.</p></Content>

        <section className="study-section" style={{ borderBottom: 'none' }}><h2>Final Product Highlights</h2><div className="highlight-list">{['Centralized website, content, media, SEO, and user administration', 'Azure SSO with role-aware navigation and protected routes', 'Google, Meta, and PageSpeed data unified in dashboard workflows', 'Reusable Angular components for scalable, consistent admin experiences', 'Responsive forms, validation, loaders, and clear feedback states'].map(item => <div className="highlight-item" key={item}>✓ {item}</div>)}</div><div className="study-footer-nav"><Link href="/" className="back-home-btn">← Back to Home</Link></div></section>
    </main>;
}

function Content({ title, children }: { title: string; children: React.ReactNode }) { return <section className="study-section"><h2>{title}</h2><div className="study-text">{children}</div></section>; }
function Meta({ label, value }: { label: string; value: string }) { return <div><div className="meta-label">{label}</div><div className="meta-val">{value}</div></div>; }
function Metric({ value, label }: { value: string; label: string }) { return <div><strong>{value}</strong><span>{label}</span></div>; }
function DashboardPreview() { return <div className="sba-preview" aria-label="Illustrative Car Dealerships Market Platform executive dashboard"><aside><strong>SBA</strong><span className="active" /><span /><span /><span /><span /></aside><div className="sba-preview__body"><div className="sba-preview__top"><div><small>EXECUTIVE DASHBOARD</small><h3>Good morning, Dealer Team</h3></div><button>Last 30 days</button></div><div className="sba-preview__cards"><Metric value="42.8K" label="Website sessions" /><Metric value="18.6K" label="Search impressions" /><Metric value="92" label="Performance score" /></div><div className="sba-preview__chart"><strong>Traffic overview</strong><small>Sessions by day</small><svg viewBox="0 0 460 120" preserveAspectRatio="none"><path d="M0 98 C35 70 55 95 90 65 S145 85 182 44 S230 78 268 52 S320 18 355 42 S415 15 460 27" fill="none" stroke="currentColor" strokeWidth="3" /></svg></div></div></div>; }
