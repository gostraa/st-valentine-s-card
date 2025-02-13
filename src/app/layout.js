import { Darumadrop_One, Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});
const darumaDrop = Darumadrop_One({
  variable: '--font-darumaDrop',
  subsets: ['latin'],
  weight: '400',
});

export const metadata = {
  title: 'For My Greatest Love',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${darumaDrop.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
