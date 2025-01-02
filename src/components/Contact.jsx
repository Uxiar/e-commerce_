import { div } from 'framer-motion/client';
import React, { useState } from 'react';
import Navbar from './Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Your message has been sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
        <Navbar/>
    <section className="px-8 py-16 mt-20 text-white bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-8 text-5xl font-extrabold text-red-500">Contact Us</h2>
        <p className="mb-8 text-lg">
          Have questions or feedback? We’d love to hear from you! Get in touch with us by filling out the form below, and we’ll get back to you as soon as possible.
        </p>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-lg font-semibold text-white">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 text-white bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-lg font-semibold text-white">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 text-white bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-lg font-semibold text-white">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className="w-full p-3 text-white bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 font-semibold text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Send Message
              </button>
            </div>
          </form>

          {formStatus && (
            <div className="mt-6 text-lg font-semibold text-green-500">
              {formStatus}
            </div>
          )}
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;
