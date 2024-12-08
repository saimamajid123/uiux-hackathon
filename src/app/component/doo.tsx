// components/ContactForm.js

export default function ContactForm() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-50">
        <div className="max-w-4xl w-full mx-auto bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Get In Touch With Us
          </h2>
          <p className="text-gray-600 text-center mb-8">
            We are always available to help you. Contact us using the form below or through our office.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Address Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="text-gray-500 text-xl">
                  📍
                </span>
                <div>
                  <p className="font-bold text-gray-700">Address</p>
                  <p className="text-gray-600">123 Main Street, Suite 100, Cityville</p>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-500 text-xl">
                  📞
                </span>
                <div>
                  <p className="font-bold text-gray-700">Phone</p>
                  <p className="text-gray-600">+1 (234) 567-890</p>
                </div>
              </div>
              {/* Working Time */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-500 text-xl">
                  🕒
                </span>
                <div>
                  <p className="font-bold text-gray-700">Working Time</p>
                  <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
            {/* Form Section */}
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Subject"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-teal-500 text-white font-bold rounded-md shadow hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
