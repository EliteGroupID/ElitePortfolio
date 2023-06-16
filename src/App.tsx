import React from "react";
import "./App.css";
import Navbar from "./navbar";
import ScrollToTopButton from "./ScrollToTopButton";

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="App text-white">
      <ScrollToTopButton />
      <Navbar scrollToSection={scrollToSection} />
      <section id="home" className="h-screen bg-slate-600">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold  mb-8">Home</h2>
          {/* Konten Works */}
        </div>
      </section>

      <section id="works" className="h-screen bg-gray-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold  mb-8">Our Works</h2>
          {/* Konten Works */}
        </div>
      </section>

      <section id="service" className="h-screen bg-gray-900">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold  mb-8">Our Service</h2>
          {/* Konten Service */}
        </div>
      </section>

      <section id="contact" className="h-screen bg-gray-950">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold  mb-8">Contact Us</h2>
          {/* Konten Contact */}
        </div>
      </section>
    </div>
  );
}

export default App;
