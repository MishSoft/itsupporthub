"use client";

import React, { useState } from "react";

const SubmitHelpRequest = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Handle form submission logic here
    console.log("Form submitted:", { name, email, subject, message });

    // Simulate form submission success
    setIsSubmitted(true);

    // Clear form fields
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <main className="min-h-screen py-16 px-4 bg-gray-100">
      <section className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Submit a Help Request
        </h1>
        <p className="text-lg mb-6 text-center">
          Need assistance? Fill out the form below, and our support team will
          get back to you as soon as possible.
        </p>

        {isSubmitted ? (
          <div className="text-center text-green-600">
            Thank you! Your request has been submitted successfully.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border border-gray-300 text-slate-600 rounded-lg py-2 px-4"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 text-slate-600 rounded-lg py-2 px-4"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-gray-700 font-semibold mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className="w-full border border-gray-300 text-slate-600 rounded-lg py-2 px-4"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
                className="w-full border border-gray-300 text-slate-600 rounded-lg py-2 px-4"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
              >
                Submit Request
              </button>
            </div>
          </form>
        )}
      </section>
    </main>
  );
};

export default SubmitHelpRequest;
