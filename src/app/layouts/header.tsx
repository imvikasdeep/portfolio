import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from '../components/ThemeToggle';

function Header() {
    return (
        <header className="site-header">
            <nav className="floating-nav" aria-label="Primary navigation">
                <Link href="/" className="brand-mark" aria-label="Home">
                    <svg xmlns="http://www.w3.org/2000/svg" className='group w-full h-full' viewBox="0 0 67 65" fill="none">
                        <path d="M33.5 0L62.5118 16.25V48.75L33.5 65L4.48815 48.75V16.25L33.5 0Z" fill="var(--primary-accent)" />
                        <path className='duration-300 transform group-hover:translate-[-3px]' d="M61.0117 17.1279V47.8711L33.5 63.2803L5.98828 47.8711V17.1279L33.5 1.71875L61.0117 17.1279Z" fill="var(--background)" stroke="var(--primary-accent)" strokeWidth="3" />
                        <path className='duration-300 transform group-hover:translate-[-3px]' d="M23.0476 41L15.7996 24.2H19.9996L26.3356 39.08H23.8636L30.2956 24.2H34.1596L26.8876 41H23.0476ZM43.4148 41.288C42.1188 41.288 40.9108 41.08 39.7908 40.664C38.6868 40.232 37.7268 39.624 36.9108 38.84C36.0948 38.056 35.4548 37.136 34.9908 36.08C34.5428 35.024 34.3188 33.864 34.3188 32.6C34.3188 31.336 34.5428 30.176 34.9908 29.12C35.4548 28.064 36.0948 27.144 36.9108 26.36C37.7428 25.576 38.7108 24.976 39.8148 24.56C40.9188 24.128 42.1268 23.912 43.4388 23.912C44.8948 23.912 46.2068 24.168 47.3748 24.68C48.5588 25.176 49.5508 25.912 50.3508 26.888L47.8548 29.192C47.2788 28.536 46.6388 28.048 45.9348 27.728C45.2308 27.392 44.4628 27.224 43.6308 27.224C42.8468 27.224 42.1268 27.352 41.4708 27.608C40.8148 27.864 40.2468 28.232 39.7668 28.712C39.2868 29.192 38.9108 29.76 38.6388 30.416C38.3828 31.072 38.2548 31.8 38.2548 32.6C38.2548 33.4 38.3828 34.128 38.6388 34.784C38.9108 35.44 39.2868 36.008 39.7668 36.488C40.2468 36.968 40.8148 37.336 41.4708 37.592C42.1268 37.848 42.8468 37.976 43.6308 37.976C44.4628 37.976 45.2308 37.816 45.9348 37.496C46.6388 37.16 47.2788 36.656 47.8548 35.984L50.3508 38.288C49.5508 39.264 48.5588 40.008 47.3748 40.52C46.2068 41.032 44.8868 41.288 43.4148 41.288Z" fill="var(--primary-accent)" />
                    </svg>
                </Link>
                <div className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#work">Work</a>
                    <a href="#about">About</a>
                </div>
                <ThemeToggle />
            </nav>
        </header>
    );
}

export default Header;
