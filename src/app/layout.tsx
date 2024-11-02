import './globals.css'
import type { Metadata } from 'next'
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://webdevian.ch'),
  title: {
    default: 'WebDevian GmbH | Innovative Webentwicklung',
    template: '%s | WebDevian GmbH'
  },
  description: 'WebDevian GmbH - Ihre Experten für moderne Webentwicklung, E-Commerce und digitale Lösungen in der Schweiz.',
  keywords: [
    'Webentwicklung',
    'E-Commerce',
    'Digitale Lösungen',
    'Website Entwicklung',
    'Web Design',
    'Online Shop',
    'SEO',
    'Schweiz',
    'Bülach',
    'DevHub Plattform',
    'IT Lösungen Schweiz',
    'Produktentwicklung IT',
    'Benutzerfreundlichkeit IT',
    'Outsourcing Partner Schweiz',
    'Technische Dokumentation IT',
    'Webseiten Erstellung Schweiz',
    'Website Redesign Service',
    'SEO Agentur Schweiz',
    'SEO Optimierung',
    'Google Ads Service',
    'Google Ads Management',
    'Responsive Webdesign Schweiz',
    'Content Management System',
    'Performance Optimierung',
    'Hosting Lösungen Schweiz',
    'Sicheres Webhosting',
    'Business Hosting',
    'E-Mail Hosting Service',
    'Domain Registrierung',
    'Domain Management Schweiz',
    'Passwortmanager für Unternehmen',
    'SSL Zertifikat',
    'Backup Service',
    'CDN Integration',
    'Geschäftsprozess Automatisierung',
    'Workflow Automatisierung Schweiz',
    'Berichterstellung und Analyse',
    'Custom E-Commerce Lösung',
    'Online Shop Entwicklung',
    'Individuelle Plugins',
    'Payment Gateway Integration',
    'Marketing Automatisierung',
    'CRM Integration',
    'Inventar Management',
    'KI Lösungen',
    'Künstliche Intelligenz Agenten',
    'Chatbots für Unternehmen',
    'Datenanalyse Tool',
    'Prozessoptimierung',
    'Maßgeschneiderte IT Lösungen',
    'Individuelle IT Dienstleistungen',
    'Schweiz',
    'Bülach',
    'IT Dienstleister Schweiz',
    'Digitale Transformation',
    'IT Plattform für Unternehmen',
    'Projektmanagement Tool',
    'Plugin Integration',
    'Drittanbieter Integration',
    'Usability Tests',
    'Onboarding für Nutzer',
    'Value Proposition DevHub',
    'Marktanalysen IT',
    'Wettbewerbsanalyse',
    'Marktpositionierung',
    'Supportmaterialien IT',
    'Schulungen für Outsourcing Partner',
    'DevClassic Service',
    'Webseiten erstellen',
    'SEO und Ads optimieren',
    'DevHosting Lösungen',
    'Skalierbares Hosting',
    'Domains und SSL',
    'DevAutomate Prozesse',
    'Automatisierungslösungen',
    'Workflow Automatisierung',
    'DevCommerce Lösungen',
    'E-Commerce für Shops',
    'Payment Gateway',
    'Inventar Automatisierung',
    'DevIntelligence Lösungen',
    'Künstliche Intelligenz',
    'Datenanalyse und Agenten',
    'DevIndividual Service',
    'Individuelle IT Services',
    'Zürich',
    'Winterthur',
    'Bern',
    'Basel',
    'St. Gallen',
    'Luzern',
    'Thun',
    'Schaffhausen',
    'Chur',
    'Aarau',
    'Biel/Bienne',
    'Zug',
    'Olten',
    'Frauenfeld',
    'Rapperswil-Jona',
    'Solothurn',
    'Liestal',
    'Baden',
    'Uster',
    'Kloten',
    'Dübendorf',
    'Wil',
    'Wetzikon',
    'Burgdorf',
    'Wohlen',
    'Langenthal',
    'Gossau',
    'Brugg',
    'Pfäffikon',
    'Weinfelden',
    'Wettingen',
    'Emmen',
    'Horgen',
    'Küssnacht',
    'Meilen',
    'Rheinfelden',
    'Bellinzona'
  ],
  authors: [{ name: 'WebDevian GmbH' }],
  creator: 'WebDevian GmbH',
  publisher: 'WebDevian GmbH',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '@favicon.png',
    shortcut: '@favicon.png',
    apple: '@favicon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '@favicon.png',
    },
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
