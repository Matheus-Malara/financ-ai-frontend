const indicatorLabels = {
    Symbol: "Symbol",
    MarketCapitalization: "Market Cap",
    PERatio: "P/E Ratio",
    PEGRatio: "PEG Ratio",
    PriceToBookRatio: "Price to Book",
    PriceToSalesRatioTTM: "Price to Sales",
    EVToRevenue: "EV to Revenue",
    EVToEBITDA: "EV to EBITDA",
    EPS: "Earnings Per Share (EPS)",
    DividendPerShare: "Dividend Per Share",
    DividendYield: "Dividend Yield",
    DividendDate: "Dividend Date",
    ExDividendDate: "Ex-Dividend Date",
    ProfitMargin: "Profit Margin",
    OperatingMarginTTM: "Operating Margin",
    ReturnOnAssetsTTM: "Return on Assets",
    ReturnOnEquityTTM: "Return on Equity",
    QuarterlyEarningsGrowthYOY: "Earnings Growth (YoY)",
    QuarterlyRevenueGrowthYOY: "Revenue Growth (YoY)",
    AnalystTargetPrice: "Analyst Target Price",
    Beta: "Beta",
    "52WeekHigh": "52-Week High",
    "52WeekLow": "52-Week Low",
};

export default function AnalysisResult({data}) {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl w-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
                📊 Fundamental Indicators
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                {Object.entries(data.indicators).map(([key, value]) => (
                    <div
                        key={key}
                        className="flex justify-between items-center border px-3 py-2 rounded-md bg-gray-50"
                    >
                        <span className="font-medium">{indicatorLabels[key] || key}</span>
                        <span className="text-right">{value}</span>
                    </div>
                ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-3 border-b pb-2">
                🤖 AI Analysis
            </h2>
            <div className="space-y-2 text-gray-700 leading-relaxed">
                <p>
                    <strong className="text-blue-600">Summary:</strong>{" "}
                    {data.ai_analysis.summary}
                </p>
                <p>
                    <strong className="text-green-600">Conclusion:</strong>{" "}
                    {data.ai_analysis.conclusion}
                </p>
            </div>
        </div>
    );
}
