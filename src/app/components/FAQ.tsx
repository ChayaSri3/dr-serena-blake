'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Do you accept insurance?',
    answer: 'No, but a superbill is provided for self-submission.',
  },
  {
    question: 'Are online sessions available?',
    answer: 'Yes—all virtual sessions via Zoom.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: '24-hour notice required.',
  },
  {
    question: 'What services does Dr. Serena Blake offer?',
    answer:
      'Dr. Serena Blake specializes in individual therapy, couples counseling, and anxiety/depression treatment using evidence-based approaches.',
  },
  {
    question: 'How can I book an appointment?',
    answer:
      'You can book an appointment by using the “Book an Appointment” button or through the contact form on this website.',
  },
  {
    question: 'Do you offer online sessions?',
    answer:
      'Yes, Dr. Serena Blake offers both in-person and secure online sessions to accommodate your needs and preferences.',
  },
  {
    question: 'Is my information confidential?',
    answer:
      'Absolutely. All your personal information and session details are kept strictly confidential according to professional ethics and HIPAA regulations.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gray-50 py-20 px-4 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-gray-800">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-md p-4 bg-white shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center focus:outline-none"
              >
                <span className="text-lg font-medium text-gray-800">
                  {faq.question}
                </span>
                <span className="text-2xl text-blue-600">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-4 text-gray-600 text-base leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
