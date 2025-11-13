import Navigation from './Navigation';
import ServiceCard from './ServiceCard';
import TestimonialCard from './TestimonialCard';
import ProcessStep from './ProcessStep';
import ContactForm from './ContactForm';
import ResourceCard from './ResourceCard';
import Footer from './Footer';

export default function AppLayout() {
  const services = [
    { title: 'Admission Assistance', description: 'Expert guidance through university applications', features: ['University selection', 'Application review', 'Essay editing', 'Interview prep'] },
    { title: 'Scholarship Coaching', description: 'Maximize your funding opportunities', features: ['Scholarship search', 'Application strategy', 'Essay coaching', 'Interview training'] },
    { title: 'Study Permit Review', description: 'Ensure visa success', features: ['Document review', 'Application guidance', 'Interview prep', 'Appeal support'] },
    { title: 'Academic CV Prep', description: 'Professional document preparation', features: ['CV writing', 'SOP editing', 'LOR guidance', 'Portfolio review'] }
  ];

  const testimonials = [
    { name: 'Kwame Mensah', image: 'https://d64gsuwffb70l.cloudfront.net/6915617a5436c2e94e3141a1_1763008981448_29e714c1.webp', university: 'Harvard University', country: 'USA', program: 'MBA', testimonial: 'WanderWise made my dream come true. Their scholarship coaching helped me secure full funding!' },
    { name: 'Ama Osei', image: 'https://d64gsuwffb70l.cloudfront.net/6915617a5436c2e94e3141a1_1763008983352_aad60844.webp', university: 'Oxford University', country: 'UK', program: 'MSc Economics', testimonial: 'The admission assistance was exceptional. I got into my top choice university!' },
    { name: 'Kofi Asante', image: 'https://d64gsuwffb70l.cloudfront.net/6915617a5436c2e94e3141a1_1763008985221_b85ca626.webp', university: 'University of Toronto', country: 'Canada', program: 'Engineering', testimonial: 'Study permit review service saved me. My visa was approved on first try!' },
    { name: 'Akosua Boateng', image: 'https://d64gsuwffb70l.cloudfront.net/6915617a5436c2e94e3141a1_1763008987088_233e5a78.webp', university: 'MIT', country: 'USA', program: 'Computer Science', testimonial: 'Professional CV preparation opened doors I never imagined. Thank you WanderWise!' },
    { name: 'Yaw Owusu', image: 'https://d64gsuwffb70l.cloudfront.net/6915617a5436c2e94e3141a1_1763008989023_b50ecda4.webp', university: 'Cambridge', country: 'UK', program: 'Law', testimonial: 'The team guided me every step. Now studying at my dream university!' },
    { name: 'Abena Adjei', image: 'https://d64gsuwffb70l.cloudfront.net/6915617a5436c2e94e3141a1_1763008990891_409d5a9c.webp', university: 'Stanford', country: 'USA', program: 'Medicine', testimonial: 'Best investment I made. WanderWise expertise is unmatched!' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <section className="relative h-[600px] flex items-center justify-center text-white" style={{backgroundImage: 'url(https://d64gsuwffb70l.cloudfront.net/6915617a5436c2e94e3141a1_1763008980345_453537fa.webp)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-teal-900/90"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Your Gateway to Global Education</h1>
          <p className="text-xl md:text-2xl mb-8">Expert guidance for admission, scholarships, visas & academic documents</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})} className="bg-gradient-to-r from-teal-500 to-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg hover:from-teal-600 hover:to-cyan-700 transition-all shadow-lg">Explore Services</button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg">Book Consultation</button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Comprehensive support for every step of your study abroad journey</p>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} icon={<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>} onGetStarted={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} />
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Success Stories from Ghana</h2>
          <p className="text-gray-600 text-center mb-12">Hear from Ghanaian students who achieved their dreams</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => <TestimonialCard key={idx} {...t} />)}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-gray-600 text-center mb-12">Your journey in 4 simple steps</p>
          <div className="grid md:grid-cols-4 gap-8">
            <ProcessStep number={1} title="Consultation" description="Free initial consultation to understand your goals" icon={<svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>} />
            <ProcessStep number={2} title="Strategy" description="Personalized roadmap tailored to your profile" icon={<svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>} />
            <ProcessStep number={3} title="Execution" description="Expert support through applications and documents" icon={<svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>} />
            <ProcessStep number={4} title="Success" description="Celebrate your acceptance and prepare for departure" icon={<svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} />
          </div>
        </div>
      </section>

      <section id="resources" className="py-20 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Free Resources</h2>
          <p className="text-gray-600 text-center mb-12">Download our comprehensive guides</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard title="USA Study Guide" description="Complete guide to studying in America" downloads={5420} onDownload={() => alert('Download started')} />
            <ResourceCard title="UK Universities List" description="Top UK universities accepting Ghanaians" downloads={3890} onDownload={() => alert('Download started')} />
            <ResourceCard title="Scholarship Database" description="1000+ scholarships for international students" downloads={8230} onDownload={() => alert('Download started')} />
            <ResourceCard title="Visa Checklist" description="Document requirements for all countries" downloads={6150} onDownload={() => alert('Download started')} />
            <ResourceCard title="CV Templates" description="Professional academic CV templates" downloads={4670} onDownload={() => alert('Download started')} />
            <ResourceCard title="SOP Examples" description="Winning statement of purpose samples" downloads={7890} onDownload={() => alert('Download started')} />
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Book Your Free Consultation</h2>
          <p className="text-gray-600 text-center mb-12">Let's discuss your study abroad goals</p>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
