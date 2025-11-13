interface ResourceCardProps {
  title: string;
  description: string;
  downloads: number;
  onDownload: () => void;
}

export default function ResourceCard({ title, description, downloads, onDownload }: ResourceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
      <div className="flex items-start mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div className="ml-4 flex-1">
          <h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
          <p className="text-gray-600 text-sm mb-3">{description}</p>
          <p className="text-xs text-gray-500 mb-3">{downloads.toLocaleString()} downloads</p>
          <button onClick={onDownload} className="text-teal-600 hover:text-teal-700 font-semibold text-sm flex items-center">
            Download PDF
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
