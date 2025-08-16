"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" legacyBehavior>
            <a>
              <Image src="/logo.png" alt="Nexflow Logo" width={150} height={30} />
            </a>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="/" legacyBehavior><a className="text-gray-600 hover:text-gray-900">Home</a></Link>
          <Link href="/services" legacyBehavior><a className="text-gray-600 hover:text-gray-900">Services</a></Link>
          <Link href="/about" legacyBehavior><a className="text-gray-600 hover:text-gray-900">About</a></Link>
          <Link href="/contact" legacyBehavior><a className="text-gray-600 hover:text-gray-900">Contact</a></Link>
        </nav>
        <button className="md:hidden flex items-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-4 pt-2 pb-4 space-y-2">
            <Link href="/" legacyBehavior><a className="block text-gray-600 hover:text-gray-900">Home</a></Link>
            <Link href="/services" legacyBehavior><a className="block text-gray-600 hover:text-gray-900">Services</a></Link>
            <Link href="/about" legacyBehavior><a className="block text-gray-600 hover:text-gray-900">About</a></Link>
            <Link href="/contact" legacyBehavior><a className="block text-gray-600 hover:text-gray-900">Contact</a></Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
