import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <input type="text" placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
        <input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
        <select value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
          <option value="">Select Service</option>
          <option>Admission Assistance</option>
          <option>Scholarship Coaching</option>
          <option>Study Permit Review</option>
          <option>Academic CV Preparation</option>
        </select>
      </div>
      <textarea placeholder="Tell us about your study abroad goals..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows={4} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent mb-6" />
      <button type="submit" className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 shadow-md hover:shadow-lg">
        Book Free Consultation
      </button>
      {submitted && <p className="mt-4 text-center text-green-600 font-semibold">Thank you! We'll contact you soon.</p>}
    </form>
  );
}
