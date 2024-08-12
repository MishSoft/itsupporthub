// app/about/page.tsx
import React from "react";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700">
          At Computer Helpers, our mission is to provide reliable, expert advice
          and support for all your computer needs. We aim to make technology
          more accessible and less frustrating by offering comprehensive
          tutorials, troubleshooting guides, and personalized help.
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-6">
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <img
                src="https://www.ringcentral.com/content/dam/rc-www/en_us/images/content/teams/overview-jupiter-ui/blade_support-jpg-rendition.webp"
                alt="Team Member 1"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
              <p className="text-gray-600 mt-2">
                John is passionate about technology and has over a decade of
                experience in IT support and software development.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-6">
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <img
                src="https://cdn.create.vista.com/api/media/small/285777908/stock-photo-selective-focus-happy-businessman-headset-gesturing-while-smiling-office"
                alt="Team Member 2"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
              <p className="text-gray-600">Head of Support</p>
              <p className="text-gray-600 mt-2">
                Jane leads our support team and ensures that all customer
                inquiries are handled efficiently and effectively.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-6">
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <img
                src="https://www.ringcentral.com/content/dam/rc-www/en_us/images/content/seo/customer-support-team/Call-queue-hero-png-rendition.webp"
                alt="Team Member 3"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Alice Johnson</h3>
              <p className="text-gray-600">Lead Developer</p>
              <p className="text-gray-600 mt-2">
                Alice is responsible for developing and maintaining our website
                and ensuring that it meets the highest standards of
                functionality and user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            Customer First: We prioritize our customers' needs and strive to
            exceed their expectations.
          </li>
          <li>
            Integrity: We operate with honesty and transparency in everything we
            do.
          </li>
          <li>
            Innovation: We continuously seek new and better ways to solve
            problems and deliver value.
          </li>
          <li>
            Excellence: We are committed to delivering high-quality work and
            providing exceptional support.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
