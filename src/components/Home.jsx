import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <div className="font-sans flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/" className="navbar-brand">
          Unclewestiee
        </Link>
        <div className="navbar-links">
          <Link to="/gallery" className="nav-link nav-link-primary">
            Gallery
          </Link>
          <Link to="/booking" className="nav-link nav-link-secondary">
            Book Now
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="hero-section"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBob3RvZ3JhcGh5fGVufDB8fDB8fHww")`,
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">Capture Moments That Last</h1>
            <p className="hero-subtitle">
              Professional photography services tailored to your unique needs.
            </p>
            <Link to="/booking" className="hero-button">
              Book a Session
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-8">
          <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <ul className="text-lg text-gray-700 mb-6">
              <li>Hi! I'm a passionate photographer dedicated to capturing life's special moments.</li>
              <li>With years of experience, I ensure every click transforms into a timeless memory.</li>
            </ul>
            <Link to="/about" className="hero-button">
              Learn More
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-gray-100 py-16 px-8">
          <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "📸",
                  title: "Wedding Photography",
                  description: "Capturing your special day with stunning photos.",
                },
                {
                  icon: "🎉",
                  title: "Event Photography",
                  description: "Professional coverage for all kinds of events.",
                },
                {
                  icon: "👩‍🎨",
                  title: "Portraits",
                  description: "Timeless portraits for individuals and families.",
                },
              ].map((service, idx) => (
                <div key={idx} className="card text-center">
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-content">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section id="gallery" className="py-16 px-8">
          <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Gallery</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {["image1.jpg"].map((img, idx) => (
                <div key={idx} className="relative">
                  <img
                    src={`https://plus.unsplash.com/premium_photo-1667538961167-2f0ab7a5046e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=${img}`}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full rounded-lg shadow-md"
                  />
                  <div className="absolute inset-0 flex items-center justify-between px-4">
                    <button className="gallery-arrow">←</button>
                    <button className="gallery-arrow">→</button>
                  </div>
                  <Link
                    to="/gallery"
                    className="absolute bottom-4 right-4 hero-button"
                  >
                    View Full Gallery
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section id="packages" className="bg-gray-100 py-16 px-8">
          <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Packages</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Basic Package",
                  details:
                    "• 2 hours\n• $200\n• 5 edited images\n• 3-day delivery",
                  imgSrc: "https://images.unsplash.com/photo-1721153225882-52494ce13c1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlZGRpbmclMjBwaG90b3N8ZW58MHx8MHx8fDA%3D", // Image for Basic Package
                },
                {
                  title: "Standard Package",
                  details:
                    "• 4 hours\n• $400\n• 15 edited images\n• 5-day delivery",
                  imgSrc: "https://images.unsplash.com/photo-1721153225859-49e6da56f25e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlZGRpbmclMjBwaG90b3N8ZW58MHx8MHx8fDA%3D", // Image for Standard Package
                },
                {
                  title: "Premium Package",
                  details:
                    "• 8 hours\n• $800\n• 30 edited images\n• 7-day delivery",
                  imgSrc: "https://images.unsplash.com/photo-1600164913117-2125c1f60b01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlZGRpbmclMjBwaG90b3N8ZW58MHx8MHx8fDA%3D", // Image for Premium Package
                },
              ].map((pkg, idx) => (
                <div key={idx} className="card">
                  <img
                    src={pkg.imgSrc}
                    alt={pkg.title}
                    className="w-full rounded-lg shadow-md mb-4" // Styling for the image
                  />
                  <h3 className="card-title">{pkg.title}</h3>
                  <pre className="card-content">{pkg.details}</pre>
                  <Link to="/booking" className="hero-button mt-4">
                    Book Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inquiry Hero */}
        <section
          className="hero-section"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0")`,
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h2 className="hero-title">Have Questions?</h2>
            <p className="hero-subtitle">
              Send us an inquiry and we'll get back to you quickly.
            </p>
            <Link to="/contact" className="hero-button">
              Send Inquiry
            </Link>
          </div>
        </section>

        {/* Image Section */}
        <section id="showcase" className="py-16 px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-screen-xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1561726158-ca101f9f3569?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Showcase 1"
              className="rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1655767142078-69071c3ab0b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Showcase 2"
              className="rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Showcase 3"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark-green text-white py-6 px-8">
        <div className="max-w-screen-xl mx-auto text-center">
          <div className="mb-4">
            <a href="https://facebook.com" className="text-white mx-2">
              Facebook
            </a>
            <a href="https://instagram.com" className="text-white mx-2">
              Instagram
            </a>
            <a href="https://twitter.com" className="text-white mx-2">
              Twitter
            </a>
          </div>
          <p>© 2024 unclewestiee Photography. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
