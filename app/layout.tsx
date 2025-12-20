import type { Metadata } from 'next';
import { Lexend_Deca } from 'next/font/google';
import './globals.css';

const LexendDeca = Lexend_Deca({
  variable: '--font-lexend',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Smart Notes - Task Management',
  description: 'Organize your tasks and projects efficiently',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${LexendDeca.variable} font-lexend antialiased bg-bg-default text-text-default ${/*dark:bg-black dark:text-white  */ ''} mx-mx-page mt-mt-page`}
      >
        {children}
      </body>
    </html>
  );
}
