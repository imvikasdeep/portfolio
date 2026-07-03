import type { Metadata } from 'next';
import CarWeekClient from './CarWeekClient';

export const metadata: Metadata = {
    title: 'CarWeek Case Study - Vikasdeep Chaudhary',
    description: 'Detailed UI Design, Frontend Development, and API Integration case study of CarWeek, an automotive marketplace platform connecting buyers with dealership inventory.',
};

export default function CarWeekPage() {
    return <CarWeekClient />;
}
