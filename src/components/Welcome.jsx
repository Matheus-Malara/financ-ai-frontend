export default function Welcome() {
    return (
        <div className="flex flex-col items-center text-center text-gray-500 mt-16">
            <div className="text-6xl mb-4">📈</div>
            <h2 className="text-2xl font-semibold mb-2">Welcome to FinancAI</h2>
            <p className="max-w-md">
                Enter a stock ticker (e.g. <code className="text-blue-600 font-mono">AAPL</code>) to receive
                a complete financial analysis powered by AI.
            </p>
        </div>
    );
}
