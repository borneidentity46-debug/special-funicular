import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img src="https://d64gsuwffb70l.cloudfront.net/69156019c1703cff7c9a2eca_1763008818423_49f444ab.jpg" alt="WanderWise Solutions" className="h-16 w-auto" />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-teal-600 font-medium transition-colors">Services</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-teal-600 font-medium transition-colors">Testimonials</button>
            <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-teal-600 font-medium transition-colors">How It Works</button>
            <button onClick={() => scrollToSection('resources')} className="text-gray-700 hover:text-teal-600 font-medium transition-colors">Resources</button>
            <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-2 rounded-lg hover:from-teal-600 hover:to-cyan-700 transition-all font-semibold shadow-md">Book Consultation</button>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50">Services</button>
          <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50">Testimonials</button>
          <button onClick={() => scrollToSection('process')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50">How It Works</button>
          <button onClick={() => scrollToSection('resources')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50">Resources</button>
          <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-3 text-teal-600 font-semibold hover:bg-gray-50">Book Consultation</button>
        </div>
      )}
    </nav>
  );
}
