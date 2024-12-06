import React from "react";

const About = () => (
  <section id="about" className="py-20 bg-white">
    <div className="max-w-screen-lg mx-auto text-center px-6">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-800">About Me</h2>
      <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
        I am a passionate photographer with years of experience capturing
        life’s most cherished moments. From weddings to portraits, I bring
        creativity and professionalism to every session. My mission is to
        create timeless visuals that you’ll treasure forever.
      </p>
      <div className="mt-8">
        <img
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWd4fHxx8fHx8&auto=format&fit=crop&w=1400&q=80"
          alt="Photographer at work"
          className="rounded-lg shadow-xl w-full max-w-md mx-auto transform transition-all duration-300 hover:scale-105"
        />
      </div>
    </div>
  </section>
);

export default About;
