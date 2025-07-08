'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold">Dr. Serena Blake</h3>
          <p className="text-sm text-gray-500">Licensed Therapist & Mental Wellness Advocate</p>
        </div>

        <div className="flex space-x-6">
          <Link href="#about" className="hover:text-blue-600 transition">About</Link>
          <Link href="#services" className="hover:text-blue-600 transition">Services</Link>
          <Link href="#faq" className="hover:text-blue-600 transition">FAQ</Link>
          <Link href="#contact" className="hover:text-blue-600 transition">Contact</Link>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Dr. Serena Blake. All rights reserved.
      </div>
    </footer>
  );
}
