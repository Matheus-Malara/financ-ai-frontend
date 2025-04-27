import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation();

    return (
        <header className="w-full bg-gradient-to-r from-blue-700 to-cyan-500 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link
                    to="/"
                    className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition"
                >
                    Financ<span className="text-cyan-500">AI</span>
                </Link>

                {/* Navigation */}
                <nav className="flex items-center gap-6 text-sm sm:text-base relative">
                    <div className="relative group">
                        {/* Invisible hover area */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-full w-32 h-6"></div>

                        {/* Features Button */}
                        <button
                            className="px-4 py-2 rounded-md font-semibold text-gray-300 hover:text-cyan-300 hover:bg-gray-800 transition focus:outline-none"
                        >
                            Features ▼
                        </button>

                        {/* Dropdown */}
                        <div
                            className="absolute left-1/2 -translate-x-1/2 top-full mt-2 hidden group-hover:block bg-gray-800 border border-gray-700 rounded-md shadow-lg w-56 transition-all duration-300"
                        >
                            <Link
                                to="/analyze"
                                className={`block px-4 py-2 text-sm hover:bg-gray-700 transition ${
                                    location.pathname === "/analyze"
                                        ? "text-cyan-400"
                                        : "text-gray-300"
                                }`}
                            >
                                📈 Stock Analyzer
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
