import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact - Sander House',
    description: 'Get in touch with Sander House. Schedule a visit or reach out to our expert agents.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
