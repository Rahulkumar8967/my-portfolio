import React from "react";
import SocialLink from "./SocialLink"; // Import SocialLink component

const Contact = () => {
  return (
    <div
      id="contact"
      className="max-w-lg mx-auto p-8 shadow-2xl rounded-xl bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 text-white mt-40"
    >
      {/* Header Section */}
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold inline border-b-4 border-white pb-2">
          Contact Us
        </h2>
        <p className="py-4 text-gray-200 font-medium">
          We'd love to hear from you! Fill out the form below.
        </p>
      </div>

      {/* Contact Form */}
      <form
        action="https://getform.io/f/qblozzra"
        method="POST"
        className="space-y-5"
      >
        <div className="relative">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            className="w-full p-3 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-gray-900 bg-white shadow-md"
          />
        </div>

        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="w-full p-3 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-gray-900 bg-white shadow-md"
          />
        </div>

        <div className="relative">
          <textarea
            name="message"
            placeholder="Enter Your Message"
            className="w-full p-3 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-gray-900 bg-white shadow-md"
            rows="5"
          ></textarea>
        </div>

        <button className="w-full bg-white text-indigo-700 font-bold px-6 py-3 rounded-lg hover:bg-indigo-500 hover:text-white transition duration-300 shadow-md">
          Send Message
        </button>
      </form>

      <div className="mt-8">
        <h1 className="text-center text-yellow-300 font-extrabold">OR</h1>
        <SocialLink />
      </div>
    </div>
  );
};

export default Contact;
