import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-gray-800 text-gray-300">
            <div className="container mx-auto flex flex-col items-center justify-center py-6">
                <p className="text-sm">&copy; {new Date().getFullYear()} FinancAI. All rights reserved.</p>
                <div className="flex gap-4 mt-2">
                    <a href="#" className="hover:text-white">Privacy</a>
                    <a href="#" className="hover:text-white">Terms</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
