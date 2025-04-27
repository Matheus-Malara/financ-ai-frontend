import React from "react";
import { Link } from "react-router-dom";
import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";

const Home: React.FC = () => {
    const hero = useFadeInOnScroll();
    const about = useFadeInOnScroll();
    const howItWorks = useFadeInOnScroll();
    const benefits = useFadeInOnScroll();
    const samples = useFadeInOnScroll();
    const testimonials = useFadeInOnScroll();

    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col">
            {/* Hero Section */}
            <section
                ref={hero.ref}
                className={`flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-br from-blue-900 to-purple-900 ${hero.fadeInClass}`}
            >
                <h1 className="text-5xl font-extrabold mb-6">
                    Welcome to Financ<span className="text-cyan-400">AI</span>
                </h1>
                <p className="text-lg mb-8 max-w-2xl">
                    Revolutionizing stock analysis with the power of Artificial Intelligence.
                </p>
                <Link to="/analyze">
                    <button className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-3 px-8 rounded-full text-lg transition">
                        Try Now
                    </button>
                </Link>
            </section>

            {/* About Section */}
            <section ref={about.ref} className={`py-16 px-8 ${about.fadeInClass}`}>
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">About FinancAI</h2>
                    <p className="text-gray-300">
                        FinancAI leverages cutting-edge AI technologies to provide deep, real-time stock market analysis. Our goal is to make financial insights accessible to everyone.
                    </p>
                </div>
            </section>

            {/* How It Works Section */}
            <section ref={howItWorks.ref} className={`py-16 px-8 bg-gray-800 ${howItWorks.fadeInClass}`}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
                    <div className="grid md:grid-cols-3 gap-10 text-center">
                        <div>
                            <div className="text-5xl mb-4">📈</div>
                            <h3 className="text-xl font-semibold mb-2">Enter Ticker</h3>
                            <p className="text-gray-400">Input the stock symbol you want to analyze.</p>
                        </div>
                        <div>
                            <div className="text-5xl mb-4">🧠</div>
                            <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
                            <p className="text-gray-400">Our AI processes vast financial data to generate insights.</p>
                        </div>
                        <div>
                            <div className="text-5xl mb-4">📊</div>
                            <h3 className="text-xl font-semibold mb-2">View Results</h3>
                            <p className="text-gray-400">Get a detailed financial overview and intelligent suggestions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section ref={benefits.ref} className={`py-16 px-8 ${benefits.fadeInClass}`}>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Benefits</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-4xl mb-4">⚡</div>
                            <h3 className="text-xl font-semibold mb-2">Fast Analysis</h3>
                            <p className="text-gray-400">Receive insights within seconds, anytime you need.</p>
                        </div>
                        <div>
                            <div className="text-4xl mb-4">🔒</div>
                            <h3 className="text-xl font-semibold mb-2">Secure Data</h3>
                            <p className="text-gray-400">Your data remains safe and confidential with us.</p>
                        </div>
                        <div>
                            <div className="text-4xl mb-4">💡</div>
                            <h3 className="text-xl font-semibold mb-2">Smart Insights</h3>
                            <p className="text-gray-400">Understand not just numbers, but the bigger market picture.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sample Analysis Section */}
            <section ref={samples.ref} className={`py-16 px-8 bg-gray-800 ${samples.fadeInClass}`}>
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Sample Analysis</h2>
                    <p className="text-gray-400 mb-4">
                        Curious? See how FinancAI analyzes Tesla (TSLA), Amazon (AMZN) and more.
                    </p>
                    <Link to="/analyze">
                        <button className="mt-6 bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-3 px-8 rounded-full text-lg transition">
                            Try Now
                        </button>
                    </Link>
                </div>
            </section>

            {/* Testimonials Section */}
            <section ref={testimonials.ref} className={`py-16 px-8 ${testimonials.fadeInClass}`}>
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">What People Say</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <p className="text-gray-300">"FinancAI helped me understand investments like never before!"</p>
                            <span className="block mt-4 font-semibold text-cyan-400">— Anna B.</span>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <p className="text-gray-300">"Fast, reliable, and surprisingly accurate analyses. Highly recommend!"</p>
                            <span className="block mt-4 font-semibold text-cyan-400">— John D.</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
