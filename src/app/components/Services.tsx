'use client';

import Image from 'next/image';

const services = [
  {
    title: 'Individual Therapy',
    description: 'Personalized sessions to help you manage anxiety, stress, or life transitions.',
    image: '/images/couples.jpg',
  },
  {
    title: 'Couples Counseling',
    description: 'Supportive therapy for couples to strengthen communication and connection.',
    image: '/images/individual.jpg',
  },
  {
    title: 'Family Therapy',
    description: 'Guidance and tools for families navigating conflicts or major changes together.',
    image: '/images/family.jpg',
  },
  {
    title: 'Online Therapy',
    description: 'Convenient and secure virtual sessions from the comfort of your home.',
    image: '/images/online.jpg',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">Services</h2>
        <p className="text-lg text-gray-600">
          Dr. Serena Blake offers a range of services designed to support your mental and emotional well-being.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-md transition">
            <div className="relative w-full h-48">
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
