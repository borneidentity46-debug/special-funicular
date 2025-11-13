export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <img src="https://d64gsuwffb70l.cloudfront.net/69156019c1703cff7c9a2eca_1763008818423_49f444ab.jpg" alt="WanderWise" className="h-16 mb-4 brightness-0 invert" />
            <p className="text-gray-400 text-sm">Your trusted partner in achieving global education dreams.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Admission Assistance</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Scholarship Coaching</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Study Permit Review</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Academic CV Prep</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Resources</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Email: info@wanderwise.com</li>
              <li>Phone: +233 XX XXX XXXX</li>
              <li>Accra, Ghana</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 WanderWise Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
