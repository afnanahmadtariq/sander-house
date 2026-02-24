import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Properties - Sander House',
    description: 'Browse our curated collection of luxury properties. Find your dream home with Sander House.',
};

export default function PropertiesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
