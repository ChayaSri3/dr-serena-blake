'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-700">
          <Link href="#home">Dr. Serena Blake</Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle Menu"
          >
            {isOpen ? '✖' : '☰'}
          </button>
        </div>

        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <Link href="#about" className="hover:text-blue-600 transition">About</Link>
          </li>
          <li>
            <Link href="#services" className="hover:text-blue-600 transition">Services</Link>
          </li>
          <li>
            <Link href="#faq" className="hover:text-blue-600 transition">FAQ</Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-blue-600 transition">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pb-4">
          <ul className="space-y-4 text-gray-700 font-medium">
            <li>
              <Link href="#about" onClick={toggleMenu}>About</Link>
            </li>
            <li>
              <Link href="#services" onClick={toggleMenu}>Services</Link>
            </li>
            <li>
              <Link href="#faq" onClick={toggleMenu}>FAQ</Link>
            </li>
            <li>
              <Link href="#contact" onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
