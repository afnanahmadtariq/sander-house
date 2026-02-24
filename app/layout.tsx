import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sander House - Where Tranquility Meets Modern Living",
  description: "Find your perfect home with Sander House. Browse luxury properties, connect with expert agents, and discover your dream home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
