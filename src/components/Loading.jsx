export default function Loading() {
    return (
        <div className="w-full max-w-4xl bg-white p-8 rounded-2xl shadow-lg animate-pulse">
            <div className="mb-6 h-6 bg-gray-200 rounded w-1/2"></div>
            <div className="space-y-3">
                {Array.from({length: 6}).map((_, idx) => (
                    <div key={idx} className="h-4 bg-gray-200 rounded w-full"></div>
                ))}
            </div>
            <div className="mt-10 h-6 bg-gray-200 rounded w-1/2"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                {Array.from({length: 6}).map((_, idx) => (
                    <div key={idx} className="h-6 bg-gray-200 rounded w-full"></div>
                ))}
            </div>
        </div>
    );
}
