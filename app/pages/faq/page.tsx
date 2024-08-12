// app/faq/page.tsx
import React from "react";

const faqs = [
  {
    question: "What is Computer Helpers?",
    answer:
      "Computer Helpers is a platform offering expert advice, tutorials, and support for various computer-related issues.",
  },
  {
    question: "How can I get support?",
    answer:
      'You can get support by clicking the "Get Help Now" button on our homepage or visiting our support page directly.',
  },
  {
    question: "Are the tutorials free?",
    answer:
      "Yes, we offer a range of free tutorials on our website. Some advanced resources might be available as premium content.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can contact our support team through the contact form on our website or by emailing support@computerhelpers.com.",
  },
  {
    question: "Do you offer in-person support?",
    answer:
      "Currently, we offer support and services online. We do not have in-person support at this time.",
  },
];

const FAQPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
