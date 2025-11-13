interface TestimonialCardProps {
  name: string;
  image: string;
  university: string;
  country: string;
  testimonial: string;
  program: string;
}

export default function TestimonialCard({ name, image, university, country, testimonial, program }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-6">
        <img src={image} alt={name} className="w-20 h-20 rounded-full object-cover border-4 border-teal-400" />
        <div className="ml-4">
          <h4 className="text-xl font-bold text-gray-900">{name}</h4>
          <p className="text-teal-600 font-medium">{university}</p>
          <p className="text-gray-500 text-sm">{country}</p>
        </div>
      </div>
      <div className="mb-4">
        <span className="inline-block bg-gradient-to-r from-orange-400 to-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {program}
        </span>
      </div>
      <p className="text-gray-700 leading-relaxed italic">"{testimonial}"</p>
      <div className="flex mt-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
    </div>
  );
}
