"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "How do I reset my password?",
    answer:
      "To reset your password, go to the login page and click on 'Forgot Password'. Follow the instructions sent to your registered email address.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can contact customer support by filling out the form on the Contact Support page or by emailing support@yourdomain.com.",
  },
  {
    question: "Where can I find tutorials?",
    answer:
      "Our tutorials are available on the Tutorials page, accessible from the main menu.",
  },
  {
    question: "How do I update my profile information?",
    answer:
      "You can update your profile information by going to your account settings and making the necessary changes.",
  },
  {
    question: "Is my personal data secure?",
    answer:
      "Yes, we take your privacy and data security very seriously. We use industry-standard encryption and security practices to protect your information.",
  },
  // Add more FAQs as needed
];

const BrowseFAQs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFAQs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen py-16 px-4 bg-gray-100">
      <section className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Browse FAQs</h1>
        <p className="text-lg mb-6 text-center">
          Find answers to commonly asked questions below.
        </p>

        <div className="mb-8">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search FAQs..."
            className="w-full border border-gray-300 text-slate-600 rounded-lg py-2 px-4"
          />
        </div>

        <div className="space-y-6">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No FAQs found.</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default BrowseFAQs;
