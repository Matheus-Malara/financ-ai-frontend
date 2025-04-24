export default function InputTicker({ticker, setTicker, onSubmit, loading}) {
    const handleSubmit = (e) => {
        e.preventDefault();
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
                disabled={loading}
            />
            <button
                type="submit"
                disabled={loading}
                className={`px-4 py-2 rounded text-white transition ${
                    loading
                        ? "bg-blue-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700"
                }`}
            >
                {loading ? "Analyzing..." : "Analyze"}
            </button>
        </form>
    );
}
