import {useState} from "react";
import InputTicker from "./components/InputTicker";
import Loading from "./components/Loading";
import AnalysisResult from "./components/AnalysisResult";
import {fetchAnalysis} from "./services/api";
import Welcome from "./components/Welcome.jsx";

function App() {
    const [ticker, setTicker] = useState("");
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleAnalyze = async () => {
        if (!ticker.trim()) return;

        setLoading(true);
        setError("");
        setData(null);

        try {
            const result = await fetchAnalysis(ticker.trim().toUpperCase());
            setData(result);
        } catch (err) {
            console.error(err);
            setError("Could not fetch analysis. Please check the ticker and try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
            <h1 className="text-4xl font-bold text-blue-700 mb-8">
                Financ<span className="text-cyan-500">AI</span> — Stock Analysis with <span className="text-cyan-500">AI</span>
            </h1>


            <InputTicker ticker={ticker} setTicker={setTicker} onSubmit={handleAnalyze} loading={loading} />

            {loading && <Loading/>}
            {error && <p className="text-red-600">{error}</p>}
            {!loading && !data && !error && <Welcome />}
            {data && <AnalysisResult data={data} />}

        </div>
    );
}

export default App;
