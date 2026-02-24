import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us - Sander House',
    description: 'Learn about Sander House, where tranquility meets modern living. Our expert team brings decades of real estate experience.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
