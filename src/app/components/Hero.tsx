'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-24 px-4 md:px-12 lg:px-24 text-center"
      id="home"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
          Compassionate Therapy with <span className="text-blue-600">Dr. Serena Blake</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Supporting your journey to mental wellness through personalized care and proven methods.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md shadow transition duration-300"
          >
            Book a Session
          </Link>
          <Link
            href="#about"
            className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-md transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
