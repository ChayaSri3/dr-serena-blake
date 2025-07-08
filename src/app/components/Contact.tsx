'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    reason: '',
    preferredTime: '',
    agreed: false,
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    reason: '',
    preferredTime: '',
    agreed: '',
  });

  const validate = () => {
    const newErrors: typeof errors = {
      name: '',
      phone: '',
      email: '',
      reason: '',
      preferredTime: '',
      agreed: '',
    };

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.reason.trim()) newErrors.reason = 'Please tell us what brings you here';
    if (!formData.preferredTime.trim()) newErrors.preferredTime = 'Preferred time is required';
    if (!formData.agreed) newErrors.agreed = 'You must agree to be contacted';

    setErrors(newErrors);
    return Object.values(newErrors).every((err) => err === '');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    console.log('Form submitted:', formData);
    alert('Thank you for reaching out!');
    setFormData({
      name: '',
      phone: '',
      email: '',
      reason: '',
      preferredTime: '',
      agreed: false,
    });
    setErrors({
      name: '',
      phone: '',
      email: '',
      reason: '',
      preferredTime: '',
      agreed: '',
    });
  };

  return (
    <section id="contact" className="bg-white py-20 px-4 md:px-12 lg:px-24 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Contact</h2>
        <p className="text-lg text-gray-600 mb-10">
          Have a question or want to schedule an appointment? Fill out the form below and we’ll get back to you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 text-left max-w-xl mx-auto">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
            {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* What brings you here */}
          <div>
            <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">What brings you here?</label>
            <textarea
              name="reason"
              id="reason"
              rows={4}
              value={formData.reason}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
            {errors.reason && <p className="text-red-600 text-sm mt-1">{errors.reason}</p>}
          </div>

          {/* Preferred Time */}
          <div>
            <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">Preferred time to reach you</label>
            <input
              type="text"
              name="preferredTime"
              id="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
            {errors.preferredTime && <p className="text-red-600 text-sm mt-1">{errors.preferredTime}</p>}
          </div>

          {/* Agree to be contacted */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="agreed"
              id="agreed"
              checked={formData.agreed}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="agreed" className="ml-2 block text-sm text-gray-700">
              I agree to be contacted
            </label>
          </div>
          {errors.agreed && <p className="text-red-600 text-sm mt-1">{errors.agreed}</p>}

          {/* Submit */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md shadow transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
