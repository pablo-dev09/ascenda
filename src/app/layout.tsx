import type { Metadata, Viewport } from 'next';
import { Montserrat, Poppins } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const SITE_URL = 'https://ascenda.com.br';
const TITLE = 'Ascenda | Soluções Digitais para Pequenas Empresas';
const DESCRIPTION =
  'A Ascenda cria soluções digitais acessíveis, seguras e personalizadas para pequenas empresas que querem crescer.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s | Ascenda',
  },
  description: DESCRIPTION,
  applicationName: 'Ascenda',
  authors: [{ name: 'Ascenda' }],
  creator: 'Ascenda',
  publisher: 'Ascenda',
  category: 'technology',
  keywords: [
    'Ascenda',
    'tecnologia',
    'pequenas empresas',
    'soluções digitais',
    'sites profissionais',
    'automação',
    'sistemas personalizados',
    'startup tecnologia brasil',
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: 'Ascenda',
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: '/og-cover.png',
        width: 1200,
        height: 630,
        alt: 'Ascenda — Tecnologia que protege. Soluções que fazem crescer.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og-cover.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#020611',
  colorScheme: 'dark',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ascenda',
  url: SITE_URL,
  slogan: 'Tecnologia que protege. Soluções que fazem crescer.',
  description: DESCRIPTION,
  email: 'ascenda.corptech@gmail.com',
  telephone: '+55-21-98370-2734',
  areaServed: 'BR',
  knowsLanguage: 'pt-BR',
  sameAs: [],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-navy-950 font-sans text-white antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
