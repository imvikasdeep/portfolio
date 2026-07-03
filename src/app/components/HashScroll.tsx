'use client';

import { useEffect } from 'react';

function scrollToHash() {
    const hash = window.location.hash;
    if (!hash) return;

    const id = decodeURIComponent(hash.slice(1));
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function HashScroll() {
    useEffect(() => {
        scrollToHash();
    }, []);

    return null;
}
