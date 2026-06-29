import type { Metadata } from 'next';
import { Inter, Outfit, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/shared/CustomCursor';
import ScrollProgress from '@/components/shared/ScrollProgress';
import PageLoader from '@/components/shared/PageLoader';
import SmoothScrolling from '@/components/shared/SmoothScrolling';
import MouseBlob from '@/components/shared/MouseBlob';
import { siteConfig } from '@/config/site';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | Vamsi Krishna`,
  },
  description: siteConfig.description,
  keywords: [
    'Software Engineer', 'AI Developer', 'Full-Stack Developer', 'Next.js',
    'React', 'Node.js', 'Python', 'LangChain', 'OpenAI', 'Freelance Developer India',
    'Vamsi Krishna', 'Hyderabad Developer',
  ],
  authors: [{ name: 'Vamsi Krishna', url: siteConfig.url }],
  creator: 'Vamsi Krishna',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: 'Vamsi Krishna Portfolio',
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: 'Vamsi Krishna Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    creator: '@vamsikrishna',
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: siteConfig.url },
  metadataBase: new URL(siteConfig.url),
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Vamsi Krishna',
  jobTitle: 'Software Engineer & AI Developer',
  url: siteConfig.url,
  email: siteConfig.email,
  address: { '@type': 'PostalAddress', addressLocality: 'Hyderabad', addressCountry: 'IN' },
  knowsAbout: ['Next.js', 'React', 'Node.js', 'Python', 'AI Engineering', 'LangChain', 'OpenAI', 'PostgreSQL', 'Docker'],
  sameAs: [
    'https://github.com/vamsikrishna',
    'https://linkedin.com/in/vamsikrishna',
    'https://twitter.com/vamsikrishna',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} antialiased cursor-none lg:cursor-none`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <PageLoader />
          <ScrollProgress />
          <CustomCursor />
          <MouseBlob />
          <Navbar />
          <SmoothScrolling>
            <main id="main-content">
              {children}
            </main>
          </SmoothScrolling>
          <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: 'rgba(15, 23, 42, 0.95)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#f8fafc',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
