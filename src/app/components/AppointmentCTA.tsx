'use client';

import Link from 'next/link';

export default function AppointmentCTA() {
  return (
    <section className="bg-blue-50 py-16 px-4 md:px-12 lg:px-24 text-center" id="appointment">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
          Ready to Take the First Step?
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Schedule an appointment with Dr. Serena Blake today and start your journey toward healing and growth.
        </p>

        <Link href="#contact">
          <a className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-3 px-6 rounded-lg shadow transition duration-300">
            Book an Appointment
          </a>
        </Link>
      </div>
    </section>
  );
}
