import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InputTicker from "./components/InputTicker";
import Loading from "./components/Loading";
import AnalysisResult from "./components/AnalysisResult";
import { fetchAnalysis } from "./services/api";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import LoadingBar from "./components/LoadingBar";

function AnalysisPage() {
    const [ticker, setTicker] = useState("");
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleAnalyze = async () => {
        console.log("Ticker:", ticker);
        console.log("API URL:", import.meta.env.VITE_API_URL);

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
        <main className="flex-grow bg-gray-900 text-white p-8 flex flex-col items-center">
            <h1 className="text-4xl font-extrabold text-center text-cyan-400 mb-10">
                Stock Analysis with <span className="text-cyan-500">AI</span>
            </h1>

            <InputTicker ticker={ticker} setTicker={setTicker} onSubmit={handleAnalyze} loading={loading} />

            {loading && <Loading />}
            {error && (
                <div className="mt-6 text-red-400 font-semibold bg-red-900 bg-opacity-20 p-4 rounded-lg max-w-md text-center">
                    {error}
                </div>
            )}
            {!loading && !data && !error && (
                <div className="mt-10">
                    <Welcome />
                </div>
            )}
            {data && (
                <div className="mt-10 w-full flex justify-center">
                    <AnalysisResult data={data} />
                </div>
            )}
        </main>
    );
}

function App() {
    return (
        <Router>
            <LoadingBar />
            <div className="flex flex-col min-h-screen bg-gray-900 text-white">
                <Header />
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/analyze" element={<AnalysisPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
