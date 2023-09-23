import './globals.css';
import type { Metadata } from 'next';
import { Montserrat, Unica_One } from 'next/font/google';
import localFont from 'next/font/local';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import TanstackProvider from '../../provider/TanstackProvider';

const options = {
  title: 'GetLinked Tech Hackathon 2023 | Home',
  description:
    'This is the home page of GetLinked Tech Hackathon 2023 submission by Jola Blvck',
  url: 'https://get-linked-hackathon-bay.vercel.app/',
  ogImage: 'https://img.icons8.com/ios-filled/50/decentralized-network.png',
};

export const metadata: Metadata = {
  title: options.title,
  metadataBase: new URL(options.url),
  description: options.description,
  openGraph: {
    title: options.title,
    url: options.url,
    siteName: 'get-linked-hackathon-bay.vercel.app',
    locale: 'en_US',
    type: 'website',
    description: options.description,
    images: options.ogImage,
  },
  alternates: {
    canonical: options.url,
  },
  themeColor: '#000000',
};

const montserrat = Montserrat({ subsets: ['latin'], variable: '--body-font' });

const unica_one = Unica_One({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--unica-font',
});

const clash = localFont({
  src: [
    {
      path: '../../public/ClashDisplay_Complete/Fonts/OTF/ClashDisplay-Bold.otf',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../../public/ClashDisplay_Complete/Fonts/OTF/ClashDisplay-Semibold.otf',
      weight: '600',
      style: 'semibold',
    },
    {
      path: '../../public/ClashDisplay_Complete/Fonts/OTF/ClashDisplay-Medium.otf',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../../public/ClashDisplay_Complete/Fonts/OTF/ClashDisplay-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--heading-font',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${montserrat.variable} ${clash.variable} ${unica_one.variable}`}
    >
      <body className=' font-body'>
        <TanstackProvider>
          <Header />
          {children}
          <Footer />
        </TanstackProvider>
      </body>
    </html>
  );
}
