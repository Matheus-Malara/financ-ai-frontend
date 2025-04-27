import React from "react";

interface InputTickerProps {
    ticker: string;
    setTicker: (value: string) => void;
    onSubmit: () => void;
    loading: boolean;
}

const InputTicker: React.FC<InputTickerProps> = ({ ticker, setTicker, onSubmit, loading }) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-10 w-full max-w-xl">
            <input
                type="text"
                value={ticker}
                onChange={(e) => setTicker(e.target.value)}
                placeholder="Enter ticker (e.g. AAPL)"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                disabled={loading}
            />
            <button
                type="submit"
                disabled={loading}
                className={`w-full sm:w-auto px-6 py-3 rounded-lg text-white font-semibold transition ${
                    loading
                        ? "bg-cyan-400 cursor-not-allowed"
                        : "bg-cyan-600 hover:bg-cyan-500"
                }`}
            >
                {loading ? "Analyzing..." : "Analyze"}
            </button>
        </form>
    );
};

export default InputTicker;
