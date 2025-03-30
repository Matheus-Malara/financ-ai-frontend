export default function InputTicker({ ticker, setTicker, onSubmit }) {
    const handleSubmit = (e) => {
        e.preventDefault(); // evita reload da página
        onSubmit();
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
            <input
                type="text"
                value={ticker}
                onChange={(e) => setTicker(e.target.value)}
                placeholder="Enter ticker (e.g. AAPL)"
                className="px-4 py-2 border rounded w-64"
            />
            <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Analyze
            </button>
        </form>
    );
}
