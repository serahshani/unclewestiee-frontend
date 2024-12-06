import React from "react";

const Services = () => (
  <section id="services" className="py-20 bg-gray-100">
    <div className="max-w-screen-lg mx-auto text-center px-6">
      <h2 className="text-4xl font-semibold mb-6 text-gray-800">Our Services</h2>
      <p className="text-lg text-gray-600 mb-8">
        Explore the range of professional photography services we offer to
        capture your most memorable moments.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Wedding Photography</h3>
          <p className="text-lg text-gray-600">
            Capture the magic of your special day with timeless and beautiful wedding photos.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Portrait Sessions</h3>
          <p className="text-lg text-gray-600">
            Perfectly tailored portrait sessions to highlight your unique personality.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Event Photography</h3>
          <p className="text-lg text-gray-600">
            Professional event coverage to ensure no moment goes unnoticed.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Product Photography</h3>
          <p className="text-lg text-gray-600">
            High-quality images that showcase your products in the best light.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
