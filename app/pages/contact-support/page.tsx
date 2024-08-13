"use client";
import React, { useState } from "react";

const ContactSupport = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // You can add your form submission logic here, such as sending an API request.
    // For now, we'll just log the input values and show a thank you message.

    console.log("Form Submitted:", { name, email, message });

    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center py-24 bg-gray-100">
      <section className="w-full max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Support</h1>
        <p className="text-lg mb-6 text-center">
          Have a question or need help? Fill out the form below, and we'll get
          back to you as soon as possible.
        </p>

        {submitted ? (
          <div className="text-center text-green-600">
            Thank you! Your message has been sent. We will get back to you
            shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                rows={5}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        )}
      </section>
    </main>
  );
};

export default ContactSupport;
