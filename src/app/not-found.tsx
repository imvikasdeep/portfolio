import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="portfolio-shell not-found-page">
            <section className="hero-copy">
                <p className="availability">404</p>
                <h1>This page is not in the portfolio.</h1>
                <Link href="/" className="return-home">
                    Back home
                </Link>
            </section>
        </main>
    );
}
