import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import CompanyDescription from "./CompanyDescription";

interface AnalysisResultProps {
    data: {
        indicators: Record<string, any>;
        ai_analysis?: {
            summary: string;
            conclusion: string;
        };
    };
}

const sectionTitles: Record<string, string> = {
    companyInfo: "🏢 Company Info",
    financialMetrics: "💰 Financial Metrics",
    marketData: "📊 Market Data",
    analystData: "🎯 Analyst Ratings",
    dividendInfo: "💸 Dividend Info",
};

const indicatorLabels: Record<string, string> = {
    Symbol: "Symbol",
    Name: "Company Name",
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
    AnalystTargetPrice: "Target Price",
    AnalystRatingStrongBuy: "Strong Buy",
    AnalystRatingBuy: "Buy",
    AnalystRatingHold: "Hold",
    AnalystRatingSell: "Sell",
    AnalystRatingStrongSell: "Strong Sell",
    TrailingPE: "Trailing P/E",
    ForwardPE: "Forward P/E",
    DividendPerShare: "Dividend/Share",
    DividendYield: "Yield",
    DividendDate: "Dividend Date",
    ExDividendDate: "Ex-Date",
};

const indicatorDescriptions: Record<string, string> = {
    MarketCapitalization: "Total market value of a company's outstanding shares.",
    EBITDA: "Earnings before interest, taxes, depreciation, and amortization.",
    BookValue: "Value of the company's assets minus its liabilities.",
    EPS: "Earnings per share — profit divided by outstanding shares.",
    DilutedEPSTTM: "Diluted earnings per share over the trailing twelve months.",
    RevenuePerShareTTM: "Company revenue divided by shares over the trailing 12 months.",
    RevenueTTM: "Total revenue over the last 12 months.",
    GrossProfitTTM: "Total profit after subtracting cost of goods sold (last 12 months).",
    ProfitMargin: "Net income divided by revenue — shows profitability.",
    OperatingMarginTTM: "Operational profitability over the last 12 months.",
    ReturnOnAssetsTTM: "Efficiency at using assets to generate profit.",
    ReturnOnEquityTTM: "How well a company uses investments to generate earnings.",
    QuarterlyEarningsGrowthYOY: "Earnings growth compared to same quarter last year.",
    QuarterlyRevenueGrowthYOY: "Revenue growth compared to same quarter last year.",
    PERatio: "Price-to-earnings ratio — valuation based on current earnings.",
    PEGRatio: "P/E ratio adjusted by expected growth rate.",
    PriceToBookRatio: "Price per share divided by book value per share.",
    PriceToSalesRatioTTM: "Company's market cap divided by its total sales (TTM).",
    EVToRevenue: "Enterprise value divided by revenue.",
    EVToEBITDA: "Enterprise value divided by EBITDA.",
    Beta: "Volatility of the stock compared to the market.",
    "52WeekHigh": "Highest price over the past 52 weeks.",
    "52WeekLow": "Lowest price over the past 52 weeks.",
    "50DayMovingAverage": "Average stock price over the last 50 days.",
    "200DayMovingAverage": "Average stock price over the last 200 days.",
    SharesOutstanding: "Total shares currently issued and outstanding.",
    AnalystTargetPrice: "Price analysts expect the stock to reach.",
    AnalystRatingStrongBuy: "Analysts recommend strong buy.",
    AnalystRatingBuy: "Analysts recommend buy.",
    AnalystRatingHold: "Analysts recommend hold.",
    AnalystRatingSell: "Analysts recommend sell.",
    AnalystRatingStrongSell: "Analysts recommend strong sell.",
    DividendPerShare: "Amount paid per share in dividends.",
    DividendYield: "Dividend per share divided by price per share.",
    DividendDate: "Date the dividend is paid.",
    ExDividendDate: "Date after which a buyer is not entitled to the declared dividend.",
};

const wideFields = ["Industry", "Address"];

function renderSection(sectionData: Record<string, any>, sectionKey: string) {
    return (
        <motion.div
            key={sectionKey}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-8"
        >
            <h3 className="text-xl font-semibold text-cyan-400 mb-3 border-b border-gray-700 pb-1">
                {sectionTitles[sectionKey]}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300">
                {Object.entries(sectionData).map(([key, value]) => {
                    const isWide = wideFields.includes(key);
                    return (
                        <div
                            key={key}
                            className={`flex flex-col sm:flex-row justify-between items-start border border-gray-700 px-4 py-3 rounded-md bg-gray-800 ${
                                isWide ? "sm:col-span-2" : ""
                            }`}
                        >
              <span className="font-medium flex items-center gap-1 relative group">
                {indicatorDescriptions[key] && (
                    <span className="text-cyan-400 cursor-pointer relative">
                    🛈
                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                      {indicatorDescriptions[key]}
                    </span>
                  </span>
                )}
                  {indicatorLabels[key] || key}
              </span>
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
        </motion.div>
    );
}

const AnalysisResult: React.FC<AnalysisResultProps> = ({ data }) => {
    const indicators = data.indicators;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-900 p-8 rounded-2xl shadow-lg max-w-5xl w-full"
        >
            {data.ai_analysis && (
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-bold text-cyan-400 mb-6 border-b border-gray-700 pb-3">
                        🤖 AI Analysis
                    </h2>
                    <div className="space-y-4 text-gray-300 leading-relaxed mb-10">
                        <p>
                            <strong className="text-cyan-500">Summary:</strong> {data.ai_analysis.summary}
                        </p>
                        <p>
                            <strong className="text-green-400">Conclusion:</strong> {data.ai_analysis.conclusion}
                        </p>
                    </div>
                </motion.div>
            )}

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-2xl font-bold text-cyan-400 mb-6 border-b border-gray-700 pb-3">
                    📄 Basic Information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300">
                    {["Symbol", "Name"].map((key) => (
                        <div
                            key={key}
                            className="flex justify-between items-start border border-gray-700 px-4 py-3 rounded-md bg-gray-800"
                        >
                            <span className="font-medium">{indicatorLabels[key]}</span>
                            <span className="text-right truncate max-w-[60%]">{indicators[key]}</span>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Company Description (mantém como está, pode animar depois se quiser) */}
            {indicators.Description && <CompanyDescription text={indicators.Description} />}

            {/* Renderização de todas as seções estruturadas */}
            {Object.entries(indicators)
                .filter(([key]) => sectionTitles[key])
                .map(([sectionKey, sectionData]) =>
                    renderSection(sectionData as Record<string, any>, sectionKey)
                )}
        </motion.div>
    );
};

export default AnalysisResult;
