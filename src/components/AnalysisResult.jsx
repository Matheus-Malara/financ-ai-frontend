import React from "react";
import CompanyDescription from "./CompanyDescription";

const sectionTitles = {
    companyInfo: "🏢 Company Info",
    financialMetrics: "💰 Financial Metrics",
    marketData: "📊 Market Data",
    analystData: "🎯 Analyst Ratings",
    dividendInfo: "💸 Dividend Info"
};

const indicatorLabels = {
    // Raiz
    Symbol: "Symbol",
    Name: "Company Name",

    // companyInfo
    AssetType: "Asset Type",
    CIK: "CIK",
    Exchange: "Exchange",
    Currency: "Currency",
    Country: "Country",
    Sector: "Sector",
    Industry: "Industry",
    Address: "Address",
    OfficialSite: "Official Site",
    FiscalYearEnd: "Fiscal Year End",
    LatestQuarter: "Latest Quarter",

    // financialMetrics
    MarketCapitalization: "Market Cap",
    EBITDA: "EBITDA",
    BookValue: "Book Value",
    EPS: "Earnings Per Share",
    DilutedEPSTTM: "Diluted EPS (TTM)",
    RevenuePerShareTTM: "Revenue/Share (TTM)",
    RevenueTTM: "Revenue (TTM)",
    GrossProfitTTM: "Gross Profit (TTM)",
    ProfitMargin: "Profit Margin",
    OperatingMarginTTM: "Operating Margin",
    ReturnOnAssetsTTM: "Return on Assets",
    ReturnOnEquityTTM: "Return on Equity",
    QuarterlyEarningsGrowthYOY: "Earnings Growth (YoY)",
    QuarterlyRevenueGrowthYOY: "Revenue Growth (YoY)",

    // marketData
    PERatio: "P/E Ratio",
    PEGRatio: "PEG Ratio",
    PriceToBookRatio: "Price/Book",
    PriceToSalesRatioTTM: "Price/Sales",
    EVToRevenue: "EV/Revenue",
    EVToEBITDA: "EV/EBITDA",
    Beta: "Beta",
    "52WeekHigh": "52-Week High",
    "52WeekLow": "52-Week Low",
    "50DayMovingAverage": "50-Day Avg",
    "200DayMovingAverage": "200-Day Avg",
    SharesOutstanding: "Shares Outstanding",

    // analystData
    AnalystTargetPrice: "Target Price",
    AnalystRatingStrongBuy: "Strong Buy",
    AnalystRatingBuy: "Buy",
    AnalystRatingHold: "Hold",
    AnalystRatingSell: "Sell",
    AnalystRatingStrongSell: "Strong Sell",
    TrailingPE: "Trailing P/E",
    ForwardPE: "Forward P/E",

    // dividendInfo
    DividendPerShare: "Dividend/Share",
    DividendYield: "Yield",
    DividendDate: "Dividend Date",
    ExDividendDate: "Ex-Date"
};

function renderSection(sectionData, sectionKey) {
    const wideFields = ["Industry", "Address"];

    return (
        <div key={sectionKey} className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3 border-b pb-1">
                {sectionTitles[sectionKey]}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                {Object.entries(sectionData).map(([key, value]) => {
                    const isWide = wideFields.includes(key);
                    return (
                        <div
                            key={key}
                            className={`flex flex-col sm:flex-row justify-between items-start border px-3 py-2 rounded-md bg-gray-50 ${
                                isWide ? "sm:col-span-2" : ""
                            }`}
                        >
                            <span className="font-medium">{indicatorLabels[key] || key}</span>
                            <span
                                className={`${
                                    isWide
                                        ? "text-right break-words w-full sm:ml-auto"
                                        : "text-right truncate max-w-[60%]"
                                }`}
                            >
                                {value}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}



export default function AnalysisResult({data}) {
    const indicators = data.indicators;

    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl w-full">
            {/* AI Analysis */}
            {data.ai_analysis && (
                <>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
                        🤖 AI Analysis
                    </h2>
                    <div className="space-y-2 text-gray-700 leading-relaxed mb-10">
                        <p>
                            <strong className="text-blue-600">Summary:</strong>{" "}
                            {data.ai_analysis.summary}
                        </p>
                        <p>
                            <strong className="text-green-600">Conclusion:</strong>{" "}
                            {data.ai_analysis.conclusion}
                        </p>
                    </div>
                </>
            )}

            {/* Informações principais */}
            <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-2">
                📄 Basic Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                {["Symbol", "Name"].map((key) => (
                    <div
                        key={key}
                        className="flex justify-between items-start border px-3 py-2 rounded-md bg-gray-50"
                    >
                        <span className="font-medium">{indicatorLabels[key]}</span>
                        <span className="text-right truncate max-w-[60%]">{indicators[key]}</span>
                    </div>
                ))}
            </div>

            {/* Company Description (componente especial) */}
            {indicators.Description && (
                <CompanyDescription text={indicators.Description}/>
            )}

            {/* Seções estruturadas */}
            {Object.entries(indicators)
                .filter(([key]) => sectionTitles[key])
                .map(([sectionKey, sectionData]) =>
                    renderSection(sectionData, sectionKey)
                )}
        </div>
    );
}
