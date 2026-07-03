import type { JSX } from 'react';

function Footer(): JSX.Element {
    return (
        <footer className="site-footer">
            <span className="footer-credit">
                designed &amp; built by vikasdeep
            </span>
            <nav aria-label="Social links">
                <a href="mailto:vikasdeep3098@gmail.com" aria-label="Email">
                    Email
                </a>
                <a href="https://www.linkedin.com/in/imvikasdeep/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    LinkedIn
                </a>
                <a href="https://github.com/imvikasdeep" target="_blank" rel="noreferrer" aria-label="GitHub">
                    Github
                </a>
                <a href="https://codepen.io/im_vikasdeep" target="_blank" rel="noreferrer" aria-label="Codepen">
                    Codepen
                </a>
            </nav>
        </footer>
    );
}

export default Footer;
