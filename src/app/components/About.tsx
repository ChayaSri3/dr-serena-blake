'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="bg-white py-20 px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-10">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/serena-about.jpg"
              alt="Dr. Serena Blake"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-left text-gray-800 max-w-prose">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-1">
            About Dr. Serena Blake
          </h2>
          <p className="text-lg text-black font-medium mb-1">
            (Clinical Psychologist, PsyD)
          </p>
          <h3 className="text-xl md:text-2xl font-semibold text-pink-800 mb-4">
            Dr. Serena Blake
          </h3>

          <p className="text-lg font-medium text-gray-700 mb-4">
            <strong className="text-blue-700">Experience:</strong> 8 years of practice, 500+ sessions
          </p>

          <p className="text-base leading-relaxed mb-4 text-gray-700">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA,
            with eight years of experience and over 500 client sessions. She blends evidence-based
            approaches—like cognitive-behavioral therapy and mindfulness—with compassionate,
            personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            Whether you meet in her Maplewood Drive office or connect virtually via Zoom,
            Dr. Blake is committed to creating a safe, supportive space for you to thrive.
            Her work is grounded in empathy, integrity, and the belief that lasting change is possible for everyone.
          </p>
        </div>
      </div>
    </section>
  );
}
