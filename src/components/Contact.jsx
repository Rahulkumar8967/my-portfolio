import React from "react";

const Contact = () => {
  return (
      <div id="contact"
          className="max-w-md mx-auto p-8 bg-gray-800 shadow-lg rounded-lg text-white mt-10">
      <div className="text-center mb-6">
        <h2 className="text-4xl font0bold inline border-b border-gray-500">
          Contact Us
        </h2>
        <p className="py-6">Submit the form below to get in touch with us.</p>
      </div>

          <form action="https://getform.io/f/qblozzra" method="POST"
              className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          className="w-full p-2 bg-transparent border-2 rounded-md focus:outline-none text-white border-gray-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          className="w-full p-2 bg-transparent border-2 rounded-md focus:outline-none text-white border-gray-500"
        />
        <textarea
          name="message"
          placeholder="Enter Your Message"
          className="w-full p-2 bg-transparent border-2 rounded-md focus:outline-none text-white border-gray-500"
          rows="4"
        ></textarea>
        <button className="w-full bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 rounded-md hover:from-blue-500 hover:to-cyan-500 duration-300">
          Let's talk
        </button>
      </form>
    </div>
  );
};

export default Contact;
