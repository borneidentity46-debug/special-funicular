interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function ProcessStep({ number, title, description, icon }: ProcessStepProps) {
  return (
    <div className="relative flex flex-col items-center text-center">
      <div className="relative mb-6">
        <div className="w-24 h-24 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-full flex items-center justify-center shadow-xl">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed max-w-xs">{description}</p>
    </div>
  );
}
