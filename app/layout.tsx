'use client';

import { useState } from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import { Sidebar } from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <html lang="en">
      <body className={`${inter.className} flex bg-gray-100`}>
        <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
        <main className="flex-1 overflow-y-auto transition-all duration-300">
          {children}
        </main>
      </body>
    </html>
  );
}